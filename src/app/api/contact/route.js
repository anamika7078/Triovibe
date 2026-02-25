import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const {
            enquiryType,
            organization,
            firstName,
            lastName,
            email,
            phone,
            country,
            industryFocus,
            message,
            acceptPrivacy,
            receiveUpdates
        } = await req.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !country) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Check if SMTP configuration exists
        if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('SMTP configuration missing');
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
        }

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const fullName = `${firstName} ${lastName}`;

        // Email options
        const mailOptions = {
            from: `"TRIOVIBE Sales Notification" <${process.env.SMTP_USER}>`,
            to: 'info@triovibe.com',
            replyTo: email,
            subject: `New Sales Inquiry: ${fullName} (${enquiryType})`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                    <h2 style="color: #0f172a; border-bottom: 2px solid #2dd4bf; padding-bottom: 10px;">New Inquiry Received</h2>
                    
                    <div style="margin-top: 20px;">
                        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
                        ${enquiryType === 'Organization' ? `<p><strong>Organization:</strong> ${organization || 'Not provided'}</p>` : ''}
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Country:</strong> ${country}</p>
                        <p><strong>Industry Focus:</strong> ${industryFocus}</p>
                    </div>

                    <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message || 'No message provided.'}</p>
                    </div>

                    <div style="margin-top: 20px; font-size: 12px; color: #64748b;">
                        <p>Privacy Policy Accepted: ${acceptPrivacy ? 'Yes' : 'No'}</p>
                        <p>Marketing Updates Opt-in: ${receiveUpdates ? 'Yes' : 'No'}</p>
                    </div>
                    
                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
                    <p style="font-size: 12px; color: #94a3b8; text-align: center;">Sent from TRIOVIBE Contact Sales Form</p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('SMTP Error:', error);
        
        // Provide more helpful error messages
        let errorMessage = 'Failed to send email';
        if (error.code === 'EAUTH') {
            errorMessage = 'Authentication failed. For Gmail, make sure you\'re using an App Password (not your regular password). Enable 2-Step Verification and generate an App Password at: https://myaccount.google.com/apppasswords';
        } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
            errorMessage = 'Connection failed. Please check your SMTP_HOST and SMTP_PORT settings.';
        } else if (error.responseCode === 535) {
            errorMessage = 'Invalid credentials. For Gmail, use an App Password instead of your regular password.';
        }
        
        return NextResponse.json({ 
            error: errorMessage,
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, { status: 500 });
    }
}

