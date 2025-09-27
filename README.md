# MetalShares Website

A luxury metals investment platform website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with luxury aesthetic
- Glassmorphism effects on navigation and cards
- Two distinct color palettes: Luxury Green and Old Money
- Mobile-first approach with full responsiveness
- Accessibility compliant (WCAG standards)
- Optimized performance with Next.js best practices

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

## Directory Structure

```
metalshares/
├── components/                 # All reusable UI components
│   ├── ui/                   # Basic UI components (buttons, inputs, etc.)
│   ├── sections/             # Page sections (Hero, Features, etc.)
│   └── forms/                # Form components (NewsletterForm, etc.)
├── pages/                    # Next.js pages (one-page scrollable app)
│   └── index.tsx             # Main page
├── styles/                   # Styling-related files
│   ├── globals.css           # Global styles
│   └── tailwind.config.js    # Tailwind CSS configuration
├── docs/                     # Documentation files
│   ├── file-structure.md     # This file
│   ├── development-guide.md  # Development guidelines
│   └── component-usage.md    # Component usage documentation
├── public/                   # Static assets
├── lib/                      # Utility functions and libraries
├── types/                    # TypeScript type definitions
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

## Contributing

Please read the [Development Guide](./docs/development-guide.md) for coding standards and contribution guidelines.

## Documentation

- [File Structure](./docs/file-structure.md)
- [Development Guide](./docs/development-guide.md)
- [Component Usage](./docs/component-usage.md) (coming soon)