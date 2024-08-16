## Personal Web Page 🌐
> A modern and responsive layout for showcasing your personal profile and projects, built with React.

### Demo
You can view the live version of this personal web page [https://jeniasivets.github.io](https://jeniasivets.github.io).

### Features & Tools
- Built with **React** and **create-react-app** for a streamlined development experience.
- **Responsive Design**: Optimized for various screen sizes, including mobile.
- **Customizable Components**: Easily modify styles and components.
- **SVG Icons**: Utilizes SVG icons for crisp graphics.
- **CSS Animations**: Smooth UI transitions.


## Getting Started

This web page template is designed to be used with a React application. This is a setup created using `create-react-app`, which is a popular tool for starting React projects. Here are the steps you need to follow to set up and run this web page locally:

### Step 1: Set Up Your Development Environment

1. **Install Node.js**:
   
    If you don't have Node.js installed, you need to download and install it from the [official Node.js website](https://nodejs.org/). This also comes with npm (Node package manager), which you will need.


### Step 2: Create a New React App

1. **Open a Terminal**:
   
    Depending on your operating system, open your terminal application.

2. **Use `create-react-app`**:

    Navigate to the directory where you want to create your new React app:
     ```
     cd path/to/your/directory
     ```
   Then run the following command to create a new React app:
     ```
     npx create-react-app my-app
     ```

### Step 3: Replace the Default Files

1. **Navigate into Your App's Directory**:
   ```
   cd my-app
   ```

2. **Replace the Default App Component**:
   
    In the `src` folder, you will find a file named `App.js`. You can modify this component according to your needs or use the template you have.


### Step 4: **Install All Dependencies**:
   - In your project directory, run the following command to install all dependencies defined in your `package.json`:
     ```
     npm install
     ```
   - This command looks in `package.json` and installs all the necessary packages, including `react-scripts`.
   
In case there are some warnings and vulnerabilities during packages installation you can address vulnerabilities following these steps:

1. **Run `npm audit fix`**:

    Start by trying to automatically fix the vulnerabilities that can be resolved without breaking changes:
     ```
     npm audit fix
     ```
     
2. **Run `npm audit fix --force`**:

    If you want to attempt fixing all vulnerabilities, including those that may introduce breaking changes, you can run:
     ```
     npm audit fix --force
     ```

### Step 5: Start Your Development Server

1. **Run the Development Server**:
    ```
   npm start
     ```
   This will start the React development server. By default, it will open your default web browser and navigate to `http://localhost:3000`, where you can see your React app running.

### Step 6: Edit and Customize Your Page

- As you develop your personal page, you can modify files in the `src` folder to change how your app looks and functions. The `index.js` file serves as the entry point of your React application.

### Step 7: Deploying a React App to GitHub Pages

- Push the React app to the GitHub repository
    ```
   npm run deploy
     ```
- Deploy from a `gh-pages` branch