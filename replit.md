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
- July 01, 2025. Initial setup and migration from Replit Agent
- July 01, 2025. Implemented professional design system with gradients, shadows, and modern visual effects:
  * Added sophisticated gradient backgrounds (bg-gradient-hero, bg-gradient-section, bg-gradient-warm, etc.)
  * Introduced professional shadow system (shadow-elegant, shadow-gold with hover states)
  * Enhanced glass effects and lighting (glass-effect, light-glow, ambient-light)
  * Improved button styles with modern animations and transitions
  * Updated all landing page sections with cohesive visual hierarchy
  * Replaced solid colors with subtle, warm gradients for professional appearance
- July 01, 2025. Major theme overhaul to dark professional design:
  * Converted entire site to elegant dark theme with high contrast
  * Updated color system: dark backgrounds (#1a1a1a family) with gold/yellow accents
  * Maintained excellent readability with white text on dark backgrounds
  * Removed VideoSection completely as requested
  * Completely rebuilt TestimonialsSection with text-based carousel featuring user avatars
  * Enhanced course content communication - clearly shows both video lessons AND spreadsheet included
  * Improved responsive design with comprehensive mobile optimization
  * Added professional carousel navigation and auto-rotation for testimonials
- July 03, 2025. Implemented subtle light effects and homogeneous section flow:
  * Replaced complex gradients with simple vertical transitions for smooth section flow
  * Added gentle light effects: soft glows, ambient lighting, and floating light orbs
  * Created breathing animations that appear and disappear delicately (8-25s cycles)
  * Maintained professional dark theme while adding natural lighting depth
  * Ensured seamless visual connection between all sections
  * Removed distracting decorative elements in favor of subtle atmospheric effects
  * Fixed React warnings by removing invalid DOM attributes
- July 03, 2025. Comprehensive mobile responsiveness optimization and performance improvements:
  * Fixed AboutSection being completely cut off on mobile devices
  * Removed gap between countdown timer and hero section on mobile
  * Implemented responsive design with proper margins, text sizing, and image scaling across all sections
  * Added image preloading for critical assets (heros.png, perfil.JPG, perfil 2.JPG) to improve performance
  * Optimized all sections (Hero, About, CopyCentral, Testimonials, Contact, Quiz, FAQ) for mobile devices
  * Enhanced responsive typography with proper breakpoints (text-sm, text-base, text-lg, etc.)
  * Improved mobile navigation and touch interactions in testimonials carousel
  * Added loading="lazy" to non-critical images for better performance
  * Updated container padding system for better mobile margins (px-4 sm:px-6 lg:px-8)
  * Maintained gender-neutral language across all content ("pessoas" instead of "mulheres")
  * Ensured consistent visual hierarchy and accessibility across all screen sizes