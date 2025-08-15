# Le Phuoc Khai - Portfolio

This is my personal portfolio website built with Next.js and Tailwind CSS. It showcases my projects, skills, and experience.

## Live Demo

You can view the live demo here: [https://le-phuoc-khai-portfolio.vercel.app/](https://le-phuoc-khai-portfolio.vercel.app/)

## Features

*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **Multi-language Support:** The content can be switched between English and Vietnamese.
*   **Sections:**
    *   **About:** A brief introduction about me.
    *   **Projects:** A list of my projects with links to the source code and live demos.
    *   **Experience:** My work experience.
    *   **Tech Stack:** The technologies I'm familiar with.
    *   **Contact:** A form to contact me and links to my social media profiles.
*   **Floating Buttons:** Quick access to download my CV and scroll to the top of the page.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later)
*   npm, yarn, or pnpm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your-username/khai-portfolio.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the application in a development environment, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `.next` folder.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the source code.

## Folder Structure

```
.
├── public/
│   ├── ... # Static assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── FloatingButtons.tsx
│   │   │   ├── LanguageContext.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── TechStack.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.