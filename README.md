![Logo](https://localhost-website.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75)

Development Club of IIIT Pune

## Table of Contents

- [1. Prerequisites](#1-Prerequisites)
- [2. Getting Started](#2-Getting-started)
- [3. Project Structure](#3-Project-structure)
- [4. Development Workflow](#4-Development-workflow)
- [5. How to Contribute](#5-How-to-contribute)
- [6. Coding Guidelines](#6-Coding-guidelines)
- [7. Common Issues](#7-Common-issues)
- [8. Contact](#8-Contact)

## 1-Prerequisites

Before contributing, ensure you have the following installed:

- Node.js (>= 14.x) and npm (or yarn)
- Git for version control
- A text editor (e.g., VS Code)

## 2-Getting-started

Follow these steps to set up the project locally:

1. **Fork and Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

   ```

2. **Install Dependencies Run the following command to install all required packages:**

   ```bash
   npm install
   # or use yarn
   yarn install
   ```

3. **Start the Development Server To start the local development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the Website Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 3-Project-structure

    /public
      └── font/ (Custom fonts)
      └── images/ (Static images)

    /app (Next.js pages or routes)
      ├──  components/ (Reusable components)
      ├── globals.css/ (Tailwind and global styles)
      └── api/ (backend code)
      tailwind.config.ts (Tailwind configuration)

## 4-Development-workflow

1. **Issue** :Create new issue or work on an existing one

2. **Branching**: Create a new branch for your feature or bugfix.

   ```
   git switch -c add/your-feature-name
   # check for current working branch
   git branch
   # this should so all your branch along with current branch

   ```

3. **Develop**: Make your changes using the project’s coding style.

4. **Commit Changes**: Write clear and concise commit messages.

   ```
   git add .
   git commit -m "Add feature: description of the feature"

   ```

5. **Push to Github**

   ```
   git push origin feature/your-feature-name

   ```

6. Create a Pull Request (PR):
   ```
   Go to the repository on GitHub.
   Click New Pull Request and submit your changes.
   ```

## 5-How-to-contribute

There are many ways to contribute:

- Bug Fixes: Identify and fix bugs.
- New Features: Add new features and functionality.
- Documentation: Improve or add new documentation.
- UI Enhancements: Enhance UI components.

## 6-Coding-guidelines

- Use Tailwind CSS for styling.
- Follow the Next.js project structure and best practices.
- Write clear and reusable components.
- Follow JavaScript/TypeScript conventions.

  Example:

  ```
  export default function ExampleComponent() {
  return (
      <div className="bg-greenblue p-4 text-white">
      <h1 className="font-minecraft">Welcome to the Project!</h1>
      </div>
  );
  }
  ```

## 7-Common-issues

- **Missing Dependencies**: If you see errors related to missing modules, run:
  ```
  npm install
  ```
- **Port Already in Use**: If port 3000 is in use, change it:
  ```
  npm run dev -- -p 3001
  ```

## 8-Contact

For any questions or support, feel free to reach out:

- Discord: https://discord.gg/8wEquGh4CY
- GitHub Issues: https://github.com/ShubhamAsati-123/localhost-website/issues
