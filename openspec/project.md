# Project Context

## Purpose
MetalShares is a luxury metals investment platform website that provides an elegant, sophisticated user experience for investors interested in precious metals. The platform features a modern design with glassmorphism effects, luxury color palettes, and responsive functionality to serve high-end clients in the precious metals market.

## Tech Stack
- Next.js 15
- TypeScript
- Tailwind CSS
- Shadcn UI components
- React Hook Form
- Zod for validation
- Lucide React for icons
- Radix UI primitives

## Project Conventions

### Code Style
- Use TypeScript for all components with strict typing
- Follow camelCase for variable and function names
- Use PascalCase for React components
- Maintain 2-space indentation
- Use functional components with hooks
- Follow React best practices for performance and accessibility

### Architecture Patterns
- Component-based architecture with reusable UI elements
- One-page scrollable design with smooth navigation
- Mobile-first responsive approach
- Separation of concerns: sections, UI components, and forms
- Global state management using React Context API where needed
- CSS-in-JS with Tailwind utility classes

### Testing Strategy
- Component testing with React Testing Library
- End-to-end testing with Playwright
- Form validation testing with Zod schemas
- Responsive design testing across multiple screen sizes
- Accessibility testing using automated tools

### Git Workflow
- Feature branch workflow
- Conventional commits with semantic versioning
- Pull requests with code review process
- Branch naming: feature/short-description, bugfix/short-description

## Domain Context
The precious metals investment industry requires trust, transparency, and professional presentation. The platform should convey luxury, security, and confidence to potential investors. Design elements should reflect the value and stability of precious metals investments.

## Important Constraints
- All UI components must be WCAG 2.1 AA compliant
- Page load times must be under 3 seconds
- Mobile responsive design mandatory
- SEO optimization required for investment-related keywords
- Cross-browser compatibility (modern browsers)

## External Dependencies
- Next.js framework
- React ecosystem
- Payment gateways API (to be integrated)
- Analytics services (Google Analytics, etc.)
- Forms submission services (for contact forms)
