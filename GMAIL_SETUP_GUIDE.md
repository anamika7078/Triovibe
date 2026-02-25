# Gmail SMTP Setup Guide - Fix Authentication Error

If you're getting the error: **"535-5.7.8 Username and Password not accepted"**, follow these steps:

## Quick Fix Steps

### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", find **2-Step Verification**
4. Click **Get Started** and follow the prompts to enable it

### Step 2: Generate an App Password
1. After enabling 2-Step Verification, go back to **Security**
2. Under "Signing in to Google", you'll now see **App passwords**
3. Click on **App passwords**
4. You may need to sign in again
5. Select **Mail** as the app and **Other (Custom name)** as the device
6. Enter a name like "TRIOVIBE Contact Form"
7. Click **Generate**
8. Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)
9. **Copy this password** - you won't be able to see it again!

### Step 3: Update Your .env.local File
Open your `.env.local` file and update it:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
```

**Important:**
- Use the **App Password** (the 16-character code) in `SMTP_PASS`, NOT your regular Gmail password
- Remove any spaces from the App Password when pasting it
- The `SMTP_USER` should be your full Gmail address

### Step 4: Restart Your Server
1. Stop your Next.js server (Ctrl+C)
2. Start it again: `npm run dev`

### Step 5: Test
Try submitting the contact form again. It should work now!

## Alternative: Using OAuth2 (Advanced)

If App Passwords don't work for your account, you can use OAuth2, but this requires more setup. For most cases, App Passwords are the easiest solution.

## Still Having Issues?

1. **Double-check your App Password**: Make sure there are no extra spaces
2. **Verify 2-Step Verification is enabled**: App Passwords only work if 2-Step Verification is on
3. **Check your email**: Make sure `SMTP_USER` matches the Gmail account where you generated the App Password
4. **Try port 465**: If port 587 doesn't work, try:
   ```env
   SMTP_PORT=465
   SMTP_SECURE=true
   ```

## Security Note

- App Passwords are safer than using your main password
- Each App Password is unique and can be revoked individually
- You can generate multiple App Passwords for different applications
- If you suspect a password is compromised, you can revoke it without affecting your main account

