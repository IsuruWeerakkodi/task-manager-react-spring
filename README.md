# Task Manager

Task manager is an app developed as a web application in order to manage your day-today tasks.
App is developed using,
#### Frontend: React + Vite + TypeScript
#### Backend: Java + Spring
#### Authentication: Firebase Authentication with Google Sign-In

## Table of Contents

- [Overview of technologies used](#overview-of-technologies-used)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Copyright](#copyright)

## Overview of technologies used

### Frontend:

- React: JavaScript library for building user interfaces.
- Vite: JavaScript bundler for building modern web applications.
- Firebase: Google's platform for authentication, database, and other functionalities.
- JavaScript: Programming language for frontend development.
- firebase.json: Configuration file for Firebase integration.
- 404.html: Custom error page for non-existent routes.
- node_modules: Directory for frontend dependencies.
- .eslintrc.cjs: ESLint config file for code quality checks.
- tsconfig.json & tsconfig.node.json: TypeScript configuration files for type safety.
- vite.config.ts: Vite configuration file for bundling and development settings.


### Backend:

- Spring Boot: Java framework for building web applications.
- RESTful API: Architectural style for web APIs.
- CorsFilter: Spring filter for handling Cross-Origin Resource Sharing.
- Java: Programming language for backend development.
- TaskTO: Data transfer object class for transferring data between backend and frontend.
- WebAppConfig & WebAppInitializer: Spring classes for configuring the web application.
- resources/webapp/WEB-INF/web.xml: XML file for configuring the web application in a traditional Servlet container.

### Dependencies:

- jackson-databind: Popular library for JSON serialization and deserialization (version 2.16.0)
- javax.annotation-api: JSR-305 annotations for dependency injection (provided scope, meaning it's provided by the runtime)
- hibernate-validator: Validation framework for Java beans (version 6.2.5.Final)
- HikariCP: Popular connection pool for database access (version 5.1.0)
- mysql-connector-j: MySQL database driver (version 8.2.0)
- spring-webmvc: Core Spring framework for web applications (version 5.3.30)
- javax.servlet-api: Servlet API used by Spring MVC (provided scope)
- lombok: Simplifies getter/setter, constructor, and other boilerplate code 

## Installation


```bash
# Clone the repository
git clone https://github.com/IsuruWeerakkodi/task-manager-react-spring.git

# Navigate to the frontend directory
cd front-end-react

# Install frontend dependencies
npm install
npm run dev

# Navigate to the backend directory
cd ../back-end-spring

# Install backend dependencies
# setup mysql database (you will need to name your database 
  as same in the project or rename the database name as per your data base)
# Setup artifacts
# setup and run tomcat local server (You can select any web application server)

```

## Contributing
Before you start contributing, please read the following:

- Fork the repository: Create your own fork of the [project name] repository on GitHub. This allows you to work on your own copy of the code without affecting the main project.
- Set up your development environment: Install the necessary tools and dependencies for working on the project.
- Review the coding conventions: Follow the project's coding conventions to ensure consistency and maintainability of the codebase.

#### Submitting a Pull Request
Once you have made your changes, you can submit a pull request to the main repository. Please follow these guidelines:

- Create a descriptive pull request title and message: Briefly explain what your pull request does and why it is important.
- Test your changes: Ensure that your changes are properly tested and do not break existing functionality.
- Follow the pull request template: If there is a pull request template, please use it to fill out your pull request information.

## License

This project is licensed under the MIT License - [click here](LICENSE.txt) for more details.

## Copyright
© 2023 Isuru Weerakkodi - All rights reserved.
