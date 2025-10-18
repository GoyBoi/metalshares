# MetalShares Website Project Structure

## Overview

This document outlines the directory and file structure for the MetalShares website project. The structure is designed to be modular, scalable, and well-documented to facilitate development and maintenance.

## Directory Structure

```
metalshares/
├── components/                 # All reusable UI components
│   ├── ui/                   # Basic UI components (buttons, inputs, cards, etc.)
│   ├── sections/             # Page sections (Navbar, Hero, Footer, etc.)
│   └── forms/                # Form components (NewsletterForm, etc.)
├── pages/                    # Next.js pages (one-page scrollable app)
│   ├── index.tsx             # Main page
│   ├── products.tsx          # Products showcase page
│   ├── test.tsx              # Styling verification page
│   └── theme-test.tsx        # Theme testing page
├── styles/                   # Styling-related files
│   ├── globals.css           # Global styles
│   └── tailwind.config.js    # Tailwind CSS configuration
├── docs/                     # Documentation files
│   ├── file-structure.md     # This file
│   ├── development-guide.md  # Development guidelines
│   ├── component-usage.md    # Component usage documentation
│   ├── website-structure.md  # Website structure documentation
│   └── project-status.md     # Project status updates
├── public/                   # Static assets
│   ├── images/               # Images and icons
│   ├── favicon.ico           # Website favicon
│   └── robots.txt            # SEO configuration
├── lib/                      # Utility functions and libraries
│   └── theme-provider.tsx   # Theme context provider
├── types/                    # TypeScript type definitions
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project overview
```

## Component Documentation

### 1. Navbar Component (`components/sections/Navbar.tsx`)
- **Purpose**: Navigation header with logo, menu items, and CTA
- **Props**: `className`, `mobileMenuOpen`, `setMobileMenuOpen`
- **Features**: 
  - Responsive design with mobile hamburger menu
  - Glassmorphism effect
  - Smooth scrolling to sections
- **Usage**:
```jsx
<Navbar />
```

### 2. Hero Section (`components/sections/Hero.tsx`)
- **Purpose**: Main landing section with headline and CTA
- **Props**: `className`
- **Features**:
  - Eye-catching headline with luxury color palette
  - Call-to-action buttons
  - Background imagery
- **Usage**:
```jsx
<Hero />
```

### 3. Card Components (`components/ui/Card.tsx`)
- **Purpose**: Display content in a styled card format
- **Sub-components**:
  - `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- **Features**:
  - Glassmorphism effect
  - Responsive layout
  - Flexible content container
- **Usage**:
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

### 4. Newsletter Form (`components/forms/NewsletterForm.tsx`)
- **Purpose**: Email subscription form
- **Props**: `className`, `onSubmit`
- **Features**:
  - Email validation
  - Success/error states
  - Responsive layout
- **Usage**:
```jsx
<NewsletterForm onSubmit={handleSubscribe} />
```

### 5. Footer Component (`components/sections/Footer.tsx`)
- **Purpose**: Website footer with links and information
- **Props**: `className`
- **Features**:
  - Company information
  - Social media links
  - Navigation links
- **Usage**:
```jsx
<Footer />
```

## Styling Guidelines

### Color Palettes

#### Luxury Green Palette:
- **Everglade** (`#1a3d2e`): Primary dark green
- **Como** (`#4f7d5d`): Secondary green
- **De York** (`#8cc090`): Light green
- **Surf Crest** (`#cee3d6`): Very light green background
- **Spring Wood** (`#f6f8f1`): Lightest green/white background

#### Old Money Palette:
- **Limed Oak** (`#a38c4d`): Primary gold/brown
- **Green Smoke** (`#b0a56d`): Secondary gold/green
- **Thistle Green** (`#c8c59d`): Light green/brown
- **Stark White** (`#e2d6bb`): Off-white background
- **Pot Pourri** (`#f1dfd5`): Light neutral background

### Glassmorphism Design
- Applied to Navbar and Cards
- Uses backdrop blur and semi-transparent backgrounds
- Provides modern luxury aesthetic
- Implemented using custom Tailwind classes

## Coding Principles

### Mobile-First Responsive Design
- All components designed mobile-first
- Breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px

### Accessibility Compliance
- All components follow WCAG guidelines
- Proper semantic HTML
- ARIA attributes where needed
- Keyboard navigation support

### Performance Optimization
- Lazy loading for images
- Component-based code splitting
- Minimal third-party dependencies

## Development Workflow

1. **Component Creation**: Create new components in appropriate subdirectories
2. **Documentation**: Update this file and component-usage.md with new components
3. **Testing**: Ensure components work across all breakpoints
4. **Accessibility Check**: Verify all components meet WCAG standards