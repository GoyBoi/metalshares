# MetalShares shadcn Components Implementation

## Overview
This document outlines the shadcn components that have been properly implemented in the MetalShares website to ensure consistent styling and functionality.

## Components Implemented

### 1. Button Component
Located at: `/components/ui/button.tsx`

**Variants**:
- `default`: Everglade background with Spring Wood text
- `destructive`: Red background for destructive actions
- `outline`: Everglade border with Everglade text
- `secondary`: Secondary background with secondary text
- `ghost`: Transparent background with Everglade text
- `link`: Everglade text with underline

**Sizes**:
- `default`: Standard button size (h-10)
- `sm`: Small button size (h-9)
- `lg`: Large button size (h-12)
- `icon`: Square button for icons (h-10 w-10)

**Usage Examples**:
```tsx
<Button>Get Started</Button>
<Button variant="outline">Learn More</Button>
<Button size="lg">Large Button</Button>
<Button size="sm">Small Button</Button>
```

### 2. Card Component
Located at: `/components/ui/card.tsx`

**Sub-components**:
- `Card`: Main container with glassmorphism effect
- `CardHeader`: Header section with flex column layout
- `CardTitle`: Title with Everglade text color
- `CardDescription`: Description with Como text color
- `CardContent`: Content section with proper padding
- `CardFooter`: Footer section with flex row layout

**Usage Examples**:
```tsx
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
```

### 3. Input Component
Located at: `/components/ui/input.tsx`

**Features**:
- Everglade border with Spring Wood background
- Proper focus states with Everglade ring
- Glassmorphism effect with backdrop blur
- Placeholder text with reduced opacity Como color

**Usage Examples**:
```tsx
<Input type="email" placeholder="Enter your email address" />
<Input type="text" placeholder="Full name" />
```

### 4. TestimonialCard Component
Located at: `/components/ui/TestimonialCard.tsx`

**Features**:
- Uses Card component as base
- Displays star ratings with Limed Oak color
- Shows customer avatars with initials
- Proper spacing and typography

**Props**:
- `name`: Customer name
- `role`: Customer role/title
- `content`: Testimonial content
- `rating`: Star rating (1-5)
- `className`: Additional CSS classes

**Usage Examples**:
```tsx
<TestimonialCard 
  name="Robert Chen"
  role="Retired Engineer"
  content="I've been investing with MetalShares for 5 years..."
  rating={5}
/>
```

## Color Integration

All components properly integrate the MetalShares color palette:
- **Everglade** (#1a3d2e): Primary brand color for text and backgrounds
- **Como** (#4f7d5d): Secondary brand color for descriptions and accents
- **De York** (#8cc090): Positive actions and highlights
- **Limed Oak** (#a38c4d): Accent color for highlights and ratings
- **Spring Wood** (#f6f8f1): Background and light elements
- **Surf Crest** (#cee3d6): Light backgrounds and borders
- **Pot Pourri** (#f1dfd5): Soft backgrounds and highlights

## Glassmorphism Effect

Implemented through the global `.glass` class in `/styles/globals.css`:
```css
.glass {
  @apply bg-spring-wood/70 backdrop-blur-sm border border-everglade/20;
}
```

Applied to:
- Navbar
- All Card components
- Testimonial cards
- Featured product cards
- Trust indicators

## Responsive Design

All components are responsive by default:
- Mobile-first approach with proper breakpoints
- Flexible layouts using Tailwind's grid and flex utilities
- Proper spacing and sizing across all screen sizes
- Touch-friendly interactive elements

## Accessibility

Components follow accessibility best practices:
- Proper semantic HTML elements
- Sufficient color contrast ratios
- Keyboard navigable interactive elements
- Proper focus states
- ARIA attributes where needed

## Performance

Components are optimized for performance:
- Minimal JavaScript overhead
- Efficient rendering with React.memo where appropriate
- Proper code splitting
- Lazy loading for non-critical components

## Integration Points

Components properly integrate with:
- Next.js routing and navigation
- Tailwind CSS utility classes
- TypeScript type definitions
- React hooks and state management