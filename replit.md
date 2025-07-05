# EcoWaste - Sustainable Waste Management Platform

## Overview

EcoWaste is a comprehensive educational platform focused on sustainable waste management for rural communities. The application provides interactive learning experiences, waste segregation guidance, composting education, and community impact tracking. Built with modern web technologies, it features a React frontend with TypeScript, Node.js/Express backend, and uses Drizzle ORM for database management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom eco-friendly color schemes
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Educational Features
- **Interactive Quiz System**: Multi-question quiz with score tracking and analytics
- **Waste Segregation Guide**: Visual categorization of organic, recyclable, and non-recyclable waste
- **Composting Education**: Step-by-step composting process with visual aids
- **Best Practices**: Comprehensive guide for waste reduction and reuse strategies

### User Experience
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Visual Effects**: Cursor trails, floating particles, and smooth animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized images, lazy loading, and efficient rendering

### Data Management
- **Quiz Tracking**: Stores user quiz attempts with scores and completion timestamps
- **Community Impact**: Tracks metrics like families practicing, waste reduced, and areas completed
- **In-Memory Storage**: Development mode uses memory storage with fallback to database
- **Real-time Updates**: Live statistics and progress tracking

## Data Flow

1. **User Interaction**: Frontend components capture user actions and form submissions
2. **API Communication**: TanStack Query manages HTTP requests to Express API endpoints
3. **Data Validation**: Zod schemas validate incoming data on both client and server
4. **Database Operations**: Drizzle ORM handles database queries and mutations
5. **Response Handling**: Structured API responses with error handling and logging
6. **State Updates**: React Query automatically updates UI with fresh data

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **zod**: Schema validation library

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution engine
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting
- **@replit/vite-plugin-cartographer**: Development tooling for Replit

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild compiles TypeScript server code to `dist/index.js`
- **Database**: Drizzle migrations manage schema changes
- **Assets**: Static files served from Express with proper caching headers

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: Hot reload with Vite middleware for instant updates
- **Production**: Optimized builds with tree-shaking and code splitting

### Development Workflow
- **Local Development**: `npm run dev` starts development server with hot reload
- **Database Management**: `npm run db:push` applies schema changes
- **Type Checking**: `npm run check` validates TypeScript across the codebase
- **Build Process**: `npm run build` creates production-ready assets

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```