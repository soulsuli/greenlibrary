# المكتبة الخضراء (Green Plant Library)

## Overview

المكتبة الخضراء is an Arabic-language plant care library application that helps users discover and learn how to care for houseplants. The application provides detailed plant information including watering schedules, sunlight requirements, seasonal care tips, and common issue solutions. The interface is fully RTL (right-to-left) optimized for Arabic content with bilingual plant names (Arabic and English).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui component library (New York style)
- **Build Tool**: Vite with React plugin

The frontend uses a component-based architecture with pages in `client/src/pages/` and reusable components in `client/src/components/`. RTL layout is configured at the HTML root level with Arabic fonts (Tajawal and Cairo from Google Fonts).

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful JSON endpoints under `/api/`

The server provides a simple API layer with routes defined in `server/routes.ts`. Currently uses in-memory storage (`server/storage.ts`) with plant data hardcoded. The architecture supports future database integration via Drizzle ORM.

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` using Zod for validation
- **Current Storage**: In-memory array (ready for database migration)

The schema defines Plant entities with comprehensive fields for care instructions, including seasonal care arrays and common issues with solutions.

### Build and Development
- **Development**: `tsx` for TypeScript execution with Vite dev server
- **Production Build**: Custom build script using esbuild for server, Vite for client
- **Output**: Server bundle at `dist/index.cjs`, static files at `dist/public/`

### Design System
- **Typography**: Cairo (headers) and Tajawal (body) Arabic-optimized fonts
- **Color Scheme**: Green primary color (HSL 142) with light/dark mode support
- **Layout**: RTL-first design with responsive grid system
- **Components**: Comprehensive shadcn/ui library with Radix UI primitives

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migration tooling (`db:push` script)
- **connect-pg-simple**: Session storage for PostgreSQL

### Third-Party UI Libraries
- **Radix UI**: Full primitive component suite (accordion, dialog, dropdown, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **TypeScript**: Strict mode with path aliases configured

### API Structure
Current endpoints:
- `GET /api/plants` - List all plants
- `GET /api/plants/:slug` - Get plant by URL slug
- `GET /api/plants/search/:query` - Search plants by name