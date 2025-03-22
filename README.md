# Stayfy

A modern vacation rental platform built with Next.js, designed to offer a seamless experience for both listing properties and booking stays

## 🌐 Live Demo
- AWS: https://main.d18vkvosyd5ym0.amplifyapp.com/
- Vercel: https://stayfy-pi.vercel.app/

## ✨ Features

- **User Authentication**: Secure email/password and social authentication
- **Property Management**: 
  - List and manage properties with detailed information
  - Upload property images with Cloudinary integration
  - Set pricing and availability
- **Advanced Search & Filtering**:
  - Location-based search with interactive maps
  - Date range selection
  - Price range filtering
  - Property type categorization
- **Booking System**:
  - Real-time availability checking
  - Secure reservation process
  - Booking management for hosts and guests
- **User Dashboard**:
  - Track reservations and bookings
  - Manage favorite properties
  - View booking history

## 🛠️ Tech Stack

- **Frontend**: 
  - Next.js 13
  - React
  - TypeScript
  - Tailwind CSS
  - React Hook Form
- **Backend**: 
  - Next.js API Routes
  - MongoDB with Prisma ORM
- **Authentication**: 
  - NextAuth.js
- **Cloud Services**:
  - AWS Amplify
  - Cloudinary (Image hosting)
- **Maps Integration**:
  - Leaflet

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/The-Matrix-7/Stayfy.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Set up your MongoDB database and update the DATABASE_URL in .env

5. Run the development server
```bash
npm run dev
```

## 📝 Environment Variables

Create a `.env` file with the following:

```plaintext
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```
