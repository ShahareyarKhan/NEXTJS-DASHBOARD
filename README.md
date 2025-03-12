<!-- Intoduction Folder Structure -->
1. /app: Main workspace with routes, components, and logic.
2. /app/lib: Utility and data-fetching functions.
3. /app/ui: Pre-styled UI components (cards, tables, forms).
4. /public: Static assets (images, etc.).
5. Config Files: Pre-configured files (e.g., next.config.ts), no need to modify.

<!-- <Image> Component: Enhanced <img> with optimization. -->
1. Prevents Layout Shift: Images load smoothly.
2. Auto-Resizing: Avoids large images on small screens.
3. Lazy Loading: Loads images only when needed.
4. Modern Formats: Supports WebP & AVIF for better performance.

<!-- page.tsx is a special Next.js file that exports a React component, and it's required for the route to be accessible. In your application, you already have a page file: /app/page.tsx - this is the home page associated with the route /. -->

<!-- <Link />: Enables client-side navigation in Next.js. -->

<!-- Next.js provides a hook called usePathname() that you can use to check the path and implement this pattern. -->