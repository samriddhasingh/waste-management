# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# REMWaste Skip Selection Page Redesign

## 🚀 Project Overview

This project is a redesign of the **"Choose Your Skip Size"** page for REMWaste, as part of a front-end code challenge. The goal was to **completely redesign the UI** while keeping the original functionality intact — focusing on clean, modern React code, responsive design, and improved UX.

---

## 🎯 Key Objectives

- Redesign the UI of the "skip selection" page.
- Keep skip selection functionality intact.
- Use real API data: [`/api/skips/by-location?postcode=NR32&area=Lowestoft`](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft).
- Ensure responsiveness on both desktop and mobile.
- Write clean, modular React components.

---

## My Approach

### 1. **Component-Based Structure**
- Built two main components:
  - `Home.jsx`: Handles fetching skip data and managing state.
  - `SkipCard.jsx`: A reusable, stylized card component for each skip.

### 2. **Improved UX & Visual Hierarchy**
- Added interactive hover effects and transition animations.
- Highlighted selected cards with colored borders and check icons.
- Made key data points (e.g., skip size, price, hire period) prominent and readable.

### 3. **State Management**
- Used React’s `useState` to store:
  - Fetched skip data.
  - The currently selected skip.
- On selecting a skip, the UI dynamically updates which card is selected.

### 4. **Responsive Design**
- Implemented using Tailwind CSS’s responsive utilities.
- Ensured the layout gracefully adapts to various screen sizes (1-column on mobile, 2-columns on tablets, 3-columns on desktop).

### 5. **Dynamic Data Fetching**
- Integrated the API:
  ```js
  https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
