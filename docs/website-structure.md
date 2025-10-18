# MetalShares Website Structure Documentation

## Overview
This document provides a comprehensive overview of the MetalShares website structure, components, and organization. It serves as a reference for understanding how the website is laid out and structured to facilitate future development and planning.

## Current Website Structure

### Directory Layout
```
metalshares/
├── components/                 # All reusable UI components
│   ├── ui/                    # Basic UI components (buttons, cards, inputs, etc.)
│   ├── sections/              # Page sections (Navbar, Hero, Footer, etc.)
│   └── forms/                 # Form components (NewsletterForm, etc.)
├── pages/                     # Next.js pages
│   ├── index.tsx             # Main landing page
│   ├── products.tsx          # Products showcase page
│   ├── test.tsx              # Styling verification page
│   └── theme-test.tsx        # Theme testing page
├── styles/                    # Styling files
│   ├── globals.css           # Global CSS styles and custom classes
│   └── tailwind.config.js    # Tailwind CSS configuration
├── lib/                       # Utility functions and providers
│   └── theme-provider.tsx    # Theme context provider
├── docs/                      # Project documentation
├── public/                    # Static assets
└── openspec/                  # OpenSpec specifications
```

## Page Structure

### 1. Main Landing Page (`/pages/index.tsx`)
The main page is a one-page scrollable design featuring:

#### Components Used:
- **Navbar** (`components/sections/Navbar.tsx`)
  - Fixed position navigation header
  - Logo, menu items, and CTA buttons
  - Theme toggle button
  - Mobile-responsive hamburger menu
  
- **Hero Section** (`components/sections/Hero.tsx`)
  - Main headline with luxury color palette
  - Call-to-action buttons
  - Decorative background elements with glassmorphism effect
  
- **Why Metals Section**
  - Feature cards explaining benefits of precious metals investment
  - Icons and descriptions for each benefit
  
- **Featured Program Section**
  - Highlighted investment program with key features
  - Call-to-action buttons
  
- **More Investment Options Section**
  - Grid of additional investment products
  - Individual product cards with features
  
- **Why Trusted Section**
  - Trust indicators with statistics
  - Testimonial cards from clients
  
- **Newsletter Section**
  - Email subscription form
  - Call-to-action elements
  
- **Footer** (`components/sections/Footer.tsx`)
  - Company information and links
  - Social media links
  - Copyright information

### 2. Products Page (`/pages/products.tsx`)
Dedicated page showcasing investment products:

#### Components Used:
- **Navbar** (same as main page)
- **Hero Section** (specific to products)
- **Products Grid**
  - Multiple product cards with features
  - Detailed descriptions
- **Why Choose Section**
  - Value proposition cards
- **Call-to-Action Section**
  - Primary and secondary action buttons

### 3. Test Pages
- **Styling Test Page** (`/pages/test.tsx`)
  - Verification of color palette application
  - Component styling consistency check
  
- **Theme Test Page** (`/pages/theme-test.tsx`)
  - Comprehensive theme switching verification
  - All components tested in both light and dark modes

## Component Architecture

### UI Components (`/components/ui/`)
Reusable atomic components:

1. **Button** (`button.tsx`)
   - Variants: default, outline, secondary, ghost, link
   - Sizes: default, sm, lg, icon
   
2. **Card** (`card.tsx`)
   - Sub-components: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
   - Glassmorphism effect through `.glass-effect` class
   
3. **Input** (`input.tsx`)
   - Form input fields with proper styling
   - Glassmorphism effect integration
   
4. **TestimonialCard** (`TestimonialCard.tsx`)
   - Specialized card for customer testimonials
   - Star ratings display
   
5. **ThemeToggle** (`theme-toggle.tsx`)
   - Theme switching button
   - Sun/Moon icon transition

### Section Components (`/components/sections/`)
Page-level components:

1. **Navbar** (`Navbar.tsx`)
   - Responsive navigation
   - Glassmorphism effect
   - Theme toggle integration
   
2. **Hero** (`Hero.tsx`)
   - Landing section with headline
   - Call-to-action elements
   - Decorative elements
   
3. **Footer** (`Footer.tsx`)
   - Site footer with links
   - Company information
   - Social media elements

### Form Components (`/components/forms/`)
Specialized form elements:

1. **NewsletterForm** (`NewsletterForm.tsx`)
   - Email subscription form
   - Validation and feedback

## Theme System

### Implementation
- **ThemeProvider** (`lib/theme-provider.tsx`)
  - React Context API for theme management
  - localStorage persistence
  - System preference detection
  
