# Finsphera challange - auth formulary backend

This is a simple backend built under the [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). In this you can create new users and log in in the app client.

## Where is deployed?

This backend service is deployed on [Railway](https://railway.app/). You can do live tests through the following link:

`https://frontendchallenge-production.up.railway.app`

## Table of content

- [Description](#description)
- [Settings](#setting)
- [Setup](#setup)
- [How to build](#how-to-build)
- [Project structure](#project-structure)
- [Endpoints](#endpoints)
- [Technologies](#technologies)
- [Contribution](#contribution)
- [License](#License)

## Description

In this backend project you can create a user from the client and store their data in a MongoDB.

It also allows you to login through the web application.

The purpose of this service is to be able to demonstrate my server-side knowledge. As well as my skills in technologies that could be important in the business.

## Settings

- First of all you need to install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [MongoDB Compass](https://www.mongodb.com/products/tools/compass) in case you want to run the project locally
- Once the resources are installed you need to obtain your local access credentials for MongoDB

### Instructions for configuring environment variables:

```bash
# Create a .env file in the project root with the following variables
PORT=3000
PROD=false
MONGO_URL=<your-mongo-url>
MONGO_DB_NAME=finsphera-challange
MONGO_USER=<your-mongo-user>
MONGO_PASS=<your-mongo-pass>
PUBLIC_PATH=public
```

## Setup

```bash
# Clon the repository
git clone https://github.com/cbasJS/frontend_challenge.git

# Go to the folder of the backend service
cd auth-formulary/backend

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
npm start
```

## Project structure

Description of the project's file and folder structure.

```bash
FRONTEND_CHALLENGE/auth-formulary/backend/
├── src/
│   ├── config/
│   ├── data/
│   ├── domain/
│   ├── infrastructure/
│   ├── presentation/
│   └── app.ts
├── .env
├── .env.template
├── .gitignore
├── docker-compose.yml
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Endpoints

Lista de los endpoints disponibles con ejemplos de uso.

### -- Authentication --

- #### POST /api/sign-up

  - Description: Sign up of a new user.
  - Request body:

  ```bash
  {
    "mail": "my-mail@example.com",
    "userName": "my-username-example",
    "password": "my-password-example"
  }
  ```

  - Respuesta exitosa:

  ```bash
  {
    "status": "ok",
    "message": "El usuario se a creado correctamente",
    "data": null
  }
  ```

- #### GET /api/login
  - Description: Login of an user.
  - Request body:
  ```bash
  {
    "mail": "my-mail@example.com",
    "password": "my-password-example"
  }
  ```
  - Respuesta exitosa:
  ```bash
  {
    "status": "ok",
    "message": "Se ha iniciado sesión correctamente",
    "data": {
        "mail": "your-mail",
        "createdAt": "2024-05-28T17:23:04.629Z",
        "userName": "your-user",
        "token": "your-token"
    }
  }
  ```

## Technologies

List of technologies used in the project.

- [Node.js](https://nodejs.org/en)
- [Express](https://www.express.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Contribution

Instructions on how to contribute to the project.

1. Fork the project.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make the necessary changes and commit (git commit -m 'Add new functionality').
4. Push to the branch (git push origin feature/new-feature).
5. Open a Pull Request.

## License

This project is under the ISC License.
