# Finsphera challange - auth formulary frontend

This is the front end that is part of the challenge for creating the authentication form based on [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

The front end has a sign up and user login form.

## Where is deployed?

This client developed with React was deployed to an [AWS S3](https://aws.amazon.com/es/s3/) bucket. You can do live tests through the following link:

`http://finphera.auth-formulary.s3-website-us-west-2.amazonaws.com/`

## Table of content

- [Description](#description)
- [Settings](#setting)
- [Setup](#setup)
- [How to build](#how-to-build)
- [Project structure](#project-structure)
- [Technologies](#technologies)
- [Contribution](#contribution)
- [License](#License)

## Description

The purpose of this web application is to demonstrate my skills in client-side development using robust technologies.

As well as the management of form validations, management of API consumption and routes.

Clean Architecture and SOLID were also implemented for better organization and to be able to scale this application in the future.

## Settings

### Instructions for configuring environment variables:

```bash
# Create a .env file in the project root with the following variables
VITE_API_URL=https://frontendchallenge-production.up.railway.app
```

## Setup

```bash
# Clon the repository
git clone https://github.com/cbasJS/frontend_challenge.git

# Go to the folder of the backend service
cd auth-formulary/frontend

# Install the dependencies
npm install

# Run locally
npm run dev
```

## How to build

```bash
# Compile the project
npm run build

# Run the server
npm preview
```

## Project structure

Description of the project's file and folder structure.

```bash
FRONTEND_CHALLENGE/auth-formulary/frontend/
├── src/
│   ├── application/
│   ├── config/
│   ├── domain/
│   ├── infrastructure/
│   ├── presentation/
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .env.template
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Technologies

List of technologies used in the project.

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React](https://es.react.dev/)
- [React-Query](https://tanstack.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Contribution

Instructions on how to contribute to the project.

1. Fork the project.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make the necessary changes and commit (git commit -m 'Add new functionality').
4. Push to the branch (git push origin feature/new-feature).
5. Open a Pull Request.

## License

This project is under the ISC License.
