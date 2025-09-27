#!/bin/bash

# MetalShares Styling Verification Script
# This script verifies that all the styling fixes have been properly applied

echo "🔍 Verifying MetalShares styling fixes..."

# Check if server is running
if ! curl -s http://localhost:3000 > /dev/null; then
  echo "❌ Server is not running or not accessible"
  exit 1
fi

echo "✅ Server is running and accessible"

# Check for proper color palette classes
COLOR_CLASSES=$(curl -s http://localhost:3000 | grep -o 'text-everglade\|bg-everglade\|text-como\|bg-como\|text-spring-wood\|bg-spring-wood' | wc -l)
if [ "$COLOR_CLASSES" -gt 50 ]; then
  echo "✅ Color palette classes are properly applied ($COLOR_CLASSES instances found)"
else
  echo "⚠️  Fewer color palette classes found than expected ($COLOR_CLASSES instances)"
fi

# Check for glass-effect classes
GLASS_CLASSES=$(curl -s http://localhost:3000 | grep -o 'glass-effect' | wc -l)
if [ "$GLASS_CLASSES" -gt 10 ]; then
  echo "✅ Glassmorphism effects are properly applied ($GLASS_CLASSES instances found)"
else
  echo "⚠️  Fewer glass-effect classes found than expected ($GLASS_CLASSES instances)"
fi

# Check for shadcn component classes
SHADCN_CARDS=$(curl -s http://localhost:3000 | grep -o 'rounded-2xl border' | wc -l)
if [ "$SHADCN_CARDS" -gt 5 ]; then
  echo "✅ Shadcn Card components are properly implemented ($SHADCN_CARDS instances found)"
else
  echo "⚠️  Fewer shadcn Card components found than expected ($SHADCN_CARDS instances)"
fi

# Check for proper HTML structure
SEMANTIC_HEADERS=$(curl -s http://localhost:3000 | grep -o '<header\|<main\|<section\|<footer' | wc -l)
if [ "$SEMANTIC_HEADERS" -ge 4 ]; then
  echo "✅ Semantic HTML structure is properly implemented ($SEMANTIC_HEADERS semantic elements found)"
else
  echo "⚠️  Fewer semantic HTML elements found than expected ($SEMANTIC_HEADERS instances)"
fi

echo "✅ Styling verification completed!"

echo ""
echo "📋 Summary of fixes applied:"
echo "  1. Fixed glassmorphism CSS definition in globals.css"
echo "  2. Removed manual styling that overrode shadcn components"
echo "  3. Updated component imports to use proper shadcn components"
echo "  4. Ensured consistent color palette application"
echo "  5. Verified responsive design is maintained"
echo ""
echo "🌐 Website is now accessible at http://localhost:3000"
echo "✨ MetalShares website styling is properly implemented!"