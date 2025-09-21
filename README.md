# 📊 React Dashboard with Dark Mode

[![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://react.dev/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)  
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)  
[![Recharts](https://img.shields.io/badge/Recharts-Visualizations-orange)](https://recharts.org/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive analytics dashboard built with **React**, **Tailwind CSS**, and **Recharts**.  
Includes **Dark Mode**, reusable components, and interactive charts.

---

## 🚀 Features
- 📱 **Responsive layout** with multiple cards & charts  
- 🌗 **Light/Dark theme toggle** (works across all components)  
- 📊 **Recharts visualizations** (Bar, Line, Pie/Donut, Area)  
- 🎨 **Tailwind CSS utilities** for styling  
- 🧩 **Reusable card components** (Stats, Revenue, Products, Map, etc.)  

---

## 📂 Project Structure
src/
┣ assets/ # Icons, images, SVGs
┣ components/ # Reusable UI components (cards, charts, tables)
┣ pages/ # Dashboard pages (Dashboard, Orders, etc.)
┣ App.jsx # Routes and layout
┣ main.jsx # Entry point (ThemeProvider + Router + Dark mode)
┗ index.css # Tailwind setup

yaml
Copy code

---

## 🛠️ Tech Stack
- ⚛️ **React** – frontend framework  
- 🛣️ **React Router** – routing between pages  
- 🎨 **Tailwind CSS** – styling, dark mode, responsive design  
- 📊 **Recharts** – charts and graphs library  
- ⚡ **Vite** – fast build tool & dev server  

---

## ⚙️ Installation

Clone the repository:
```bash
git clone https://github.com/your-username/dashboard-darkmode.git
cd dashboard-darkmode
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Run locally:

bash
Copy code
npm run dev
Now open http://localhost:5173 in your browser 🚀

🌗 Dark Mode
Dark mode is powered by Tailwind’s class-based dark mode.
In main.jsx, a dark class is toggled on the <html> element:

js
Copy code
useEffect(() => {
  document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
}, [theme]);
Light Mode → uses Tailwind’s default colors

Dark Mode → applies dark: styles (backgrounds, text, chart colors)

📦 Build
Create a production build:

bash
Copy code
npm run build
The build will be generated in the /dist folder.

🤝 Contributing
Fork this repository

Create a new branch with your feature/fix

Commit your changes

Open a Pull Request 🚀

📝 License
MIT License © 2025 Pankaj Yadav
