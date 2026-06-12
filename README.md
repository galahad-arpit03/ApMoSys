# ApMoSys Admin Panel Documentation

## Architecture Overview
The ApMoSys Admin Panel is a specialized, client-side Content Management System (CMS) seamlessly integrated into the Next.js application. It operates entirely on the frontend, allowing for rapid real-time editing without relying on a traditional backend database.

### Core Technologies
- **State Management**: Zustand (`src/admin/store/adminStore.ts`)
- **Persistence**: Zustand's `persist` middleware (saves directly to the browser's `localStorage`)
- **UI Architecture**: Next.js App Router (`app/administrator`)
- **Animations**: Framer Motion for smooth transitions

## Key Features & Capabilities

The admin panel provides a comprehensive suite of tools to manage the ApMoSys website:

1. **Live Preview Environment (`AdminShell.tsx`)**
   - **Device Simulation**: Toggles between a standard Desktop View and a "Live Mobile Editor". The mobile view embeds the site inside an interactive iPhone 15 Pro chassis iframe, ensuring accurate responsive testing.
   - **Persistent Shell**: Features an omnipresent toolbar and a collapsible sidebar (`AdminSidebar.tsx`) for quick navigation between admin modules.

2. **Global Authentication**
   - Protected by `useAuthStore`.
   - Gatekeeps all `/administrator/*` routes with a simple password authentication mechanism to prevent unauthorized access.

3. **Comprehensive Content Management (`useContentStore`)**
   - Manages a deeply nested state tree representing the entire site's content (Navbar, Mega Menu, Footer, Home, Industries, Careers, Contact, etc.).
   - Allows addition, modification, and deletion of complex data structures like Industry Grid Cards, FAQ items, and Career Job Listings.

4. **Dynamic Theming Engine (`useThemeStore`)**
   - **Global Colors**: Manage the global color schema, including Primary, Background, Text, and Accent colors.
   - **Presets**: Apply predefined theme presets or create custom ones.
   - **Section-Level Theming**: Toggle individual page sections between "dark" and "light" modes using `sectionThemes`.

5. **Blog CMS (`useBlogStore`)**
   - Full CRUD operations for articles: Add, edit, delete.
   - Toggle publish/unpublish statuses, manage tags, authors, and read times.

6. **Visibility Toggling**
   - Hide or show specific UI sections across the site instantly using the `sectionVisibilities` registry.

7. **In-place WYSIWYG Editing**
   - Uses specialized wrapper components like `EditableText.tsx` and `EditableImage.tsx`. Administrators can click directly on text or images within the preview environment to edit them seamlessly in real-time.

## Data Flow: How "Saving" Works

Because this CMS is entirely client-side, the data flow is instantaneous and lightweight:

1. **User Action**: An administrator edits text via an `EditableText` component, tweaks a setting in the sidebar, or changes a color in the `/administrator/colors` route.
2. **Store Update**: The React component dispatches an update function to the corresponding Zustand store (e.g., `useContentStore.getState().updateContent(...)`).
3. **Immediate Re-render**: Any component across the site subscribed to that store immediately re-renders with the newly updated data, providing instant visual feedback.
4. **Persistence**: Under the hood, Zustand's `persist` middleware synchronously serializes the updated state and saves it to the browser's `localStorage` (under keys like `admin-content`, `admin-theme`, `admin-blogs`, and `admin-auth`).
5. **Session Continuity**: When the user reloads the page or navigates away and comes back, Zustand automatically rehydrates the stores from `localStorage` during the initial load. This restores all customized content, colors, and layouts exactly as they were left.

**Important Note on Production:** 
Because the data is stored in the browser's `localStorage`, changes made in the admin panel only apply to the specific browser and device where the edits were made. To make these changes permanent for all public users in a production environment, the serialized JSON state from `localStorage` would typically be exported and merged into the default codebase, or the Zustand store would need to be rewired to sync with a persistent backend database (like PostgreSQL or MongoDB) via API endpoints.
