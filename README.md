# TSES - Learning Management System

A modern, full-featured Learning Management System built with Next.js, Redux Toolkit, and TypeScript.

## 🚀 Deployment

**Live Demo:** [https://www.tsesltd.vercel.app](https://tsesltd.vercel.app/)

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

## 🛠️ Tech Stack

### Frontend

- **Next.js 14+** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### State Management & Data Fetching

- **Redux Toolkit** - State management
- **RTK Query** - Data fetching and caching

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript Config** - Type checking configuration

## ✨ Features

- 📚 Course management and browsing
- 🔍 Advanced search and filtering
- 📊 Interactive dashboard
- 📄 Pagination for large datasets
- 🎨 Modern, responsive UI design
- 🌐 API integration with Redux Toolkit Query
- 📱 Mobile-first responsive design

## 🏁 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd tses
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_BASE_URL=your_api_url_here
   # Add other environment variables as needed
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Folder Structure

```
tses/
├── .next/                      # Next.js build output (auto-generated)
├── app/                        # Next.js App Router
│   ├── dashboard/             # Dashboard pages and layouts
│   ├── favicon.ico            # App favicon
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page
│
├── node_modules/              # Project dependencies
│
├── public/                    # Static assets
│   └── [images, fonts, etc.]
│
├── src/                       # Source code
│   ├── components/            # Reusable React components
│   │   ├── custom-icons/     # Custom icon components
│   │   ├── custom-pagination/ # Pagination component
│   │   └── [other components]
│   │
│   ├── data/                  # Mock data and constants
│   │
│   ├── lib/                   # Utility functions and helpers
│   │
│   ├── screens/               # Page-level components/screens
│   │   └── dashboard/        # Dashboard screen components
│   │
│   ├── state/                 # Redux state management
│   │   └── api/              # RTK Query API slices
│   │
│   └── utils/                 # Utility functions
│
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── next.config.ts            # Next.js configuration
├── next-env.d.ts             # Next.js TypeScript declarations
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── postcss.config.mjs        # PostCSS configuration
├── README.md                 # Project documentation (this file)
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

### Key Directories Explained

#### `/app`

Next.js 14 App Router directory containing:

- Route definitions
- Layout components
- Page components
- Global styles

#### `/src/components`

Reusable UI components:

- `custom-icons/` - Custom SVG icon components
- `custom-pagination/` - Pagination component with filtering
- Other shared components

#### `/src/state`

Redux Toolkit state management:

- `api/` - RTK Query API endpoints and slices
- Store configuration
- Type definitions

#### `/src/screens`

Page-level components organized by feature:

- `dashboard/` - Dashboard-related screens and components

#### `/src/lib` & `/src/utils`

Helper functions, utilities, and shared logic

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api

# Add other environment variables as needed
```

## 📜 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment tools
- All contributors and supporters of this project
