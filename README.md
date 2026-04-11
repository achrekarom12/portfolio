# LinkedIn-styled Portfolio

A modern, responsive portfolio website themed after LinkedIn's iconic UI. Built with Next.js 15, React 19, and Tailwind CSS 4.

## 🚀 Features

- **LinkedIn-Themed UI**: A familiar experience for professional networking, featuring profile headers, activity feeds, education, experience, and skills sections.
- **Dark & Light Mode**: Seamless theme switching with a customized color palette for both modes.
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing.
- **Dynamic Content**: Auto-calculating experience durations and relative time for activities.
- **Interactive Modals**: Contact information, skills overview, and email contact forms integrated with EmailJS.
- **Hashnode Blog Integration**: Dynamically fetches and displays latest articles in the activity feed using the Hashnode GraphQL API.
- **GitHub Heatmap**: Real-time integration of GitHub contributions directly in the sidebar using `react-github-calendar`.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **APIs & Integration**: Hashnode GraphQL API, [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)
- **Deployment**: [Netlify](https://www.netlify.com/)

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/achrekarom12/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.

## 📄 License

This project is open-sourced under the MIT License.