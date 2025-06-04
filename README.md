# Hunting Buddy - Job Application Tracker App

<!--
<img src="./client/src/assets/images/forms_2.jpg" alt="job application forms" width="420">

<sub>image source: [Pixabay](https://pixabay.com/illustrations/application-pen-write-writing-tool-1915343/)</sub>


<img src="./client/src/assets/images/job_hunt.jpg" alt="job application forms" width="500">

<sub>image source: [Unblast](https://unblast.com/job-hunting-illustration-ai/)</sub>

<img src="./client//src//assets/images/job_search_tool.jpg" alt="job search tool" width="400">

<sub>image source: [Pixabay](https://pixabay.com/photos/trousers-pocket-note-wrench-job-1255851/)</sub> -->

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning & Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

<img src="./client/src/assets/images/screenshots/screenshot_landing_page.png" alt="screenshot of landing page" width="700"><br><img src="./client/src/assets/images/screenshots/screenshot_register.png" alt="screenshot of register form" height="253"> <img src="./client/src/assets/images/screenshots/screenshot_login.png" height="253">

<br>
A full-stack job application management platform designed to help users track their job search efficiently.

<br>Built with React, Vite, Node.js, Express, and MongoDB, the app features authentication with hashed passwords, input validation, and session management. Role-based access control distinguishes permissions between standard users and admins.

<br>
On the client side, users can manage job applications via a responsive dashboard that includes advanced filtering, sorting, and data visualisation with Recharts. The responsive interface was created using styled-components and includes a light/dark theme toggle.

<br>
The backend provides a RESTful API built with Express and Mongoose, supporting full CRUD functionality. Validation and error handling are managed using express-validator and custom middleware. Performance is optimised with React Query for efficient data fetching, along with lazy loading and route-based code splitting.

<br></br>
<img src="./client/src/assets/images/screenshots/screenshot_light_mode.png" alt="screenshot of all jobs page light mode" height="270"> <img src="./client/src/assets/images/screenshots/screenshot_dark_mode.png" alt="screenshot of all jobs page dark mode" height="270"><br><img src="./client/src/assets/images/screenshots/screenshot_pagination.png" alt="screenshot of all jobs pagination" height="269"> <img src="./client/src/assets/images/screenshots/screenshot_profile.png" alt="screenshot of stats page" height="269"><br><img src="./client/src/assets/images/screenshots/screenshot_stats_1.png" alt="screenshot of stats page" height="270"> <img src="./client/src/assets/images/screenshots/screenshot_stats_2.png" alt="screenshot of stats page" height="270"><br>
<img src="./client/src/assets/images/screenshots/screenshot_admin.png" alt="screenshot of admin page" height="270">

## <a name="deployment-link"></a> 2. Deployment Link

:link:&nbsp; https://hunting-buddy.onrender.com

## <a name="installation"></a> 3. Installation

### Package Manager: npm (v10.8.1)

- <sub>[website](https://www.npmjs.com/)</sub>
- <sub>[documentation](https://docs.npmjs.com/)</sub>
- <sub>[GitHub Repository](https://github.com/npm)</sub>

### Getting Started

#### 1. Ensure [Git](https://git-scm.com/) is installed:

- Before you begin, make sure Git is installed on your machine.

#### 2. Clone the repository:

```zsh
git clone https://github.com/katieloesch/hunting-buddy.git
```

#### 3. Navigate to the project directory:

- Navigate into the project directory to install the necessary dependencies:

```zsh
cd hunting-buddy
```

### Running the Application Locally

#### 1. Install Dependencies

- To install all the required dependencies for both the frontend and backend, run:

  ```zsh
  npm run setup-project
  ```

#### 2. Set Up Environment Variables

- The application requires a `.env` file in the root directory to function correctly.

  - This file contains essential environment variables used for database connections, authentication, and image uploads.

  **Required Environment Variables:**

  ```plaintext
  NODE_ENV
  PORT
  MONGO_URL
  JWT_SECRET
  JWT_EXPIRES_IN
  CLOUD_NAME
  CLOUD_API_KEY
  CLOUD_API_SECRET
  ```

  **Setting up the `.env` File:**

  1. Create a `.env` file in the root directory of the project.
  2. Copy the required environment variables listed above into the `.env` file and assign values to them.

  **Example `.env` File:**

  ```plaintext
  NODE_ENV=development
  PORT=5100
  MONGO_URL=your_mongo_url
  JWT_SECRET=your_jwt_secret
  JWT_EXPIRES_IN=1d
  CLOUD_NAME=your_cloudinary_cloud_name
  CLOUD_API_KEY=your_cloudinary_api_key
  CLOUD_API_SECRET=your_cloudinary_api_secret
  ```

  3. Replace the placeholder values (`your_mongo_url`, `your_jwt_secret`, `your_cloudinary_cloud_name`, `your_cloudinary_api_key`, `your_jwt_secret`) with your actual credentials.

  - MongoDB Setup Instructions:

    - to obtain the `MONGO_URL`, you need to set up a MongoDB database
    - If you don't have an account already, register on MongoDB Atlas:
      - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account.
      - Create a cluster:
        - Select a cloud provider and a nearby region.
        - Use the free tier (sufficient for development).
      - Create a Database User:
        - Go to Database Access → Add New Database User
        - Set a username and password.
      - Get Your Connection String:
        - Go to Clusters → Connect → Drivers → Copy the URI, e.g.:
        ```plaintext
        mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/<your-database-name>?retryWrites=true&w=majority
        ```
      - Update the `.env` file with this URL as follows:
        ```plaintext
          MONGO_URL=mongodb+srv://<your-username>:<your-password>@atlascluster.ic1x9.mongodb.net/<your-database-name>?retryWrites=true&w=majority
        ```

  - Cloudinary Setup Instructions:
    - If you don’t have a Cloudinary account:
    - Visit [Cloudinary](https://cloudinary.com/) and create a free account.
    - Once signed in, navigate to the Dashboard to find your:
      - Cloud Name
      - API Key
      - API Secret
    - Add these to your .env file as follows:
    ```plaintext
    CLOUD_NAME=your_cloud_name
    CLOUD_API_KEY=your_api_key
    CLOUD_API_SECRET=your_api_secret
    ```

#### 3. Start the Development Servers

- With the dependencies installed and .env configured, start both frontend and backend servers concurrently:

  ```zsh
  npm run dev
  ```

#### 4. Access the Application

- The backend server will be running at `http://localhost:5100/` by default, or at the port you specified in the .env file.
- The frontend server will be available at `http://localhost:5173/`.
  - If the browser doesn't open automatically, navigate manually to http://localhost:5173/

## <a name="technologies"></a> 4. Technologies Used

### Core Technologies

This application was built using the `MERN stack`, an open source–centric collection of technologies that uses `JavaScript` for both the browser and server sides of a web application:

- **Frontend**
  - **React.js** (v18.3.1)
    - <sub>A JavaScript library for building user interfaces, particularly single-page applications where efficient and dynamic rendering of components is crucial.</sub>
    - <sub>[website](https://react.dev/)</sub>
    - <sub>[GitHub repository](https://github.com/reactjs/react.dev)</sub>
  - **Vite** (v5.3.4)
    - <sub>A frontend build tool that offers fast development and optimized production builds for modern JavaScript projects.</sub>
    - <sub>[website](https://vitejs.dev/)</sub>
    - <sub>[Github repository](https://github.com/vitejs/vite)</sub>
    - <sub>[npm page](https://www.npmjs.com/package/vite)</sub>
- **Backend**
  - **Express.js** (v4.18.2)
    - <sub>A fast and minimalist web framework for Node.js, used to build web applications and APIs.</sub>
    - <sub>[npm page](https://www.npmjs.com/package/express)</sub>
    - <sub>[GitHub repository](https://github.com/expressjs/express)</sub>
    - <sub> [website](https://expressjs.com/)</sub>
  - **Node.js** (v20.14.0)
    - <sub>A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to use JavaScript to build server-side applications with event-driven, non-blocking I/O.</sub>
    - <sub>[website](https://nodejs.org)</sub>
    - <sub>[GitHub Repository](https://github.com/nodejs)</sub>
- **Database**
  - **MongoDB / MongoDB Atlas** (v7.0.12)
    - <sub>MongoDB: a document-oriented NoSQL database designed for scalability and flexibility, making it easy to store and retrieve large volumes of structured and semi-structured data.</sub>
    - <sub>MongoDB Atlas: a fully managed cloud-based service that hosts and manages MongoDB databases, provided by the creators of MongoDB.</sub>
    - <sub>[MongoDB website](https://www.mongodb.com/)</sub>
    - <sub>[MongoDB GitHub Repository](https://github.com/mongodb/mongo)</sub>
    - <sub>[MongoDB Atlas website](https://www.mongodb.com/cloud/atlas/register)</sub>
  - **Mongoose** (v7.0.5)
    - <sub>A MongoDB object modeling tool designed to work in an asynchronous environment, providing schema-based solutions to model data in a MongoDB database.</sub>
    - <sub>[npm page](https://www.npmjs.com/package/mongoose)</sub>
    - <sub>[GitHub repository](https://github.com/Automattic/mongoose)</sub>
    - <sub> [website](https://mongoosejs.com/)</sub>
    - <sub>[mongoDB](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/)</sub>

### Key Dependencies - Frontend

- **@fortawesome/fontawesome-svg-core** (v6.6.0)
  - <sub>A core package that provides the necessary utilities and functions that underpin the use of FontAwesome icons, ensuring that the icons render correctly across different environments.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core?activeTab=readme)</sub>
  - <sub>[GitHub repository](https://github.com/FortAwesome/Font-Awesome)</sub>
  - <sub>[website](https://fontawesome.com/)</sub>
- **@fortawesome/free-solid-svg-icons** (v6.6.0)
  - <sub>A package that contains the SVG icon definitions for the "solid" style icons provided by FontAwesome, making them available for use in your project.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)</sub>
  - <sub>[GitHub repository](https://github.com/FortAwesome/Font-Awesome)</sub>
  - <sub>[website](https://fontawesome.com/)</sub>
- **@fortawesome/react-fontawesome** (v0.2.2)
  - <sub>A package that provides the React components necessary to use FontAwesome icons in React applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@fortawesome/react-fontawesome)</sub>
  - <sub>[GitHub repository](https://github.com/FortAwesome/react-fontawesome)</sub>
  - <sub>[website](https://fontawesome.com/)</sub>
- **@tanstack/react-query** (v4.29.5)
  - <sub>A library for managing server-side data in React applications, providing features like caching, synchronization, and automatic background updates for fetching and updating data.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@tanstack/react-query)</sub>
  - <sub>[GitHub repository](https://github.com/TanStack/query)</sub>
  - <sub>[website](https://tanstack.com/query/latest)</sub>
- **@tanstack/react-query-devtools** (v4.29.6)
  - <sub>A development tool that works alongside react-query, offering a visual interface for inspecting and debugging your data fetching operations in a React application.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@tanstack/react-query-devtools)</sub>
  - <sub>[GitHub repository](https://github.com/TanStack/query)</sub>
  - <sub>[website](https://tanstack.com/query/latest)</sub>
- **axios** (v1.3.6)
  - <sub>A promise-based HTTP client for Node.js and the browser that simplifies making asynchronous HTTP requests to REST endpoints.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/axios)</sub>
  - <sub>[GitHub repository](https://github.com/axios/axios)</sub>
  - <sub> [website](https://axios-http.com/)</sub>
- **dayjs** (v1.11.7)
  - <sub>A minimalist JavaScript library for parsing, validating, manipulating, and formatting dates, offering a lightweight and fast alternative to Moment.js.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/dayjs)</sub>
  - <sub>[GitHub repository](https://github.com/iamkun/dayjs)</sub>
  - <sub> [website](https://day.js.org/)</sub>
- **react-icons** (v4.8.0)
  - <sub>a free and open-source project providing icons for use in React projects</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-icons)</sub>
  - <sub>[GitHub repository](https://github.com/react-icons/react-icons)</sub>
  - <sub> [website](https://react-icons.github.io/react-icons/)</sub>
- **react-router-dom** (v6.10.0)
  - <sub>An implementation of react-router that includes additional components for browser-based routing</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-router-dom)</sub>
  - <sub>[GitHub repository](https://github.com/remix-run/react-router)</sub>
  - <sub> [website](https://reactrouter.com/en/main)</sub>
- **react-toastify** (v9.1.2)
  - <sub>A library for displaying customizable toast notifications in React applications, making it easy to show alerts, success messages, and other notifications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-toastify)</sub>
  - <sub>[GitHub repository](https://github.com/fkhadra/react-toastify)</sub>
  - <sub> [website](https://fkhadra.github.io/react-toastify/introduction/)</sub>
- **recharts** (v2.5.0)
  - <sub>A charting library built with React components, enabling developers to create a wide variety of customizable charts and visualizations with ease.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/recharts)</sub>
  - <sub>[GitHub repository](https://github.com/recharts/recharts)</sub>
  - <sub> [website](https://recharts.org/en-US/)</sub>
- **Sass** (v1.77.8)
  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>[npm page](https://www.npmjs.com/package/sass)</sub>
  - <sub>[GitHub repository](https://github.com/sass/dart-sass)</sub>
- **styled-components** (v5.3.10)
  - <sub>A library for styling React applications using tagged template literals, allowing developers to write CSS directly within JavaScript and create component-scoped styles.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/styled-components)</sub>
  - <sub>[GitHub repository](https://github.com/styled-components/styled-components)</sub>
  - <sub> [website](https://styled-components.com/)</sub>

### Key Dependencies - Backend

- **bcryptjs** (v2.4.3)
  - <sub>A JavaScript library for hashing and comparing passwords securely using the bcrypt algorithm.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/bcryptjs)</sub>
  - <sub>[GitHub repository](https://github.com/dcodeIO/bcrypt.js)</sub>
- **cloudinary** (v1.37.3)
  - <sub>A cloud-based service that allows you to easily manage, store, and serve images and videos in web applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/cloudinary)</sub>
  - <sub>[GitHub repository](https://github.com/cloudinary/cloudinary_npm)</sub>
  - <sub> [website](https://cloudinary.com/)</sub>
- **concurrently** (v8.0.1)
  - <sub>A utility that allows you to run multiple commands or scripts concurrently in one terminal window.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/concurrently)</sub>
  - <sub>[GitHub repository](https://github.com/open-cli-tools/concurrently)</sub>
- **cookie-parser** (v1.4.6)
  - <sub>Middleware for parsing cookies attached to client requests, making it easier to access and manage them in Express.js applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/cookie-parser)</sub>
  - <sub>[GitHub repository](https://github.com/expressjs/cookie-parser)</sub>
- **datauri** (v4.1.0)
  - <sub>Converts file data (such as images) to Data URIs, which are base64-encoded strings that can be embedded directly in HTML or CSS.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/datauri)</sub>
  - <sub>[GitHub repository](https://github.com/data-uri/datauri)</sub>
- **dayjs** (v1.11.9)
  - <sub>A minimalist JavaScript library for parsing, validating, manipulating, and formatting dates, offering a lightweight and fast alternative to Moment.js.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/dayjs)</sub>
  - <sub>[GitHub repository](https://github.com/iamkun/dayjs)</sub>
  - <sub> [website](https://day.js.org/)</sub>
- **dotenv** (v16.0.3)
  - <sub>A zero-dependency module that loads environment variables from a .env file into process.env, allowing secure configuration settings management.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/dotenv)</sub>
  - <sub>[GitHub repository](https://github.com/motdotla/dotenv)</sub>
  - <sub> [website](https://dotenvx.com/)</sub>
- **express** (v4.18.2)
  - <sub>A fast and minimalist web framework for Node.js, used to build web applications and APIs.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/express)</sub>
  - <sub>[GitHub repository](https://github.com/expressjs/express)</sub>
  - <sub> [website](https://expressjs.com/)</sub>
- **express-async-errors** (v3.1.1)
  - <sub> Automatically handles errors in asynchronous Express routes, allowing you to use async/await without needing try-catch blocks.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/express-async-errors)</sub>
  - <sub>[GitHub repository](https://github.com/davidbanham/express-async-errors)</sub>
- **express-mongo-sanitize** (v2.2.0)
  - <sub>Middleware that helps prevent MongoDB Operator Injection by sanitizing user inputs in Express.js applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/express-mongo-sanitize)</sub>
  - <sub>[GitHub repository](https://github.com/fiznool/express-mongo-sanitize)</sub>
- **express-rate-limit** (v6.8.0)
  - <sub>Middleware for limiting repeated requests to public APIs or endpoints in an Express.js application, useful for preventing abuse and denial-of-service attacks.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/express-rate-limit)</sub>
  - <sub>[GitHub repository](https://github.com/express-rate-limit/express-rate-limit)</sub>
- **express-validator** (v7.0.1)
  - <sub>A set of express.js middleware functions that offer a way to validate and sanitise input data, helping to prevent common security vulnerabilities.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/express-validator)</sub>
  - <sub>[GitHub repository](https://github.com/express-validator/express-validator)</sub>
  - <sub> [website](https://express-validator.github.io/docs)</sub>
- **helmet** (v7.0.0)
  - <sub>A collection of middleware functions that enhance the security of Express.js applications by setting various HTTP headers.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/helmet)</sub>
  - <sub>[GitHub repository](https://github.com/helmetjs/helmet)</sub>
  - <sub> [website](https://helmetjs.github.io/)</sub>
- **http-status-codes** (v2.2.0)
  - <sub>A utility that provides constants and functions for working with HTTP status codes, making code more readable and maintainable.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/http-status-codes)</sub>
  - <sub>[GitHub repository](https://github.com/prettymuchbryce/http-status-codes)</sub>
- **jsonwebtoken** (v9.0.0)
  - <sub>A library for creating, signing, and verifying JSON Web Tokens (JWTs), which are used for securely transmitting information between parties.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/jsonwebtoken)</sub>
  - <sub>[GitHub repository](https://github.com/auth0/node-jsonwebtoken)</sub>
  - <sub> [website (JsonWebToken implementation for node.js)](https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html)</sub>
- **morgan** (v1.10.0)
  - <sub> A HTTP request logger middleware for Node.js that logs requests made to an Express.js server, useful for debugging and monitoring.</sub>
  - <sub>[npm page](https://npmjs.com/package/morgan)</sub>
  - <sub>[GitHub repository](https://github.com/expressjs/morgan)</sub>
- **mongoose** (v7.0.5)
  - <sub>A MongoDB object modeling tool designed to work in an asynchronous environment, providing schema-based solutions to model data in a MongoDB database.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/mongoose)</sub>
  - <sub>[GitHub repository](https://github.com/Automattic/mongoose)</sub>
  - <sub> [website](https://mongoosejs.com/)</sub>
- **multer** (v1.4.5-lts.1)
  - <sub>A middleware for handling multipart/form-data, commonly used for uploading files in Express.js applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/multer)</sub>
  - <sub>[GitHub repository](https://github.com/expressjs/multer)</sub>
- **nanoid** (v4.0.2)
  - <sub>A secure, URL-friendly unique string ID generator for use in web applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/nanoid)</sub>
  - <sub>[GitHub repository](https://github.com/ai/nanoid)</sub>
  - <sub>[website](https://zelark.github.io/nano-id-cc/)</sub>
- **nodemon** (v2.0.22)
  - <sub> A utility that automatically restarts your Node.js server when files change, making development faster and more efficient.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/nodemon)</sub>
  - <sub>[GitHub repository](https://github.com/remy/nodemon)</sub>
  - <sub>[website](https://nodemon.io/)</sub>

### UI and Design

- **Icons**
  - **Font Awesome**
    - <sub>An icon library offering a large set of scalable and customisable icons, with a free version that is open source.</sub>
    - <sub>[website](https://fontawesome.com/)</sub>
    - <sub>[GitHub repository](https://github.com/FortAwesome/Font-Awesome)</sub>
    - <sub>[license](https://fontawesome.com/license/free)</sub>
  - **React Icons**
    - <sub>A free and open-source project providing icons for use in React projects.</sub>
    - <sub> [website](https://react-icons.github.io/react-icons/)</sub>
    - <sub>[GitHub repository](https://github.com/react-icons/react-icons)</sub>
    - <sub>[license](https://github.com/react-icons/react-icons/blob/master/LICENSE)</sub>
- **Font**

  - **Urbanist** designed by Corey Hu
    - <sub>[Google Fonts](https://fonts.google.com/specimen/Urbanist)</sub>

- **Images**
  - **Pixabay**
    - <sub>A free stock photo and media platform offering a vast library of images, videos and music.</sub>
    - <sub>[website](https://pixabay.com/)</sub>
    - <sub>[license](https://pixabay.com/service/license-summary/)</sub>
  - **iStockPhoto**
    - <sub>A stock content service offering a wide range of photos, illustrations, videos, and audio clips for creative projects.</sub>
    - <sub>[website](https://www.istockphoto.com/)</sub>
    - <sub>[license](https://www.istockphoto.com/legal/license-agreement)</sub>
  - **Unblast**
    - <sub>A platform that offers a collection of design resources, including templates, mockups, icons and other creative assets for designers and developers.</sub>
    - [website](https://unblast.com/)
    - [license](https://unblast.com/license/)

### Deployment

- **Render**:
  - <sub>A cloud platform that provides a service for deploying web applications, APIs, databases, and static sites with automatic scaling and Git-based continuous deployment.</sub>
  - <sub>[website](https://render.com/)</sub>
  - <sub>[GitHub repository](https://github.com/renderinc)</sub>
  - <sub>[documentation](https://render.com/docs)</sub>

### Development Tools

- **Vite** (v5.3.4)
  - <sub>A frontend build tool that offers fast development and optimized production builds for modern JavaScript projects.</sub>
  - <sub>[website](https://vitejs.dev/)</sub>
  - <sub>[Github repository](https://github.com/vitejs/vite)</sub>
  - <sub>[npm page](https://www.npmjs.com/package/vite)</sub>
  - <sub>[documentation](https://vitejs.dev/guide/)</sub>
- **Git / GitHub** (v2.39.5)
  - <sub>used for version control and collaboration</sub>
  - <sub>[Git website](https://git-scm.com/)</sub>
  - <sub>[Git documentation](https://git-scm.com/doc)</sub>
  - <sub>[GitHub website](https://github.com/)</sub>
  - <sub>[GitHub documentation](https://docs.github.com/en)</sub>
- **Visual Studio Code (VSCode)** (v1.96.4)
  - <sub>code editor used for development</sub>
  - <sub>[website](https://code.visualstudio.com/)</sub>
  - <sub>[GitHub repository](https://github.com/microsoft/vscode)</sub>
  - <sub>[documentation](https://code.visualstudio.com/docs)</sub>
- **Google Chrome & Chrome DevTools** (v133.0.6943.54)
  - <sub>used for testing, debugging, and developing in the browser</sub>
  - <sub>[Google Chrome website](https://www.google.com/chrome/)</sub>
  - <sub>[Google Chrome documentation](https://developer.chrome.com/docs)</sub>
  - <sub>[Chrome DevTools documentation](https://developer.chrome.com/docs/devtools)</sub>
- **Excalidraw** (v0.17.0)
  - <sub>tool used to create wireframes for the application</sub>
  - <sub>[website](https://excalidraw.com/)</sub>
  - <sub>[GitHub repository](https://github.com/excalidraw/excalidraw)</sub>
  - <sub>[documentation](https://docs.excalidraw.com/)</sub>
- **ChatGPT4o**
  - <sub>generative AI tool used for debugging and development support</sub>
  - <sub>[website](https://chat.openai.com/)</sub>
  - <sub>[GitHub repository](https://github.com/openai)</sub>
- **Mockaroo**
  - <sub>web-based tool for quickly and easily generating fake datasets for a variety of purposes, such as testing software, populating databases or creating sample documents</sub>
  - <sub>[website](https://www.mockaroo.com/)</sub>

### Resources & Tutorials

- **Documentation**
  - <sub>[vite](https://vitejs.dev/guide/)</sub>
  - <sub>[react-router: Migrating to RouterProvider](https://reactrouter.com/en/main/upgrading/v6-data)</sub>
  - <sub>[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/quick-start)</sub>
  - <sub>[axios](https://axios-http.com/docs/intro)</sub>
  - <sub>[dayjs](https://day.js.org/docs/en/installation/installation)</sub>
  - <sub>[styled-components](https://styled-components.com/docs)</sub>
  - <sub>[React-toastify](https://fkhadra.github.io/react-toastify/introduction/)</sub>
  - <sub>[React useNavigation() and navigation.state](https://reactrouter.com/en/main/hooks/use-navigation#usenavigation)</sub>
  - <sub>[MongoDB aggregation pipeline](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/)</sub>
  - <sub>[Render](https://render.com/docs)</sub>
- **Blogs**
  - <sub>[The Power Of CreateBrowserRouter: Optimizing Your React App's Navigation](https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app) by Daxesh Patel</sub>
  - <sub>[Getting Started with createBrowserRouter in react-router-dom](https://medium.com/@pavitramodi.it/getting-started-with-createbrowserrouter-in-react-router-dom-e3131820fef4) by [Pavitra Modi](https://medium.com/@pavitramodi.it)</sub>
- **YouTube**
  - <sub>[React Router in Depth #3 - Router Provider, createBrowserRouter & Outlet](https://www.youtube.com/watch?v=5s57C7leXc4&pp=ygUacmVhY3QgY3JlYXRlYnJvd3NlcnJvdXRlciA%3D) by [Net Ninja](https://www.youtube.com/@NetNinja)</sub>
  - <sub>[Javascript Nuggets - FormData API](https://youtu.be/5-x4OUM-SP8) by [Coding Addict](https://www.youtube.com/@CodingAddict)</sub>
  - <sub>[FormData API - React](https://youtu.be/WrX5RndZIzw) by [Coding Addict](https://www.youtube.com/@CodingAddict)</sub>
    <sub>[Javascript Nuggets - Debounce](https://www.youtube.com/watch?v=tYx6pXdvt1s) by [Coding Addict](https://www.youtube.com/@CodingAddict)</sub>
- **Udemy**
  - <sub>[MERN 2024 Edition - MongoDB, Express, React and NodeJS](https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/) by [John Smilga](https://www.udemy.com/user/janis-smilga-3/)</sub>
  - <sub>[The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/) by [Andrew Mead](https://www.udemy.com/user/andrewmead/) & [Rob Percival](https://www.udemy.com/user/robpercival/)</sub>
  - <sub>[React, NodeJS, Express & MongoDB - The MERN Fullstack Guide](https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/?couponCode=OF83024F) by [Manuel Lorenz](https://www.udemy.com/user/manuel-lorenz/) & [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)</sub>
  - <sub>[React - The Complete Guide 2024 (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview) by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)</sub>

## <a name="deliverables"></a> 5. Deliverables

### MVP

1. **User Authentication**
   - Register, login, logout
   - Password hashing and validation
   - Basic session management
2. **Job Management**
   - Create, read, update, and delete (CRUD) job applications
   - Store job attributes: company, position, status, type, location
   - View all jobs in a list format
3. **Role-Based Access**
   - Support for standard user and admin roles
   - Protected routes and authorization
4. **Dashboard UI**
   - Responsive layout with key pages: Add Job, All Jobs, Profile
   - Navigation via sidebar and navbar
5. **Form Validation & Error Handling**
   - Input validation using express-validator
   - Global error handling middleware
6. **Backend API**
   - RESTful API with Express and MongoDB (via Mongoose)
   - Controllers and routers organized by feature
7. **Frontend Framework**
   - React with Vite
   - Styled-components for modular styling
8. **Deployment**
   - Fully deployed on a public domain

### Potential Extra Features / Stretch Goals

- Advanced Data Visualization
  - Interactive charts (e.g. job status breakdown) using Recharts
- Advanced Filtering & Sorting
  - Sort jobs by date, company, position, and status
  - Filter by job type, location, and custom criteria
- Dark Mode Toggle
  - Theme preference persisted via local storage
- Admin Panel
  - Admin-specific tools and access to additional data views
- Pagination
  - Improve performance for users with many job entries
- Demo User Mode
  - Instant access for demo/testing purposes
- Profile Customization
  - Upload profile pictures
- Accessibility Improvements
  - ARIA roles, keyboard navigation, and contrast checks
- React Query Integration
  - Improve data caching and reduce redundant API calls
- Cloudinary Integration
  - Store and manage uploaded images in the cloud
- Rate Limiting & Security
  - Helmet, express-rate-limit, and mongo-sanitize for production hardening

### User Stories

#### **Authentication & User Roles**

- As a new user, I should be able to register with my details, so I can start managing my job applications.
- As a returning user, I should be able to log in securely, so I can access my dashboard and data.
- As a user, I should remain logged in, so I don’t have to re-enter credentials every time.
- As a user, I should be able to update my profile information, so I can keep my account details accurate.
- As an admin user, I should have privileged access, so I can manage admin-specific views and actions.

#### **Job Management**

- As a user, I should be able to add new job applications, so I can keep track of positions I’ve applied for.
- As a user, I should be able to edit job details, so I can update application statuses or correct information.
- As a user, I should be able to delete jobs, so I can remove applications that are no longer relevant.
- As a user, I should be able to view all job applications in a list, so I can get a comprehensive overview.
- As a user, I should be able to filter and sort jobs, so I can easily find and organise my applications.

#### **Analytics & Insights**

- As a user, I should be able to view my application statistics so I can monitor my application progress.
- As a user, I should be able to see how many jobs are pending, decline or have an interview scheduled, so I can assess performance.

#### **UI & Performance**

- As a user, I should be able to switch between light and dark mode, so I can choose a theme that suits my environment.
- As a user, I should be able to load the application quickly, so I can access features without delay.
- As a user, I should be able to use the app smoothly across different devices, so I can use it on both desktop and mobile.
- As a user, I should be able to see feedback messages, so I know the result of my actions.

## <a name="planning"></a> 6. Planning & Build Process

### Wireframe

<img src="./client/src/assets/images/wireframe/wireframe_1.png" alt="wireframe for landing page, login page and register page" width="650">

<img src="./client/src/assets/images/wireframe/wireframe_2.png" alt="wireframe for jobs page" width="410"> <img src="./client/src/assets/images/wireframe/wireframe_3.png" alt="wireframe for add job page" width="410">

<img src="./client/src/assets/images/wireframe/wireframe_4.png" alt="wireframe for stats page" width="410"> <img src="./client/src/assets/images/wireframe/wireframe_5.png" alt="wireframe for profile page" width="410">

### ERD

<img src="./client/src/assets/images/erd/erd.png" alt="erd" width="500">

## <a name="challenges"></a> 7. Challenges

- Implementing secure authentication and differentiating user roles (admin vs user) with proper route protection.
- Adapting to newer routing patterns, especially with loaders and actions, which differed from older implementations.
- Ensuring form validations were enforced both client-side and server-side without redundancy or conflicts.
- Managing state efficiently across nested dashboard components while avoiding prop drilling.

## <a name="wins"></a> 8. Wins

- Implemented full CRUD functionality with a clean, intuitive user interface.
- Developed light/dark theme support with persistent user preferences via local storage and a toggle control.
- Integrated Recharts to visualize job application statistics and insights.
- Utilized styled-components and layout wrappers to create modular, reusable, and maintainable UI components.
- Structured Express backend using controllers, routers, and middleware to ensure clear separation of concerns.
- Enhanced performance with React Query for efficient data fetching, caching, and background refetching.
- Enforced robust validation at both the database and API levels using Express Validator.
- Implemented secure JWT-based authentication to manage user sessions.
- Deployed the application using Render for the backend and MongoDB Atlas for cloud-hosted database services.

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

- Gained a clear understanding of the advantages of using Vite over Create React App, particularly in terms of build speed and developer experience.
- Recognized the value of design systems: establishing global styles and component wrappers early accelerated development and enhanced visual consistency.
- Developed custom React hooks to abstract repetitive logic and promote code reusability across components.
- Learned the significance of implementing role-based access control for managing user permissions securely and effectively.
- Discovered the power of React Query in improving perceived performance and simplifying async data management.
- Emphasized the importance of centralized error handling, using shared backend middleware and frontend notifications to create a seamless user experience.
- Reinforced the critical role of validation, combining backend checks via express-validator with client-side form validation to ensure data integrity.
- Experienced how routing architecture affects user experience: creating nested routes and layout components in React Router to maintain a clean, scalable structure.

## <a name="future-improvements"></a> 10. Future Improvements

- Accessibility Audits
  - Add keyboard navigation, screen reader support, and ARIA roles for inclusivity.
- Testing Suite
  - Add unit and integration tests using tools like Jest, React Testing Library, and Supertest for backend.
- User Notifications
  - Add email notifications or reminders for follow-ups on pending applications.
- Multitenancy/Teams
  - Enable job tracking across multiple users/teams for collaborative job hunting.

<!--

--------------------------------------------------------------------------------------


*** Notes ***

### day 1:23/07/2024

- set up frontend using vite

```zsh

npm create vite@latest application-tracker-client -- --template react

```

import some global syles (css) from a template

day 2: 24/07/2024

- install npm packages
- set up react router
- create react components for different pages
- set up nested routes

day 2: 25/07/2024

27/07/2024

- set up content for 404 page
- moved logo into its own react component so I can reuse it in other places

---

challenges:

wins:
This was not my first React project, so for this app I wanted to challenge myself and expand my understanding of the framework. I set up previous application using the 'create-react-app' command so for this project I wanted to learn how to use vite. Although the file structure and jsx extension are slighly different it didn't take me too long to get the hang of it.

Similarly, I have used react router before, but I normally do so using the the `<BrowserRouter>`, `<Route>` and `<Routes>` components. For this project I wanted to learn how to set up the routes using the newer `createBrowserRouter()` function and the `<RouterProvider>` components released with react version??. Those took a bit longer to get working as the syntax for setting up nested routes looks different than it does using the more familar `<Route>` and `<Routes>` but I think it's a great addition to react-router-dom package. Although this might be subjective, I find setting up the routes as an array of objects looks cleaner and it's easier to get an overview over the routes in a project. I will definitely make use of these newer components in future projects.


```JSX
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AddJob, Admin, AllJobs, DashboardLayout, Error, HomeLayout, Landing, Login, Profile, Register, Stats
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

```

This was also the first time I used styled-components. Although the syntax is slightly different, it is pretty similar to the css/scss I'm used to and I managed to give  the app a fully responsive design.

```JSX

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

```

In React Router, `<Route>` and `<Routes>` are components traditionally used for defining routes within a single-page application (SPA). On the other hand, `createBrowserRouter` and `RouterProvider` are newer APIs introduced in React Router v6.4 to provide a more flexible and powerful routing system.

### `<Route>` and `<Routes>`

- **Purpose**: These components are used to define and manage the routing within your React application.
- **Usage**:
  - `<Routes>` is a container for all your route definitions.
  - `<Route>` defines individual routes and their corresponding components.

#### Example:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### `createBrowserRouter` and `RouterProvider`

- **Purpose**: These APIs provide a more declarative way to configure routing, supporting data loading, error handling, and nested routing structures out of the box.
- **Usage**:
  - `createBrowserRouter` is used to create a router instance with a more structured and centralized configuration.
  - `RouterProvider` is used to provide the router instance to your application, similar to how you might use a context provider.

#### Example:

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

- https://reactrouter.com/en/main/upgrading/v6-data
- https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app
- https://medium.com/@pavitramodi.it/getting-started-with-createbrowserrouter-in-react-router-dom-e3131820fef4

### Key Differences

1. **Configuration Style**:

   - **Route and Routes**: These components are JSX-based and are typically used within the render method of your component.
   - **createBrowserRouter and RouterProvider**: These are more configuration-based, allowing you to define routes in a more structured manner, supporting nested routes and other advanced features directly.

2. **Features**:

   - **Route and Routes**: Basic routing capabilities.
   - **createBrowserRouter and RouterProvider**: Enhanced features such as data loading, deferred rendering, error handling, and nested routing directly within the route configuration.

3. **API Flexibility**:

   - **Route and Routes**: More straightforward and traditional approach, suitable for simpler applications.
   - **createBrowserRouter and RouterProvider**: Provides a more powerful and flexible API, ideal for complex applications requiring advanced routing capabilities.

4. **Centralized Configuration**:
   - **Route and Routes**: Routes are defined directly within the component tree.
   - **createBrowserRouter and RouterProvider**: Routes are configured in a centralized object, making it easier to manage and understand the routing structure of the application.

### Summary

- Use **`<Route>` and `<Routes>`** for straightforward and traditional JSX-based route definitions within your components.
- Use **`createBrowserRouter` and `RouterProvider`** for a more powerful, declarative, and centralized routing configuration that supports advanced features like nested routes, data loading, and error handling.

Vite and Create React App (CRA) are both tools used to set up and manage React projects, but they have several differences in terms of performance, features, and use cases. Here's a detailed comparison between the two:

### 1. **Performance**

- **Vite**:
  - **Faster Development Builds**: Vite leverages native ES module imports in the browser, enabling it to start the development server almost instantly regardless of the size of the application.
  - **Hot Module Replacement (HMR)**: Vite provides faster HMR, making updates almost instantaneous by only replacing the changed modules without a full page reload.
- **Create React App**:
  - **Slower Development Builds**: CRA uses Webpack, which can be slower, especially for larger projects. Initial startup and subsequent rebuilds can take longer.
  - **Hot Module Replacement (HMR)**: CRA supports HMR, but it can be slower compared to Vite due to the underlying Webpack build process.

### 2. **Bundling**

- **Vite**:

  - Uses Rollup for production builds, which is known for its efficient tree-shaking and smaller bundle sizes.
  - Supports code splitting out of the box.

- **Create React App**:
  - Uses Webpack for both development and production builds. Webpack is highly configurable but can result in larger build times and potentially larger bundle sizes.
  - Also supports code splitting through dynamic `import()` calls, but configuration might be less straightforward compared to Vite.

### 3. **Configuration and Extensibility**

- **Vite**:
  - Designed to be minimal out of the box but highly extensible through plugins.
  - Simpler configuration through a single `vite.config.js` file.
- **Create React App**:
  - Convention over configuration: CRA is designed to work with zero configuration out of the box.
  - Extending CRA requires ejecting, which exposes the underlying Webpack configuration but makes future updates harder.

### 4. **Community and Ecosystem**

- **Vite**:

  - Developed and maintained by the creator of Vue.js, Evan You, and has a growing community.
  - Gaining popularity rapidly due to its performance advantages and modern approach.

- **Create React App**:
  - Created by Facebook and has a large, established community.
  - A lot of resources, tutorials, and third-party tools are available due to its long-standing presence in the React ecosystem.

### 5. **Features**

- **Vite**:

  - Support for multiple frameworks: While CRA is specific to React, Vite can be used with Vue, Svelte, and other frameworks.
  - Modern JavaScript and TypeScript support out of the box.

- **Create React App**:
  - Focused on React projects with robust support for JSX and React-specific features.
  - Supports modern JavaScript and TypeScript with minimal configuration.

### 6. **Build Output and Optimization**

- **Vite**:

  - Produces highly optimized builds with smaller bundle sizes thanks to Rollup.
  - Efficient tree-shaking and dead code elimination.

- **Create React App**:
  - Produces optimized builds with Webpack, but they can be larger compared to Vite's output.
  - Good support for code splitting and lazy loading.

### Conclusion

**Vite** is a modern build tool that offers faster development builds, better HMR, and smaller production builds, making it an excellent choice for new projects or developers looking for a highly performant setup. **Create React App** is a well-established, easy-to-use tool that provides a solid foundation for React projects with minimal configuration, making it suitable for beginners and projects where community support and stability are paramount.

Choosing between the two depends on your specific needs:

- Use **Vite** if you prioritize fast development times, modern build optimizations, and flexibility with configuration.
- Use **Create React App** if you prefer convention over configuration, need extensive community support, or are starting with React and want a stable, familiar tool.

lessons learned:




day: 31/07/2024
-> logout button
-> dark theme
-> save dark theme to localStorage


App.jsx

```JSX

export const getThemeFromLS = () => {
  const darkThemeActiveLS = localStorage.getItem('darkThemeActive') === 'true';
  document.body.classList.toggle('dark-theme', darkThemeActiveLS);
  return darkThemeActiveLS;
};

getThemeFromLS();

```

DashboardLayout.jsx

```JSX
  import { getThemeFromLS } from '../App';

  const [darkThemeActive, setDarkThemeActive] = useState(getThemeFromLS());

  const toggleDarkTheme = () => {
    const updatedTheme = !darkThemeActive;
    setDarkThemeActive(updatedTheme);
    document.body.classList.toggle('dark-theme', updatedTheme);
    localStorage.setItem('darkThemeActive', updatedTheme);
  };
```

index.css
```CSS
  .dark-theme {
    --text-color: var(--dark-mode-text-color);
    --background-color: var(--dark-mode-bg-color);
    --text-secondary-color: var(--dark-mode-text-secondary-color);
    --background-secondary-color: var(--dark-mode-bg-secondary-color);
  }
```

wins:
I wanted to implement a dark/light theme as well as had never been able to implement this in previous applications I build due to time constraints, so it was important to me to set some time aside during this project to achieve this.
I also thought it would be nice if the theme stayed the same after reloading the page, so I decided to save the theme to active storage once the toggle button is clicked and then automatically apply it again once the page reloads.

```JSX

import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../styledComponents/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const { darkThemeActive, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {darkThemeActive ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill className='toggle-icon' />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;

```


31/07/2024

start backend
set up separate json file for backend:

```zsh
npm init -y
```

add server.js file to backend

package.json:
add
  "type": "module",

set up .gitignore

install packages
- bcryptjs@2.4.3
- concurrently@8.0.1
- cookie-parser@1.4.6
- dayjs@1.11.7
- dotenv@16.0.3
- express@4.18.2
- express-async-errors@3.1.1
- express-validator@7.0.1
- http-status-codes@2.2.0
- jsonwebtoken@9.0.0
- mongoose@7.0.5
- morgan@1.10.0
- multer@1.4.5-lts.1
- nanoid@4.0.2
- nodemon@2.0.22
- cloudinary@1.37.3
- dayjs@1.11.9
- datauri@4.1.0
- helmet@7.0.0
- express-rate-limit@6.8.0
- express-mongo-sanitize@2.2.0


set up script in package.json that installs all dependencies:

```zsh
"scripts": {
    "setup-project": "npm i && cd client && npm i",
    "dev": "nodemon server.js"
  },
```


- set up express server

```

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(5100, () => {
  console.log('server running on port 51000...');
});


```


test it:

npm run dev




14/08/2024
```
import jwt from 'jsonwebtoken';

export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

```



```
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  // 1) check if user with input email exists in db
  // 2) if user exists, check if password is correct

  const isValidUser =
    user && (await comparePasswords(req.body.password, user.password));

  if (!isValidUser) {
    // if user doesn't exist in db or passwords don't match -> 401
    throw new UnauthenticatedError('invalid credentials');
  }

  const token = createJWT({
    userId: user._id,
    role: user.role,
  });

  //one day in milliseconds
  const oneDayMs = 1000 * 60 * 60 * 24;

  // name: token,
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDayMs),
    secure: process.env.NODE_ENV,
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};

```



This function `login` is an asynchronous function used in a Node.js/Express application to handle user authentication. Let's break down the code step by step:

### 1. Finding the User in the Database
```javascript
const user = await User.findOne({ email: req.body.email });
```
- **Purpose**: This line attempts to find a user in the database using the email provided in the request body (`req.body.email`).
- **Outcome**: If a user with that email exists, the `user` variable will contain the user's data. If not, `user` will be `null`.

### 2. Validating the User and Password
```javascript
const isValidUser = user && (await comparePasswords(req.body.password, user.password));
```
- **Purpose**: This line checks two conditions:
  - Whether the `user` exists (i.e., the user was found in the database).
  - Whether the provided password matches the stored hashed password in the database.
- **Outcome**:
  - `isValidUser` will be `true` if both the user exists and the password is correct.
  - If either the user doesn't exist or the password is incorrect, `isValidUser` will be `false`.

### 3. Handling Invalid Credentials
```javascript
if (!isValidUser) {
  throw new UnauthenticatedError('invalid credentials');
}
```
- **Purpose**: This block checks if the user credentials are invalid.
- **Outcome**:
  - If `isValidUser` is `false`, an `UnauthenticatedError` is thrown, which will typically result in an HTTP 401 Unauthorized response being sent back to the client.
  - The error message is "invalid credentials."

### 4. Creating a JWT (JSON Web Token)
```javascript
const token = createJWT({
  userId: user._id,
  role: user.role,
});
```
- **Purpose**: This line creates a JWT using the `createJWT` function. The payload of the token includes the user's ID and role.
- **Outcome**:
  - A JWT token is generated, which will be used to authenticate subsequent requests made by the user.

### 5. Setting the JWT in a Cookie
```javascript
res.cookie('token', token, {
  httpOnly: true,
  expires: new Date(Date.now() + oneDayMs),
  secure: process.env.NODE_ENV,
});
```
- **Purpose**: This block sets the JWT as a cookie in the response to the client.
- **Cookie Options**:
  - `httpOnly: true`: Ensures that the cookie is only accessible via HTTP(S) and not client-side JavaScript, enhancing security.
  - `expires`: Sets the cookie's expiration time to one day from the current time.
  - `secure`: Ensures the cookie is sent only over HTTPS if the `NODE_ENV` environment variable is set (usually to `production`).

### 6. Sending the Success Response
```javascript
res.status(StatusCodes.OK).json({ msg: 'user logged in' });
```
- **Purpose**: This line sends an HTTP 200 OK response back to the client, indicating that the user has successfully logged in.
- **Outcome**: The response contains a JSON object with a success message.

### The `createJWT` Function
```javascript
export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};
```
- **Purpose**: This function is responsible for creating a JWT.
- **Parameters**:
  - `payload`: Contains data that will be embedded in the JWT, such as the user ID and role.
  - `process.env.JWT_SECRET`: A secret key used to sign the JWT. This should be stored securely in environment variables.
  - `process.env.JWT_EXPIRES_IN`: Defines how long the token will be valid.
- **Outcome**: The function returns the generated JWT.

### Summary
- **Functionality**: The `login` function authenticates a user by checking the email and password, generates a JWT if the credentials are valid, and then sets this JWT in a cookie before sending a response back to the client.
- **Error Handling**: If the email or password is incorrect, the function throws an `UnauthenticatedError`, which should be handled by the Express error middleware to return a 401 status code to the client.


15/08/2024

```JavaScript
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  // 1) check if user with input email exists in db
  // 2) if user exists, check if password is correct

  const isValidUser =
    user && (await comparePasswords(req.body.password, user.password));

  if (!isValidUser) {
    // if user doesn't exist in db or passwords don't match -> 401
    throw new UnauthenticatedError('invalid credentials');
  }

  const token = createJWT({
    userId: user._id,
    role: user.role,
  });

  //one day in milliseconds
  const oneDayMs = 1000 * 60 * 60 * 24;

  // send back cookie, name of cookie: 'token',
  res.cookie('token', token, {
    httpOnly: true, // can't be accessed using JS, makes it more secure
    expires: new Date(Date.now() + oneDayMs), // jwt expires in 1 day, set cookie expiration to same value but in ms
    secure: process.env.NODE_ENV === 'production', // true if while in production env (https), false while in dev env (http)
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};



```

<img src="./client/src/assets/images/screenshots/cookie-postman-1.png">
<img src="./client/src/assets/images/screenshots/cookie-postman-2.png">
<img src="./client/src/assets/images/screenshots/cookie-postman-3.png">



```JavaScript
import { UnauthenticatedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError('authentication invalid'); // 401
  }

  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };

    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid'); // 401
  }
};

```
Token Extraction:
The authenticateUser middleware first extracts the token from the cookies using req.cookies.

Token Verification:
The token is then verified using the verifyJWT function, which is assumed to decode the JWT (JSON Web Token) and return the payload. The payload typically includes the userId and possibly other claims like role.

Saving User Info in req:
Once the token is verified, the userId and role are extracted from the token payload and stored in the req.user object:

```JavaScript
req.user = { userId, role };
```
This step effectively makes userId and role available throughout the lifetime of the request.

Passing Control to the Next Middleware/Controller:
After storing the user information in req.user, the next() function is called to pass control to the next middleware function or the route handler (controller).

In any subsequent middleware or controller handling the request, you can access the userId and other user data using req.user. For example:

```JavaScript
const userId = req.user.userId;
```

This allows your controllers to utilize the authenticated user's userId for various operations, such as fetching user-specific data, authorizing actions, etc.

The authenticateUser middleware verifies the JWT token and extracts the userId.
It saves the userId to req.user, making it accessible in any controller or middleware that runs after authenticateUser.
Controllers can then retrieve the userId from req.user to perform operations related to the authenticated user.
This pattern is a common and effective way to handle authentication and user identity within an Express.js application.

-> make sure we only get jobs belonging to specific user when running job routes

refactor getAllJobs, createJob to incorporate id from req

```JavaScript

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

```

17/08/2024

- only in dev env
- a must since cookies are sent back to the same server
- need to put frontend and backend on the same server during development stage

- using 5100 for backend -> configure vite for same server to avoid CORS issues


```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5100/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```





This code configures a proxy rule for the development server, specifically for requests that start with /api. Let's go through each property:

'/api': This is the path to match. If a request is made to the development server with a path that starts with /api, the proxy rule will be applied.
target: 'http://localhost:5100/api': This specifies the target URL where the requests will be redirected. In this case, any request that matches the /api path will be forwarded to http://localhost:5100/api.

changeOrigin: true: When set to true, this property changes the origin of the request to match the target URL. This can be useful when working with CORS (Cross-Origin Resource Sharing) restrictions.

rewrite: (path) => path.replace(/^\/api/, ''): This property allows you to modify the path of the request before it is forwarded to the target. In this case, the rewrite function uses a regular expression (/^\/api/) to remove the /api prefix from the path. For example, if a request is made to /api/users, the rewritten path will be /users.

To summarize, these lines of code configure a proxy rule for requests starting with /api on the development server. The requests will be redirected to http://localhost:5100/api, with the /api prefix removed from the path.


The concurrently npm package is a utility that allows you to run multiple commands concurrently in the same terminal window. It provides a convenient way to execute multiple tasks or processes simultaneously.

By default, when a command fails, concurrently continues running the remaining commands. However, when --kill-others-on-fail is specified, if any of the commands fail, concurrently will immediately terminate all the other running commands.



24/08/2024

cookie visible in dev tools after login

<img src='./client/src/assets/images/screenshots/cookie_browser_dev_tools.png'>

28/08/2024

create mock data using mockaroo (https://www.mockaroo.com/)
download json file


06/02/2025

stats page -> process stats data using the MongoDB aggregation pipeline (data cleaning, sorting, grouping i.e. a way to process data inside MongoDB)
docs: https://www.mongodb.com/docs/manual/core/aggregation-pipeline/

```JavaScript

export const showStats = async (req, res) => {
  // MongoDB aggregation pipeline -> data cleaning, sorting, grouping i.e. a way to process data inside MongoDB
  // docs: https://www.mongodb.com/docs/manual/core/aggregation-pipeline/

  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  /*  -> output:
    [{ _id: 'interview', count: 37 },
     { _id: 'declined', count: 33 },
     { _id: 'pending', count: 30 }]

     -> need to turn this array into an object
  */

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  // console.log(stats);

  /*  -> output:
      { interview: 36, pending: 29, declined: 35 }
  */

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } }, // most recent ones should come first
    { $limit: 6 }, // limit to 6 months
  ]);

  // console.log(monthlyApplications);

  /*  -> output:

    [{ _id: { year: 2025, month: 3 }, count: 6 },
    { _id: { year: 2025, month: 2 }, count: 22 },
    { _id: { year: 2025, month: 1 }, count: 21 },
    { _id: { year: 2024, month: 12 }, count: 14 },
    { _id: { year: 2024, month: 11 }, count: 23 },
    { _id: { year: 2024, month: 10 }, count: 14 }]

  */

  monthlyApplications = monthlyApplications
    .map((application) => {
      const {
        _id: { year, month },
        count,
      } = application;

      const date = day()
        .month(month - 1) // dayjs starts at 0 but for mongodb january=1
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();
  // earlier sorting selected 6 most recent months (i.e. reverse-chronological order)
  // now: chronological order

  console.log(monthlyApplications);
  /*  -> output:
      [
        { date: 'Oct 24', count: 14 },
        { date: 'Nov 24', count: 23 },
        { date: 'Dec 24', count: 14 },
        { date: 'Jan 25', count: 21 },
        { date: 'Feb 25', count: 22 },
        { date: 'Mar 25', count: 6 },
      ];
  */

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

```
06/02/2025

barchart + areachart for stats page using recharts library


07/02/2025

look for query params in getAllJobs function to filter jobs based on position and company

```JavaScript
export const getAllJobs = async (req, res) => {
  console.log(req.query);

  // extract Search Query e.g. ?search=developer
  const { search } = req.query; // if search is not provided -> undefined

  // construct MongoDB Query Object
  const queryObj = {
    createdBy: req.user.userId, // filters jobs based on user ID so users only see jobs they created
  };

  // apply search filtering
  if (search) {
    queryObj.$or = [
      // $or -> ensures jobs are retrieved if either condition matches
      // find jobs where the position contains the search term, $options: 'i' makes the search case-insensitive
      { position: { $regex: search, $options: 'i' } },
      // find jobs where the company contains the search term, $options: 'i' makes the search case-insensitive
      { company: { $regex: search, $options: 'i' } },
    ];
  }

  const jobs = await Job.find(queryObj);
  res.status(StatusCodes.OK).json({ jobs });
};
```

08/02/2025

update jobController | use query params to sort jobs

update jobController | use query params to filter jobs by jobType and jobStatus

pagination

```JavaScript
export const getAllJobs = async (req, res) => {
  console.log(req.query);

  // extract Search Query e.g. ?search=developer
  const { search, jobStatus, jobType, sort } = req.query; // if search is not provided -> undefined

  // construct MongoDB Query Object
  const queryObj = {
    createdBy: req.user.userId, // filters jobs based on user ID so users only see jobs they created
  };

  // apply search filtering
  if (search) {
    queryObj.$or = [
      // $or -> ensures jobs are retrieved if either condition matches
      // find jobs where the position contains the search term, $options: 'i' makes the search case-insensitive
      { position: { $regex: search, $options: 'i' } },
      // find jobs where the company contains the search term, $options: 'i' makes the search case-insensitive
      { company: { $regex: search, $options: 'i' } },
    ];
  }

  if (jobStatus && jobStatus !== 'all') {
    queryObj.jobStatus = jobStatus;
  }

  if (jobType && jobType !== 'all') {
    queryObj.jobType = jobType;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'position',
    'z-a': '-position',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // pagination
  const page = Number(req.query.page) || 1; // by default look for first page
  const limit = Number(req.query.limit) || 10; // 10 jobs per page
  const skip = (page - 1) * limit; // e.g. when seeing second page, skip jobs from first page

  const jobs = await Job.find(queryObj).sort(sortKey).skip(skip).limit(limit);
  const totalJobs = await Job.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalJobs / limit); // always round up, page number needs to be integer

  res
    .status(StatusCodes.OK)
    .json({ totalJobs, numOfPages, currentPage: page, jobs });
};
```


09/02/2025

update search form to submit form programmatically (controlled inputs) - setup default values from the context - remove SubmitBtn - add onChange to FormRow, FormRowSelect and all inputs
use JS debounce to create delay when user types into search box before submitting the form to avoid unnecessary processing

```js
const debounce = (onChange) => {
  let timeout;
  return (e) => {
    const form = e.currentTarget.form;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      onChange(form);
    }, 2000);
  };
};
<FormRow
  type='search'
  name='search'
  defaultValue={search}
  onChange={debounce((form) => {
    submit(form);
  })}
/>;
```


10/02/2025
deployment on render

encountered issues due to await outside of async function

add new script to package.json

```js
 "scripts": {
    "setup-production-app": "npm i && cd client && npm i && npm run build",
  },
```

update server.js

server.js

```js
app.use(express.static(path.resolve(__dirname, './client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});
```

#### Test Locally

- remove client/dist and client/node_modules
- remove node_modules and package-lock.json (optional)
- run "npm run setup-production-app", followed by "node server"

#### Test in Production

- change build command on render

```sh
npm run setup-production-app

```



11/02/2025

upload image as buffer using datauri

disk space on render not available with the free version



30/05/2025
global loading
create loading component for loading spinner

```CSS
.loading {
  width: 6rem;
  height: 6rem;
  border: 5px solid var(--grey-400);
  border-radius: 50%;
  border-top-color: var(--primary-500);
  animation: spinner 0.6s linear infinite;
}

```

```JSX
  <div className='dashboard-page'>
      { isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
  </div>
```

31/05/2025
- react query
- axios interceptors


```JSX
 const [isAuthError, setIsAuthError] = useState(false);
   customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);



Package: helmet
Description: helmet is a security package for Express.js applications that helps protect them by setting various HTTP headers to enhance security, prevent common web vulnerabilities, and improve overall application security posture.
Need: The package is needed to safeguard web applications from potential security threats, such as cross-site scripting (XSS) attacks, clickjacking, and other security exploits.

Package: express-mongo-sanitize
Description: express-mongo-sanitize is a middleware for Express.js that sanitizes user-supplied data coming from request parameters, body, and query strings to prevent potential NoSQL injection attacks on MongoDB databases.
Need: The package addresses the need to protect MongoDB databases from malicious attempts to manipulate data and helps ensure the integrity of data storage and retrieval.

Package: express-rate-limit
Description: express-rate-limit is an Express.js middleware that helps control and limit the rate of incoming requests from a specific IP address or a set of IP addresses to protect the server from abuse, brute-force attacks, and potential denial-of-service (DoS) attacks.
Need: This package is necessary to manage and regulate the number of requests made to the server within a given time frame, preventing excessive usage and improving the overall stability and performance of the application.


```js
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

app.use(helmet());
app.use(mongoSanitize());
```


```js
import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message: { msg: 'IP rate limit exceeded, retry in 15 minutes.' },
});
router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
```

```


- security packages
helmet, express-mongo-sanatize, express-rate-limit

-->
