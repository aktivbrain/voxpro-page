// Send confirmation email
try {
  console.log('📧 Sending confirmation email via MailChannels')
  const emailPayload = {
    from: 'Voxpro <waitlist@voxpro.app>',
    to: email,
    subject: 'Welcome to Voxpro Waitlist',
    text: 'Thank you for joining our waitlist. We are excited to have you on board!'
  }
  
  console.log('📧 Email payload:', JSON.stringify(emailPayload))
} catch (error) {
  console.error('📧 Error sending confirmation email:', error)
} 