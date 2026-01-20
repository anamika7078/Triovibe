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

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const fullName = `${firstName} ${lastName}`;

        // Email options
        const mailOptions = {
            from: `"ENCY Sales Notification" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            subject: `New Sales Inquiry: ${fullName} (${enquiryType})`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
                    <h2 style="color: #0f172a; border-bottom: 2px solid #2dd4bf; padding-bottom: 10px;">New Inquiry Received</h2>
                    
                    <div style="margin-top: 20px;">
                        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
                        ${enquiryType === 'Organization' ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Country:</strong> ${country}</p>
                        <p><strong>Industry Focus:</strong> ${industryFocus}</p>
                    </div>

                    <div style="margin-top: 20px; padding: 15px; bg-color: #f8fafc; border-radius: 8px;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message || 'No message provided.'}</p>
                    </div>

                    <div style="margin-top: 20px; font-size: 12px; color: #64748b;">
                        <p>Privacy Policy Accepted: ${acceptPrivacy ? 'Yes' : 'No'}</p>
                        <p>Marketing Updates Opt-in: ${receiveUpdates ? 'Yes' : 'No'}</p>
                    </div>
                    
                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
                    <p style="font-size: 12px; color: #94a3b8; text-align: center;">Sent from ENCY Contact Sales Form</p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('SMTP Error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

