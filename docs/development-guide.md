# MetalShares Development Guidelines

## Overview

This document outlines the coding principles, accessibility requirements, and development practices for the MetalShares website project. All developers working on this project should follow these guidelines to ensure consistency, quality, and maintainability.

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **UI Components**: Shadcn UI components
- **Color Palettes**: Luxury Green and Old Money palettes

## Coding Principles

### 1. Component Reusability
- Create modular, reusable components
- Avoid duplicate components and imports
- Follow the DRY (Don't Repeat Yourself) principle
- Use composition over inheritance when possible

### 2. Performance Optimization
- Implement code splitting for better loading performance
- Use lazy loading for components and images not immediately visible
- Optimize component rendering with React.memo when appropriate
- Minimize bundle sizes by importing only necessary modules

### 3. Clean Code Practices
- Use descriptive variable and function names
- Keep functions focused on a single responsibility
- Write meaningful comments for complex logic
- Follow consistent formatting and naming conventions

### 4. Mobile-First Design
- Design all components with mobile-first approach
- Ensure responsive layouts work across all device sizes
- Test components on various screen sizes during development

### 5. Glassmorphism Design
- Apply glassmorphism effect only to Navbar and Cards
- Use consistent blur and transparency settings
- Ensure sufficient contrast for readability

## Accessibility Requirements (WCAG Compliance)

### A. Perceivable
- All images must have appropriate alt text
- Color contrast must meet WCAG AA standards (4.5:1 for normal text)
- Provide text alternatives for non-text content
- Ensure content is readable and understandable

### B. Operable
- All functionality must be accessible via keyboard
- Provide visible focus indicators
- Allow users to control time limits where appropriate
- Avoid content that causes seizures

### C. Understandable
- Use clear and simple language
- Make interactive elements predictable
- Help users avoid and correct mistakes

### D. Robust
- Use proper semantic HTML elements
- Ensure compatibility with assistive technologies
- Write valid HTML that properly labels components

## Styling Guidelines

### Tailwind CSS Usage
- Use Tailwind utility classes as much as possible
- Create custom components only when utility classes are insufficient
- Leverage the custom color palette defined in tailwind.config.js
- Use consistent spacing with Tailwind's spacing scale

### Color Palette Usage
#### Luxury Green Palette:
- Everglade (#1a3d2e) - Primary brand color, text on light backgrounds
- Como (#4f7d5d) - Secondary brand color, accents
- De York (#8cc090) - Positive actions, highlights
- Surf Crest (#cee3d6) - Light backgrounds, borders
- Spring Wood (#f6f8f1) - Page background, neutral areas

#### Old Money Palette:
- Limed Oak (#a38c4d) - Accent color, highlights
- Green Smoke (#b0a56d) - Secondary accent color
- Thistle Green (#c8c59d) - Neutral backgrounds
- Stark White (#e2d6bb) - Light backgrounds
- Pot Pourri (#f1dfd5) - Soft backgrounds, highlights

### Glassmorphism Effect
- Apply to Navbar and Card components only
- Use backdropBlur and backdropFilter utilities
- Ensure content remains readable against glass backgrounds
- Provide fallback for browsers that don't support backdrop-filter

## Component Development Standards

### 1. Component Structure
- Follow the folder structure as defined in file-structure.md
- Create separate files for each component
- Include proper TypeScript interfaces/props definitions
- Add JSDoc comments for public component APIs

### 2. Props and Interface Definition
```typescript
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // other specific props
}
```

### 3. Component Documentation
- Document component usage in component-usage.md
- Include example implementations
- Detail all available props and their types
- Explain any special behaviors or interactions

### 4. Responsive Design
- All components must be responsive by default
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- Test components at different breakpoints
- Ensure mobile functionality is equivalent to desktop

## SEO and Performance

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3, etc.)
- Use semantic elements (nav, header, main, footer, section, article)
- Ensure proper document structure

### Performance Metrics
- Aim for Core Web Vitals scores:
  - Largest Contentful Paint (LCP): < 2.5 seconds
  - First Input Delay (FID): < 100 milliseconds
  - Cumulative Layout Shift (CLS): < 0.1

### Image Optimization
- Use Next.js Image component for all images
- Specify dimensions to prevent layout shift
- Use appropriate image formats (WebP when possible)

## Testing Guidelines

### Component Testing
- Write unit tests for all UI components
- Test component behavior and state changes
- Verify accessibility attributes
- Test responsive behavior

### Integration Testing
- Test component interactions
- Verify end-to-end user flows
- Validate form submissions and data handling

### Accessibility Testing
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios
- Ensure ARIA attributes are properly implemented

## Documentation Updates

### File Updates
- Update docs/file-structure.md when adding new components
- Add component documentation to docs/component-usage.md
- Update development guide when coding standards change
- Maintain README.md with project overview and setup instructions

## Code Review Checklist

Before submitting a pull request, ensure:
- [ ] All components are responsive and mobile-friendly
- [ ] Accessibility guidelines are followed
- [ ] No duplicate components or imports exist
- [ ] Consistent styling using Tailwind and color palette
- [ ] Proper TypeScript types are implemented
- [ ] Components follow the glassmorphism design for approved elements
- [ ] Adequate test coverage exists
- [ ] Documentation is updated if necessary
- [ ] No test/demo files are left in the final commit
- [ ] All linter checks pass

## Security Considerations

- Sanitize any user input before processing
- Validate and sanitize data from external sources
- Use proper authentication and authorization practices
- Prevent cross-site scripting (XSS) attacks