- **ThemeToggle** (`components/ui/theme-toggle.tsx`)
  - User-facing theme switcher
  - Icon transitions (sun/moon)
  
### Color Palette
#### Light Theme:
- **Everglade** (`#1a3d2e`): Primary dark green
- **Como** (`#4f7d5d`): Secondary green
- **De York** (`#8cc090`): Light green
- **Limed Oak** (`#a38c4d`): Gold/brown accent
- **Spring Wood** (`#f6f8f1`): Lightest green/white background
- **Surf Crest** (`#cee3d6`): Very light green background
- **Pot Pourri** (`#f1dfd5`): Light neutral background
- **Stark White** (`#e2d6bb`): Off-white background

#### Dark Theme:
- **Dark Everglade** (`#0f2a1f`): Primary dark green
- **Dark Como** (`#3a5f47`): Secondary green
- **Dark De York** (`#6a9d73`): Light green
- **Dark Limed Oak** (`#c9b35b`): Gold/brown accent
- **Dark Spring Wood** (`#d4d6d1`): Lightest green/white background
- **Dark Surf Crest** (`#9db3a9`): Very light green background
- **Dark Pot Pourri** (`#e0c9b3`): Light neutral background
- **Dark Stark White** (`#d0c0a0`): Off-white background
- **Dark Background** (`#1c3239`): Page background
- **Dark Card** (`#2a4248`): Card backgrounds
- **Dark Border** (`#3a5a61`): Borders and dividers
- **Dark Text** (`#e6e1d4`): Primary text

### Styling Classes
- **Glassmorphism**: `.glass-effect` class applies backdrop blur and semi-transparent backgrounds
- **Theme Variants**: All color classes have corresponding `dark:` variants
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Styling Implementation

### Tailwind CSS Configuration
Custom configuration extending default Tailwind with MetalShares color palette:

```javascript
extend: {
  colors: {
    everglade: '#1a3d2e',
    como: '#4f7d5d',
    'de-york': '#8cc090',
    'limed-oak': '#a38c4d',
    'spring-wood': '#f6f8f1',
    'surf-crest': '#cee3d6',
    'pot-pourri': '#f1dfd5',
    'stark-white': '#e2d6bb',
    'dark-everglade': '#0f2a1f',
    'dark-como': '#3a5f47',
    'dark-de-york': '#6a9d73',
    'dark-limed-oak': '#c9b35b',
    'dark-spring-wood': '#d4d6d1',
    'dark-surf-crest': '#9db3a9',
    'dark-pot-pourri': '#e0c9b3',
    'dark-stark-white': '#d0c0a0',
    'dark-bg': '#1c3239',
    'dark-card': '#2a4248',
    'dark-border': '#3a5a61',
    'dark-text': '#e6e1d4',
    'dark-accent': '#a38c4d'
  }
}
```

### Global Styles
Defined in `/styles/globals.css`:
- `.glass-effect`: Glassmorphism effect with proper light/dark variants
- Theme-specific styles for body, backgrounds, and text
- Animation utilities for fade-in and slide-up effects

## Development Standards

### Coding Principles
1. **Component-Based Architecture**: Modular, reusable components
2. **Mobile-First Design**: Responsive layouts for all screen sizes
3. **Accessibility Compliance**: WCAG 2.1 AA standards
4. **Performance Optimization**: Efficient rendering and loading
5. **Theme Consistency**: Proper light/dark mode support for all elements

### File Organization
- Components organized by type (ui, sections, forms)
- Pages organized by route/function
- Styles centralized in styles directory
- Documentation in docs directory
- Specifications in openspec directory

### Naming Conventions
- PascalCase for React components
- camelCase for variables and functions
- kebab-case for file names and CSS classes
- Descriptive names for components and files

## Testing and Verification

### Manual Testing
- Theme switching across all pages
- Component consistency in both themes
- Visual appeal and readability
- Responsive design on all devices

### Automated Testing
- Component rendering verification
- Theme class application checks
- Accessibility audits
- Performance benchmarks

## Next Steps Planning

### Short-term Goals
1. Deploy to production hosting
2. Set up CI/CD pipeline
3. Add comprehensive testing suite
4. Implement analytics and monitoring

### Medium-term Goals
1. Expand product offerings documentation
2. Add detailed investment guides
3. Implement user dashboard
4. Add educational resources section

### Long-term Goals
1. Integrate payment processing
2. Add user account management
3. Implement portfolio tracking
4. Add market data visualization