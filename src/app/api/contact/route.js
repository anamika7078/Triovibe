import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const formData = await req.json();

        // Validate required fields
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.country) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Forward to backend API
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
        const response = await fetch(`${backendUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data.error || 'Failed to submit contact form' }, { status: response.status });
        }

        return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ 
            error: 'Failed to submit contact form',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, { status: 500 });
    }
}

