# Finanças com Propósito - Landing Page

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) that serves as a landing page for a financial education course called "Finanças com Propósito" (Finances with Purpose). The application is designed to convert visitors into customers through compelling copy, testimonials, interactive elements, and strategic call-to-action placements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: React Router for single-page application navigation
- **State Management**: React Query (@tanstack/react-query) for server state management
- **UI Components**: Comprehensive set of accessible components using Radix UI primitives
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### Landing Page Sections
1. **CountdownTimer**: Creates urgency with a 15-minute countdown
2. **HeroSection**: Primary value proposition and call-to-action
3. **AboutSection**: Personal branding and credibility building
4. **VideoSection**: YouTube video integration for social proof
5. **CopyCentralSection**: Core benefits and problem-solution fit
6. **QuizSection**: Interactive quiz for engagement and lead qualification
7. **TestimonialsSection**: Social proof through customer testimonials
8. **ContactSection**: Contact information and final conversion attempt
9. **FAQSection**: Address common objections and concerns

### UI Components (shadcn/ui)
- Comprehensive component library including buttons, forms, dialogs, toasts
- Accessible design patterns following WAI-ARIA guidelines
- Consistent theming with CSS custom properties
- Responsive design with mobile-first approach

### Interactive Features
- Scroll-triggered animations using Intersection Observer
- Fixed CTA button that appears after scrolling
- Interactive quiz with scoring system
- Testimonial carousel with auto-rotation
- Mobile-responsive navigation and layout

## Data Flow

### Frontend Data Flow
1. User interacts with landing page components
2. React Query manages any server state (currently minimal)
3. Local state handles UI interactions (quiz, carousel, etc.)
4. External conversions redirect to payment processor (Kiwify)

### Backend Data Flow
1. Express server handles API routes (prefixed with /api)
2. Storage interface abstracts database operations
3. Drizzle ORM provides type-safe database queries
4. User management system prepared for future authentication needs

## External Dependencies

### Payment Processing
- **Kiwify**: External payment processor for course sales
- All purchase CTAs redirect to: `https://pay.kiwify.com.br/pJETYxg`

### Media Assets
- YouTube video integration for social proof content
- Image assets stored in `/lovable-uploads/` directory
- Responsive image handling for testimonials and about section

### Development Tools
- **Replit Integration**: Custom error overlays and development banners
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TypeScript**: Full type safety across frontend and backend

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- Express server with tsx for backend development
- Concurrent development with middleware integration

### Production Build
- Vite builds optimized static assets to `dist/public`
- esbuild bundles server code to `dist/index.js`
- Static file serving integrated with Express
- Environment-based configuration for database connections

### Database Management
- Drizzle migrations stored in `/migrations` directory
- Schema definitions in `/shared/schema.ts` for code sharing
- Environment variable configuration for database URL

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 01, 2025. Initial setup