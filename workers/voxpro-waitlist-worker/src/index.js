import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function handleRequest(request, env) {
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

    // Send confirmation email using Cloudflare Email API
    try {
      console.log('📧 Sending confirmation email via Cloudflare')
      
      const msg = createMimeMessage();
      msg.setSender({ name: "Voxpro", addr: "waitlist@voxpro.app" });
      msg.setRecipient(email);
      msg.setSubject("Welcome to the Voxpro Waitlist");
      msg.addMessage({
        contentType: 'text/plain',
        data: `Hi there,

Thank you for joining the Voxpro waitlist! We're excited to have you on board.

We've successfully added your email address (${email}) to our waitlist and will notify you as soon as we launch.

If you have any questions in the meantime, feel free to reply to this email.

Best regards,
The Voxpro Team

---
To unsubscribe from these notifications, please reply with "unsubscribe" in the subject line.`
      });

      const message = new EmailMessage(
        "waitlist@voxpro.app",
        email,
        msg.asRaw()
      );

      await env.WAITLIST_EMAIL.send(message);
      console.log('📬 Email sent successfully')

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
