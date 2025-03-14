addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function handleRequest(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  }

  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    console.error(`Invalid method: ${request.method}`)
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Method not allowed' 
    }), {
      status: 405,
      headers: corsHeaders
    })
  }

  try {
    // Parse request body
    let body
    try {
      body = await request.json()
      console.log('📥 Received request:', JSON.stringify(body))
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError)
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid JSON payload'
      }), {
        status: 400,
        headers: corsHeaders
      })
    }

    const { email } = body

    // Validate email
    if (!email || !isValidEmail(email)) {
      console.error('❌ Invalid email:', email)
      return new Response(JSON.stringify({
        success: false,
        error: 'Please provide a valid email address'
      }), {
        status: 400,
        headers: corsHeaders
      })
    }

    console.log('✉️ Processing email:', email)

    // Store email in KV
    try {
      const timestamp = new Date().toISOString()
      await WAITLIST.put(email, timestamp)
      console.log('💾 Email stored in KV:', email)
    } catch (kvError) {
      console.error('❌ KV Error:', kvError)
      throw new Error('Failed to store email in KV: ' + kvError.message)
    }

    // Send confirmation email
    try {
      console.log('📧 Sending confirmation email via Resend')
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Voxpro <noreply@voxpro.app>',
          to: email,
          subject: 'Welcome to Voxpro Waitlist',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #FF9EAE; margin-bottom: 24px;">Welcome to Voxpro!</h1>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
                Thank you for joining our waitlist. We're excited to have you on board!
              </p>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
                We'll keep you updated on our launch and any exciting developments.
              </p>
              <div style="margin-top: 32px; color: #666;">
                <p style="margin-bottom: 8px;">Best regards,</p>
                <p style="margin-bottom: 0;">The Voxpro Team</p>
              </div>
            </div>
          `
        })
      })

      const responseText = await response.text()
      console.log('📬 Resend API response:', responseText)

      if (!response.ok) {
        throw new Error(`Resend API error: ${responseText}`)
      }
    } catch (emailError) {
      console.error('❌ Email Error:', emailError)
      throw new Error('Failed to send email: ' + emailError.message)
    }

    console.log('✅ Successfully processed email:', email)
    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully joined the waitlist! Check your email for confirmation.'
    }), {
      headers: corsHeaders
    })

  } catch (error) {
    console.error('❌ Main Error:', error)
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error',
      details: error.message
    }), {
      status: 500,
      headers: corsHeaders
    })
  }
}
