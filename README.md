# platter-test

A Shopify Dawn theme enhanced with Tailwind CSS for modern utility-first styling.

## Development Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build Tailwind CSS (for development with watch mode):
   ```bash
   npm run dev
   ```

3. Or build for production (minified):
   ```bash
   npm run build-css-prod
   ```

## Tailwind CSS Integration

This theme includes Tailwind CSS configured specifically for Shopify themes:

### File Structure
- `src/input.css` - Source CSS file with Tailwind directives
- `assets/tailwind.css` - Compiled Tailwind CSS (auto-generated)
- `tailwind.config.js` - Tailwind configuration
- `package.json` - Node.js dependencies and scripts

### Available Scripts
- `npm run dev` - Watch for changes and rebuild CSS automatically
- `npm run build-css-prod` - Build minified CSS for production
- `npm run build-css` - Same as dev (alias)

### Custom Classes
The theme includes some pre-built component classes:
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.card` - Card component styling
- `.form-input` - Form input styling

### Usage in Liquid Templates
You can now use Tailwind utility classes directly in your Liquid files:

```liquid
<div class="max-w-4xl mx-auto p-6">
  <h1 class="text-3xl font-bold text-gray-900 mb-4">Welcome</h1>
  <p class="text-gray-600 leading-relaxed">Your content here...</p>
  <button class="btn-primary mt-4">Get Started</button>
</div>
```

### Development Workflow

1. Start the development watcher:
   ```bash
   npm run dev
   ```

2. Edit your Liquid templates and add Tailwind classes
3. The CSS will automatically rebuild when you save changes
4. Before deploying, build the production version:
   ```bash
   npm run build-css-prod
   ```

### Integration with Existing Dawn Styles
- Tailwind CSS is loaded after `base.css` to allow for proper inheritance
- Custom properties from Dawn theme are preserved
- Tailwind's base styles are carefully configured to not conflict with existing styles

## Deployment
The compiled `assets/tailwind.css` file should be committed to version control so it's available when deploying to Shopify.