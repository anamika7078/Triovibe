This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

1. Make sure the backend server is running (see `../Backend/README.md`)
2. Create a `.env.local` file in the Frontend directory:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   ```

### Running the Frontend

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Admin Panel

Access the admin panel at:
- Login: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Signup: [http://localhost:3000/admin/signup](http://localhost:3000/admin/signup)
- Dashboard: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

The admin panel allows you to:
- Create admin accounts
- View all contact form submissions
- Search and filter submissions
- Delete submissions
- View detailed submission information

### Contact Form

The contact form on the main website now sends data to the backend API instead of using SMTP. All submissions are stored in the PostgreSQL database and can be viewed in the admin panel.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
