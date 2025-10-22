# MetalShares Setup and Installation Guide

## Prerequisites

Before installing and running the MetalShares website, ensure your system has the following prerequisites installed:

### Required Software
- **Node.js** (version 18.x or higher)
- **npm** (version 8.x or higher) or **yarn** (version 1.22.x or higher)
- **Git** (version 2.x or higher)

### Recommended Tools
- **Visual Studio Code** (or any preferred code editor)
- **Git GUI client** (optional, such as GitKraken or SourceTree)
- **Terminal** (command line interface)

## System Requirements

### Minimum Specifications
- **Operating System**: Windows 10+, macOS 10.14+, Linux (Ubuntu 18.04+)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 1GB available space
- **Processor**: Modern CPU with at least 2 cores

### Recommended Specifications
- **Operating System**: Windows 11+, macOS 12+, Linux (Ubuntu 20.04+)
- **RAM**: 8GB or more
- **Storage**: 2GB available space
- **Processor**: Multi-core CPU

## Installation Steps

### 1. Clone the Repository

Open your terminal or command prompt and run the following command:

```bash
git clone https://github.com/GoyBoi/metalshares.git
```

### 2. Navigate to the Project Directory

```bash
cd metalshares
```

### 3. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn (if preferred):
```bash
yarn install
```

### 4. Verify Installation

After installation completes, verify that all dependencies are correctly installed by checking for a `node_modules` folder in your project directory.

## Development Setup

### Environment Configuration

The MetalShares project is configured to run in development mode out of the box. No additional environment variables are required for basic functionality.

### Optional Environment Variables

If you wish to connect to external services during development, create a `.env.local` file in the root directory with the following content:

```env
# Google Analytics (replace with your actual GA4 Measurement ID)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API endpoints (for future backend integration)
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Additional environment-specific variables
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Running the Development Server

### Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

### Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

The application will automatically reload when you make changes to the source code.

## Production Build

### Build for Production

To create a production-ready build, run:

```bash
npm run build
```

Or with yarn:
```bash
yarn build
```

### Start Production Server

After building, start the production server with:

```bash
npm run start
```

Or with yarn:
```bash
yarn start
```

## Testing Setup

### Run Linting

To check for code quality issues:

```bash
npm run lint
```

### Run Lighthouse Audit

To perform a performance, accessibility, and SEO audit:

```bash
npm run lighthouse
```

### End-to-End Testing

The project includes Playwright for end-to-end testing:

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run E2E tests
npx playwright test
```

## Development Tools and Commands

### Available Scripts

#### Development Commands
- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checking

#### Quality Assurance Commands
- `npm run lighthouse` - Run Lighthouse CI audit
- `npm run lighthouse:server` - Run Lighthouse CI server

#### Utility Commands
- `npm run clean` - Clean build artifacts (if implemented)
- `npm run type-check` - Run TypeScript type checking

## Project Structure

After installation, the project structure will look like this:

```
metalshares/
├── components/                 # Reusable UI components
│   ├── ui/                    # Base UI components
│   ├── sections/              # Page sections
│   └── forms/                 # Form components
├── pages/                     # Next.js pages
│   ├── index.tsx             # Main landing page
│   ├── products.tsx          # Products page
│   ├── _app.tsx              # Application wrapper
│   └── _document.tsx         # Document wrapper
├── styles/                    # Styling files
│   └── globals.css           # Global styles
├── public/                    # Static assets
├── lib/                       # Utility functions
├── docs/                      # Documentation
├── openspec/                  # OpenSpec specifications
├── tests/                     # Test files
├── node_modules/              # NPM packages (after installation)
├── .git/                      # Git repository files
├── package.json               # Project dependencies and scripts
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Dependencies Installation Fails
- **Issue**: `npm install` fails with permission errors
- **Solution**: Clear npm cache and retry:
  ```bash
  npm cache clean --force
  rm -rf node_modules package-lock.json
  npm install
  ```

#### 2. Port Already in Use
- **Issue**: Development server fails to start on port 3000
- **Solution**: Change the port by setting an environment variable:
  ```bash
  PORT=3001 npm run dev
  ```

#### 3. TypeScript Errors
- **Issue**: TypeScript compilation errors during development
- **Solution**: Verify TypeScript configuration and run:
  ```bash
  npx tsc --noEmit
  ```

#### 4. Module Resolution Issues
- **Issue**: Cannot resolve modules or components
- **Solution**: Ensure all imports use the correct path alias (`@/`) and check `tsconfig.json` paths configuration.

#### 5. Tailwind CSS Not Working
- **Issue**: Styles from Tailwind CSS are not being applied
- **Solution**: Verify `tailwind.config.js` content and check that all relevant files are included in the content array.

### Troubleshooting Commands

#### Verify Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Verify dependencies
npm list
```

#### Reset Development Environment
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### Check TypeScript Configuration
```bash
npx tsc --noEmit --project tsconfig.json
```

## Development Workflow

### Setting Up Your Editor

#### VS Code Recommended Extensions
Install the following extensions for optimal development experience:

- **ESLint**: For code quality checking
- **Prettier**: For code formatting
- **Tailwind CSS IntelliSense**: For Tailwind CSS support
- **TypeScript Importer**: For automatic TypeScript imports
- **Bracket Pair Colorizer**: For bracket matching
- **GitLens**: For enhanced Git capabilities

#### Editor Configuration
Create a `.vscode/settings.json` file in your project root with recommended settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

### Development Best Practices

#### Code Style
- Follow the established component structure
- Use TypeScript for all new components
- Follow the existing naming conventions
- Maintain consistent styling with Tailwind classes
- Use the established color palette

#### Component Creation
- Create new components in the appropriate directory
- Follow the structure of existing components
- Include proper TypeScript typing
- Ensure accessibility features
- Test responsive design
- Verify theme compatibility

#### Styling Guidelines
- Use Tailwind utility classes primarily
- Apply glassmorphism effect consistently with `.glass-effect` class
- Maintain proper contrast ratios in both themes
- Follow the established color palette
- Ensure responsive design for all components

## Deployment Preparation

### Environment Setup for Production

When preparing for production deployment, ensure the following:

#### Environment Variables
Set these in your production environment:

```env
# Production URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API endpoints
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Security headers
NEXT_PUBLIC_CSP_REPORT_URI=https://yourdomain.com/csp-report
```

#### Build Optimization
- Ensure all assets are optimized
- Verify minification settings
- Test performance with Lighthouse
- Check accessibility compliance

## Updating and Maintenance

### Updating Dependencies

To update project dependencies:

```bash
# Update all dependencies to latest compatible versions
npm update

# Or update to latest major versions (with caution)
npm update --depth=0
```

### Updating Next.js

To update Next.js to the latest version:

```bash
npm install next@latest react@latest react-dom@latest
```

### Updating Tailwind CSS

To update Tailwind CSS:

```bash
npm install -D tailwindcss@latest
```

## Support and Resources

### Documentation
- [Project Documentation](./README.md)
- [Component Documentation](./component-documentation.md)
- [OpenSpec Specifications](../openspec/)

### Getting Help
- Check the existing documentation
- Review the issue tracker on GitHub
- Contact the development team
- Review commit history for recent changes

### Contributing
If you wish to contribute to the project:
- Follow the established coding standards
- Update documentation as needed
- Add tests for new functionality
- Follow the pull request process
- Ensure all checks pass before submission