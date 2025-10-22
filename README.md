# MetalShares Website

A luxury metals investment platform website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with luxury aesthetic
- Glassmorphism effects on navigation and cards
- Two distinct color palettes: Luxury Green and Old Money
- Mobile-first approach with full responsiveness
- Accessibility compliant (WCAG 2.1 AA standards)
- Optimized performance with Next.js best practices
- Light/dark theme toggle with seamless switching
- Comprehensive component library with shadcn UI
- SEO optimized with Schema.org markup
- OpenSpec-based documentation system
- Lighthouse CI for performance monitoring
- Playwright for end-to-end testing

## Color Palettes

### Luxury Green Palette:
- **Everglade** (#1a3d2e): Primary dark green
- **Como** (#4f7d5d): Secondary green
- **De York** (#8cc090): Light green
- **Surf Crest** (#cee3d6): Very light green background
- **Spring Wood** (#f6f8f1): Lightest green/white background

### Old Money Palette:
- **Limed Oak** (#a38c4d): Primary gold/brown
- **Green Smoke** (#b0a56d): Secondary gold/green
- **Thistle Green** (#c8c59d): Light green/brown
- **Stark White** (#e2d6bb): Off-white background
- **Pot Pourri** (#f1dfd5): Light neutral background

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI Primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Theming**: next-themes
- **Testing**: Playwright, Lighthouse CI
- **Linting**: ESLint
- **Documentation**: OpenSpec

## Directory Structure

```
metalshares/
├── components/                 # All reusable UI components
│   ├── ui/                   # Basic UI components (buttons, inputs, etc.)
│   ├── sections/             # Page sections (Navbar, Hero, Footer, etc.)
│   └── forms/                # Form components (NewsletterForm, etc.)
├── pages/                    # Next.js pages
│   ├── index.tsx             # Main landing page
│   ├── products.tsx          # Products showcase page
│   ├── test.tsx              # Styling verification page
│   ├── button-test.tsx       # Button component testing page
│   ├── button-theme-test.tsx # Button theme testing page
│   └── _app.tsx              # Main application wrapper
│   └── _document.tsx         # Custom document wrapper
├── styles/                   # Styling files
│   ├── globals.css           # Global CSS styles and custom classes
│   └── tailwind.config.js    # Tailwind CSS configuration
├── lib/                      # Utility functions and providers
├── docs/                     # Project documentation
├── public/                   # Static assets
├── openspec/                 # OpenSpec specifications
├── scripts/                  # Build and utility scripts
├── types/                    # TypeScript type definitions
├── tests/                    # Testing files
├── screenshots/              # Project screenshots
└── README.md                 # This file
```

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lighthouse` - Run Lighthouse audit
- `npm run lighthouse:server` - Run Lighthouse CI server

## Documentation

### Current Development Status
The MetalShares website is a fully functional luxury metals investment platform with:
- Next.js 15 with TypeScript
- Tailwind CSS with custom configuration
- Shadcn UI components with custom styling
- Luxury Green and Old Money color palettes
- Glassmorphism design effects
- Fully responsive design
- WCAG accessibility compliant
- Light/dark theme toggle functionality

### Project Structure & Architecture
- Component-based architecture with reusable UI elements
- One-page scrollable design with smooth navigation
- Mobile-first responsive approach
- Separation of concerns: sections, UI components, and forms
- Global theme management using next-themes
- CSS-in-JS with Tailwind utility classes

### Completed Features
- Hero section with compelling headline and CTA
- Why Metals section with feature cards
- Featured Program section with product showcase
- Trust section with testimonials and statistics
- Newsletter subscription form with validation
- Comprehensive footer with company information
- Responsive navigation with mobile menu
- Light/dark theme toggle with persistence

### Missing Features (Future Implementation)
- User dashboard and account management
- Payment processing integration
- Portfolio tracking system
- Market data visualization
- Educational resources section
- Advanced analytics and reporting

### Testing & Verification
- Component rendering verification
- Theme switching across all pages
- Contrast ratio compliance checking
- Responsive design testing
- Accessibility compliance verification
- Cross-browser compatibility testing
- Form validation testing
- Interactive element functionality testing

## Contributing

Please read the [Development Guide](./docs/development-guide.md) for coding standards and contribution guidelines.

## OpenSpec Documentation

This project uses OpenSpec for specification-driven development:
- Website structure specification
- Build progress tracking specification
- Theme consistency specifications
- Component-based architecture specifications

## Performance & Analytics

- Google Analytics 4 integration
- Schema.org structured data for SEO
- Lighthouse CI for automated performance auditing
- WCAG 2.1 AA accessibility compliance

## License

This project is licensed under the MIT License.