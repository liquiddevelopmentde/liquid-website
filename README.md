# Liquid Development Website

The official portfolio website for **Liquid Development**, a German development team.
Designed with a modern "Liquid" aesthetic using dark mode, glassmorphism, and fluid animations.

## 🚀 Tech Stack

- **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Docker + Nginx

## 📂 Architecture

The project follows a modular structure for easy maintenance:

- **`src/data/`**: Edit text, links, and team members here.
- **`src/sections/`**: Main page blocks (Hero, Projects, Team).
- **`src/components/`**: Reusable UI elements (Navbar, Buttons, Cards).
- **`src/utils/`**: Animation logic.

## 🛠️ Setup & Run

### Local Development

    npm install
    npm run dev

### Docker Production

This project includes a production-ready Nginx configuration.

    # Build and start the container
    docker compose up -d --build

The site will run on port `8081` by default.
