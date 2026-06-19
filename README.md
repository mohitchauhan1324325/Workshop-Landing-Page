# WorkShop Landing Page

A modern, full-stack web application for a workshop landing page with registration and inquiry management capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Features](#features)
- [Project Structure Details](#project-structure-details)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## 🎯 Overview

WorkShop Landing Page is a comprehensive solution for showcasing workshop details, managing registrations, and handling user inquiries. It features a responsive frontend built with React and Vite, complemented by a Node.js backend for data management.

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality tool
- **PostCSS** - CSS transformation

### Backend
- **Node.js** - Runtime environment
- **Express** (implied) - Web framework
- **Database** - Configured via db.js

## 📁 Project Structure

```
WorkShop_Landing_Page/
├── backend/                 # Backend server
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── models/
│   │   └── Enquiry.js     # Enquiry data model
│   ├── routes/
│   │   └── enquiry.js     # API routes for enquiries
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
│
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Accordion.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── IconCard.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Details.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Outcomes.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   └── WhyChoose.jsx
│   │   ├── App.jsx        # Main App component
│   │   ├── App.css        # App styles
│   │   ├── index.css      # Global styles
│   │   ├── main.jsx       # Entry point
│   │   └── assets/        # Static assets
│   ├── public/            # Public static files
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.cjs # Tailwind CSS config
│   ├── postcss.config.cjs # PostCSS config
│   ├── eslint.config.js   # ESLint configuration
│   ├── package.json       # Frontend dependencies
│   ├── index.html         # HTML entry point
│   └── README.md          # Frontend readme
```

## 📦 Prerequisites

Before running the project, ensure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- A **database** (configured in `backend/config/db.js`)

## 🚀 Installation

### 1. Clone or Extract the Project

```bash
cd WorkShop_Landing_Page
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

## ▶️ Running the Project

### Start Backend Server

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:5000` (or your configured port)

### Start Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the port shown in terminal)

### Production Build

To build the frontend for production:

```bash
cd frontend
npm run build
```

The optimized build will be in the `dist/` folder.

## ✨ Features

- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **Workshop Information** - Showcase workshop details, outcomes, and FAQ
- **Registration Form** - Collect user registrations
- **Inquiry Management** - Handle user inquiries through API
- **Reusable Components** - Modular component architecture
- **Accordion UI** - Expandable sections for FAQ
- **Icon Cards** - Visual content cards with icons
- **Modern Stack** - Built with latest web technologies

## 📄 Project Structure Details

### Frontend Components

- **Hero.jsx** - Landing hero section
- **Details.jsx** - Workshop details section
- **WhyChoose.jsx** - Why choose us section
- **Outcomes.jsx** - Learning outcomes section
- **FAQ.jsx** - Frequently asked questions
- **RegisterForm.jsx** - User registration form
- **Footer.jsx** - Website footer
- **Accordion.jsx** - Reusable accordion component
- **Button.jsx** - Reusable button component
- **Card.jsx** - Content card component
- **IconCard.jsx** - Icon-based card component

### Backend

- **server.js** - Express server initialization
- **routes/enquiry.js** - Enquiry API endpoints
- **models/Enquiry.js** - Database schema for enquiries
- **config/db.js** - Database connection setup

## 🔌 API Endpoints

(Update these based on your actual endpoints)

- `POST /api/enquiry` - Submit an inquiry

*Refer to `backend/routes/enquiry.js` for detailed endpoint information*

## 🌍 Environment Variables

Create a `.env` file in the backend folder (if needed):

```env
PORT=3000
DATABASE_URL=your_database_url
NODE_ENV=development
```


## Author

Mohit Chauhan
"# Workshop-Landing-Page" 
