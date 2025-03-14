# Voxpro Waitlist Worker

This Cloudflare Worker handles email waitlist signups for Voxpro. It:
1. Validates email addresses
2. Stores them in KV storage
3. Sends confirmation emails using Resend

## Setup

1. Make sure you have the following environment variables set in Cloudflare:
   - `RESEND_API_KEY`: Your Resend API key

2. Ensure the KV namespace is set up:
   - Namespace: `voxpro-waitlist`
   - Binding name: `WAITLIST`

## Development

The worker is configured using Wrangler. The main code is in `src/index.js`.

## API

### POST /

Accepts JSON body:
```json
{
  "email": "user@example.com"
}
```

Returns:
```json
{
  "success": true,
  "message": "Successfully joined the waitlist! Check your email for confirmation."
}
```

## Error Handling

The worker includes comprehensive error handling for:
- Invalid email formats
- KV storage issues
- Email sending failures

All errors are logged and return appropriate HTTP status codes.
