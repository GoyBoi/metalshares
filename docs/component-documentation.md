# MetalShares Component Documentation

## Overview
This document provides detailed documentation for all components in the MetalShares website, including their purpose, props, usage, and implementation details.

## UI Components

### Button (`/components/ui/button.tsx`)

#### Purpose
A customizable button component with multiple variants and sizes to maintain visual consistency across the application.

#### Props
```typescript
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}
```

#### Variants
- **default**: Primary button with luxury-themed background
- **outline**: Outline button with luxury-themed border
- **secondary**: Secondary action button
- **ghost**: Ghost button with transparent background
- **link**: Link-styled button

#### Sizes
- **default**: Standard button size
- **sm**: Small button size
- **lg**: Large button size
- **icon**: Icon-only button size

#### Usage Example
```jsx
<Button variant="default" size="lg">
  Get Started
</Button>
```

#### Styling
- Uses MetalShares color palette (everglade, limed-oak, etc.)
- Applies glassmorphism effect in certain contexts
- Responsive design with hover and active states
- Maintains proper contrast ratios in light and dark themes

---

### Card Components (`/components/ui/card.tsx`)

#### Purpose
A collection of components for displaying content in a structured card format with consistent styling and layout.

#### Components
- **Card**: The main container for card content
- **CardHeader**: Container for card header content
- **CardTitle**: Title element within a card
- **CardDescription**: Description element within a card
- **CardContent**: Main content area of the card
- **CardFooter**: Footer area of the card

#### Props
Each component accepts standard HTML attributes for their respective elements.

#### Usage Example
```jsx
<Card className="glass-effect">
  <CardHeader>
    <CardTitle>Hedge Against Inflation</CardTitle>
    <CardDescription>Precious metals have historically maintained their value during economic uncertainty</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Detailed content about this investment benefit...</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Learn More</Button>
  </CardFooter>
</Card>
```

#### Styling
- Applies glassmorphism effect via `.glass-effect` class
- Responsive layout that adapts to different screen sizes
- Consistent spacing and typography
- Proper contrast ratios in light and dark themes

---

### Input (`/components/ui/input.tsx`)

#### Purpose
A styled input component that provides consistent styling and behavior across the application.

#### Props
```typescript
type InputProps = React.InputHTMLAttributes<HTMLInputElement>
```

#### Usage Example
```jsx
<Input 
  type="email" 
  placeholder="Enter your email" 
  className="glass-effect"
/>
```

#### Styling
- Glassmorphism effect when used with `.glass-effect` class
- Consistent border styling
- Focus states with appropriate visual feedback
- Proper contrast ratios in light and dark themes

---

### TestimonialCard (`/components/ui/TestimonialCard.tsx`)

#### Purpose
A specialized card component for displaying customer testimonials with star ratings.

#### Props
```typescript
interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  className?: string
}
```

#### Usage Example
```jsx
<TestimonialCard 
  name="Robert Chen"
  role="Retired Engineer"
  content="I've been investing with MetalShares for 5 years. The peace of mind knowing my portfolio has tangible assets is invaluable."
  rating={5}
  className="glass-effect"
/>
```

#### Styling
- Glassmorphism effect via className
- Star rating display with proper styling
- Consistent typography and spacing
- Responsive layout

---

### ThemeToggle (`/components/ui/theme-toggle.tsx`)

#### Purpose
A button component that allows users to toggle between light and dark themes.

#### Props
None required - uses next-themes context internally.

#### Usage Example
```jsx
<ThemeToggle />
```

#### Functionality
- Uses next-themes for theme management
- Toggles between light, dark, and system themes
- Persists user preference in localStorage
- Displays appropriate icons (sun/moon) based on current theme

#### Styling
- Consistent with application's design language
- Icon transition animation
- Proper contrast in both themes

---

## Section Components

### Navbar (`/components/sections/Navbar.tsx`)

#### Purpose
A responsive navigation component that appears at the top of each page.

#### Props
None required.

#### Features
- Fixed positioning
- Responsive design with mobile hamburger menu
- Theme toggle integration
- Scroll-aware styling (transparency changes when scrolling)
- Smooth navigation between sections

#### Components Used
- Button component for CTAs
- ThemeToggle for theme switching
- Responsive menu with backdrop blur effect

#### Styling
- Glassmorphism effect when scrolled
- Transparent when at top
- Mobile-responsive with hamburger menu
- Hover effects on navigation items
- Proper contrast ratios in both themes

---

### Hero (`/components/sections/Hero.tsx`)

#### Purpose
The main landing section that introduces the MetalShares brand and value proposition.

#### Props
None required.

#### Features
- Compelling headline
- Multiple call-to-action buttons
- Luxury-themed design elements
- Responsive layout

