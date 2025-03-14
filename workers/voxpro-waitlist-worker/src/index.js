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

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders
    })
  }

  try {
    const body = await request.json()
    console.log('Received request body:', body)

    const { email } = body
    console.log('Processing email:', email)

    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Please provide a valid email address'
      }), {
        status: 400,
        headers: corsHeaders
      })
    }

    // Store email in KV
    try {
      await WAITLIST.put(email, new Date().toISOString())
      console.log('Email stored in KV successfully')
    } catch (kvError) {
      console.error('KV Error:', kvError)
      throw new Error('Failed to store email in KV: ' + kvError.message)
    }

    // Send confirmation email
    try {
      console.log('Sending confirmation email via Resend')
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
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #FF9EAE;">Welcome to Voxpro!</h1>
              <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
              <p>We'll keep you updated on our launch and any exciting developments.</p>
              <p>Best regards,<br>The Voxpro Team</p>
            </div>
          `
        })
      })

      const responseText = await response.text()
      console.log('Resend API response:', responseText)

      if (!response.ok) {
        throw new Error(`Resend API error: ${responseText}`)
      }
    } catch (emailError) {
      console.error('Email Error:', emailError)
      throw new Error('Failed to send email: ' + emailError.message)
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully joined the waitlist! Check your email for confirmation.'
    }), {
      headers: corsHeaders
    })

  } catch (error) {
    console.error('Main Error:', error)
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
