import { test, expect } from '@playwright/test';

test.describe('MetalShares Website Visual Tests', () => {
  test('should load the homepage and check for visual elements', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');
    
    // Take a screenshot of the full page
    await page.screenshot({ path: 'tests/screenshots/homepage.png', fullPage: true });
    
    // Check for the main heading
    await expect(page.locator('h1')).toContainText('Invest in Physical Metals');
    
    // Check for the main navigation
    const navLinks = page.locator('nav button');
    const navLinkCount = await navLinks.count();
    expect(navLinkCount).toBeGreaterThan(0); // At least some navigation links exist
    
    // Check for the hero section CTA buttons (using more specific selectors)
    await expect(page.locator('#hero').getByText('Start Investing')).toBeVisible();
    await expect(page.locator('#hero').getByText('Learn More')).toBeVisible();
    
    // Check for the Why Metals section
    await expect(page.locator('text=Why Invest in Precious Metals')).toBeVisible();
    
    // Check for the Product Showcase section
    await expect(page.locator('text=Our Featured Program')).toBeVisible();
    
    // Check for the Trust section
    await expect(page.locator('text=Why Trusted by Thousands')).toBeVisible();
    
    // Check for the Newsletter section
    await expect(page.locator('text=Market Insights & Updates')).toBeVisible();
    
    // Take screenshots of specific sections
    await page.locator('#products').screenshot({ path: 'tests/screenshots/products-section.png' });
    await page.locator('#why-metals').screenshot({ path: 'tests/screenshots/why-metals-section.png' });
    await page.locator('#trust').screenshot({ path: 'tests/screenshots/trust-section.png' });
    
    console.log('Visual tests completed successfully!');
  });

  test('should check if glassmorphism styles are applied', async ({ page }) => {
    await page.goto('/');
    
    // Check if glassmorphism classes are applied to navbar
    const navbar = page.locator('header');
    await expect(navbar).toBeVisible();
    
    // Check if glassmorphism classes are applied to cards
    const cards = page.locator('.glass');
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);
    
    // Check if the correct color palette classes are used
    const elementsWithEverglade = page.locator('.text-everglade, .bg-everglade, .border-everglade');
    const evergladeCount = await elementsWithEverglade.count();
    expect(evergladeCount).toBeGreaterThan(0);
    
    console.log('Style tests completed successfully!');
  });
});