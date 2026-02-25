# SMTP Configuration for Contact Form

The contact form sends emails to **info@triovibe.com** when users submit their contact details.

## Setup Instructions

1. Create a `.env.local` file in the root directory of your project.

2. Add the following environment variables:

```env
# SMTP Server Host
SMTP_HOST=smtp.gmail.com

# SMTP Port (587 for TLS, 465 for SSL)
SMTP_PORT=587

# Use secure connection (true for SSL/465, false for TLS/587)
SMTP_SECURE=false

# SMTP Username (your email address)
SMTP_USER=your-email@gmail.com

# SMTP Password (your email password or app-specific password)
SMTP_PASS=your-password-or-app-password
```

## Common SMTP Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Note:** For Gmail, you need to:
1. Enable 2-Step Verification
2. Generate an App Password at: https://myaccount.google.com/apppasswords
3. Use the App Password (not your regular password) in `SMTP_PASS`

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailtrap (for testing)
```env
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_SECURE=false
SMTP_USER=your-mailtrap-username
SMTP_PASS=your-mailtrap-password
```

## Email Recipient

All contact form submissions are automatically sent to: **info@triovibe.com**

## Testing

After setting up your SMTP configuration:
1. Restart your Next.js development server
2. Fill out the contact form
3. Submit the form
4. Check the `info@triovibe.com` inbox for the notification email

## Troubleshooting

- **"Email service not configured"**: Make sure all SMTP environment variables are set in `.env.local`
- **"Failed to send email"**: Check your SMTP credentials and ensure your email provider allows SMTP access
- **Gmail issues**: Make sure you're using an App Password, not your regular password
- **Port issues**: Try port 465 with `SMTP_SECURE=true` if 587 doesn't work

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords for Gmail instead of your main password
- Consider using environment-specific SMTP services for production

