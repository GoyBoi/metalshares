# MetalShares Component Usage Documentation

## Overview
This document provides detailed usage instructions for all UI components in the MetalShares website. It includes examples, props, and best practices for implementing each component with proper theme support.

## UI Components

### 1. Button Component (`components/ui/button.tsx`)

#### Purpose
Provides interactive buttons with multiple variants and sizes for various actions.

#### Props
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

#### Variants
- `default`: Everglade background with Spring Wood text
- `destructive`: Red background for destructive actions
- `outline`: Everglade border with Everglade text
- `secondary`: Secondary background with secondary text
- `ghost`: Transparent background with Everglade text
- `link`: Everglade text with underline

#### Sizes
- `default`: Standard button size (h-10)
- `sm`: Small button size (h-9)
- `lg`: Large button size (h-12)
- `icon`: Square button for icons (h-10 w-10)

#### Usage Examples
```tsx
// Default button
<Button>Get Started</Button>

// Outline button
<Button variant="outline">Learn More</Button>

// Secondary button
<Button variant="secondary">Secondary Action</Button>

// Ghost button
<Button variant="ghost">Ghost Action</Button>

// Link button
<Button variant="link">Link Style</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Icon button
<Button variant="icon" size="icon">
  <SettingsIcon className="h-4 w-4" />
</Button>

// Small button
<Button size="sm">Small Button</Button>

// Large button
<Button size="lg">Large Button</Button>

// With icon
<Button>
  <SettingsIcon className="mr-2 h-4 w-4" /> Settings
</Button>
```

#### Theme Support
All button variants automatically adapt to light/dark themes with proper color contrast.

### 2. Card Component (`components/ui/card.tsx`)

#### Purpose
Displays content in a styled card format with glassmorphism effect.

#### Sub-components
- `Card`: Main container with glassmorphism effect
- `CardHeader`: Header section with flex column layout
- `CardTitle`: Title with Everglade text color
- `CardDescription`: Description with Como text color
- `CardContent`: Content section with proper padding
- `CardFooter`: Footer section with flex row layout

#### Props
All components accept standard HTML attributes and `className` for additional styling.

#### Usage Examples
```tsx
// Basic card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
  <CardFooter>
    {/* Card footer */}
  </CardFooter>
</Card>

// Card with glass effect
<Card className="glass-effect">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

#### Theme Support
Cards automatically adapt to light/dark themes with proper background colors and text contrast.

### 3. Input Component (`components/ui/input.tsx`)

#### Purpose
Provides form input fields with proper styling and validation support.

#### Props
Accepts all standard HTML input attributes plus `className` for additional styling.

#### Usage Examples
```tsx
// Text input
<Input type="text" placeholder="Enter your name" />

// Email input
<Input type="email" placeholder="Enter your email address" />

// Password input
<Input type="password" placeholder="Enter your password" />

// With additional styling
<Input 
  type="text" 
  placeholder="Full name" 
  className="w-full py-6 px-6 h-14"
/>
```

#### Theme Support
Inputs automatically adapt to light/dark themes with proper border colors, backgrounds, and placeholder text.

### 4. TestimonialCard Component (`components/ui/TestimonialCard.tsx`)

#### Purpose
Displays customer testimonials with star ratings and profile information.

#### Props
```typescript
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  className?: string;
  showVerification?: boolean;
}
```

#### Usage Examples
```tsx
// Basic testimonial
<TestimonialCard 
  name="Robert Chen"
  role="Retired Engineer"
  content="I've been investing with MetalShares for 5 years..."
  rating={5}
/>

// With verification badge
<TestimonialCard 
  name="Sarah Williams"
  role="Financial Advisor"
  content="I recommend MetalShares to my clients looking for portfolio diversification..."
  rating={5}
  showVerification={true}
/>
```

#### Theme Support
Testimonial cards automatically adapt to light/dark themes with proper background colors, text contrast, and star ratings.

## Section Components

### 1. Navbar Component (`components/sections/Navbar.tsx`)

#### Purpose
Provides site navigation with logo, menu items, and CTA buttons.

#### Props
```typescript
interface NavbarProps {
  className?: string;
}
```

#### Features
- Responsive design with mobile hamburger menu
- Glassmorphism effect
- Smooth scrolling to sections
- Theme toggle integration

#### Usage Examples
```tsx
// Basic usage
<Navbar />

// With additional styling
<Navbar className="py-4" />
```

#### Theme Support
Navbar automatically adapts to light/dark themes with proper background colors and text contrast.

### 2. Hero Section (`components/sections/Hero.tsx`)

#### Purpose
Main landing section with headline and CTA buttons.

#### Props
```typescript
interface HeroProps {
  className?: string;
}
```

#### Features
- Eye-catching headline with luxury color palette
- Call-to-action buttons
- Background imagery
- Glassmorphism effects

#### Usage Examples
```tsx
// Basic usage
<Hero />

// With additional styling
<Hero className="pt-20" />
```

#### Theme Support
Hero section automatically adapts to light/dark themes with proper text colors and background effects.

### 3. Footer Component (`components/sections/Footer.tsx`)

#### Purpose
Website footer with company information and links.

#### Props
```typescript
interface FooterProps {
  id?: string;
  className?: string;
}
```

#### Features
- Company information
- Social media links
- Navigation links
- Theme-aware styling

#### Usage Examples
```tsx
// Basic usage
<Footer />

// With ID and additional styling
<Footer id="main-footer" className="mt-20" />
```

#### Theme Support
Footer automatically adapts to light/dark themes with proper background colors and text contrast.

## Form Components

### 1. NewsletterForm Component (`components/forms/NewsletterForm.tsx`)

#### Purpose
Email subscription form with validation and feedback.

#### Props
```typescript
interface NewsletterFormProps {
  className?: string;
}
```

#### Features
- Email validation
- Success/error states
- Responsive layout
- Theme-aware styling

#### Usage Examples
```tsx
// Basic usage
<NewsletterForm />

// With additional styling
<NewsletterForm className="max-w-2xl mx-auto" />
```

#### Theme Support
Newsletter form automatically adapts to light/dark themes with proper input styling and button colors.

## Theme Components

### 1. ThemeToggle Component (`components/ui/theme-toggle.tsx`)

#### Purpose
Provides a toggle button for switching between light and dark themes.

#### Props
None

#### Features
- Automatic theme detection
- Smooth icon transitions
- LocalStorage persistence
- Theme-aware styling

#### Usage Examples
```tsx
// Basic usage
<ThemeToggle />
```

#### Theme Support
ThemeToggle automatically adapts to the current theme with proper icon colors.

## Best Practices

### Component Implementation
1. Always import components from their respective directories
2. Use the provided variants and sizes rather than custom styling
3. Add proper `className` props for additional styling when needed
4. Test components in both light and dark themes
5. Ensure proper accessibility attributes are included

### Theme Consistency
1. Use the provided color palette classes with their dark mode variants
2. Apply glassmorphism effects using the `.glass-effect` class
3. Test all components in both themes for visual consistency
4. Maintain proper contrast ratios (≥ 4.5:1 for normal text)
5. Use semantic HTML elements for better accessibility

### Performance Optimization
1. Use `React.memo` for components that render frequently
2. Lazy load components not immediately visible
3. Optimize images with Next.js Image component
4. Minimize bundle sizes by importing only necessary modules
5. Use efficient rendering patterns

### Accessibility Compliance
1. Ensure proper semantic HTML structure
2. Include appropriate ARIA attributes
3. Maintain keyboard navigation support
4. Provide sufficient color contrast
5. Use descriptive alt text for images