#### Components Used
- Button component for CTAs
- Proper typography hierarchy

#### Styling
- Luxury-themed color palette
- Appropriate spacing and typography
- Background effects with glassmorphism
- Responsive design for all screen sizes
- Proper contrast ratios

---

### Footer (`/components/sections/Footer.tsx`)

#### Purpose
The site footer containing company information, links, and legal information.

#### Props
None required.

#### Features
- Company information
- Navigation links
- Social media links
- Copyright information
- Consistent styling with the rest of the site

#### Components Used
- Button components for links
- Proper typography

#### Styling
- Luxury-themed color palette
- Consistent with overall design
- Responsive layout
- Proper contrast ratios in both themes

---

## Form Components

### NewsletterForm (`/components/forms/NewsletterForm.tsx`)

#### Purpose
A form component for users to subscribe to the MetalShares newsletter.

#### Props
None required.

#### Features
- Email input field with validation
- Form submission handling
- Success/error states
- Integration with React Hook Form
- Validation with Zod

#### Components Used
- Input component for email field
- Button component for submit
- Form validation with React Hook Form
- Schema validation with Zod

#### Styling
- Glassmorphism effect on input field
- Consistent with application's design
- Visual feedback for form states
- Proper contrast ratios

#### Validation
- Email format validation
- Required field validation
- User-friendly error messages

---

## Theme System Documentation

### Implementation
The theme system is implemented using the next-themes library with a class-based strategy.

### Available Themes
- Light theme (default)
- Dark theme
- System preference (follows user's OS preference)

### Theme Persistence
- User theme preference is stored in localStorage
- Theme preference persists between sessions

### CSS Classes
- `.dark` class is applied to document element when dark theme is active
- Tailwind's `dark:` variant is used throughout the application

---

## Color Palette Reference

### Luxury Green Palette
- **Everglade** (`#1a3d2e`) - Primary dark green
- **Como** (`#4f7d5d`) - Secondary green
- **De York** (`#8cc090`) - Light green
- **Surf Crest** (`#cee3d6`) - Very light green background
- **Spring Wood** (`#f6f8f1`) - Lightest green/white background

### Old Money Palette
- **Limed Oak** (`#a38c4d`) - Primary gold/brown
- **Green Smoke** (`#b0a56d`) - Secondary gold/green
- **Thistle Green** (`#c8c59d`) - Light green/brown
- **Stark White** (`#e2d6bb`) - Off-white background
- **Pot Pourri** (`#f1dfd5`) - Light neutral background

### Dark Theme Variants
- **Dark Everglade** (`#0f2a1f`) - Primary dark green
- **Dark Como** (`#3a5f47`) - Secondary green
- **Dark De York** (`#6a9d73`) - Light green
- **Dark Limed Oak** (`#c9b35b`) - Gold/brown accent
- **Dark Background** (`#1c3239`) - Page background
- **Dark Card** (`#2a4248`) - Card backgrounds
- **Dark Border** (`#3a5a61`) - Borders and dividers
- **Dark Text** (`#e6e1d4`) - Primary text

---

## Glassmorphism Effect

### CSS Class
- `.glass-effect` - Applies the glassmorphism effect to elements

### Implementation
- Uses backdrop-filter for blur effect
- Applies semi-transparent background
- Includes border for enhanced effect
- Works in both light and dark themes

### Browser Support
- Modern browsers with backdrop-filter support
- Fallbacks for older browsers

---

## Responsive Design

### Breakpoints
- Default Tailwind CSS breakpoints used
- Mobile-first approach
- Responsive grid layouts
- Adaptive component sizing

### Mobile Navigation
- Hamburger menu for smaller screens
- Overlay navigation panel
- Touch-friendly controls

---

## Accessibility Features

### WCAG Compliance
- WCAG 2.1 AA compliance
- Proper semantic HTML
- ARIA attributes where appropriate
- Keyboard navigation support
- Screen reader compatibility

### Color Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Verified in both light and dark themes

---

## Performance Considerations

### Component Optimization
- Efficient rendering with React best practices
- Proper state management
- Minimal re-renders
- Lazy loading where appropriate

### Image Handling
- Placeholder images currently used (need replacement)
- Optimized image loading
- Responsive images

---

## Development Guidelines

### Component Creation
- Use shadcn/ui for base components when possible
- Follow established styling patterns
- Implement proper TypeScript typing
- Include accessibility features
- Ensure responsive design
- Maintain consistent theming

### Styling
- Use Tailwind utility classes primarily
- Extend with custom CSS when necessary
- Follow established color palette
- Maintain glassmorphism effect consistency
- Ensure proper dark theme support

### Testing
- Component rendering verification
- Theme switching functionality
- Responsive design verification
- Accessibility compliance
- Form validation testing