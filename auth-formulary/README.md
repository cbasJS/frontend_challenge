# Auth formulary APP

Esta es una pequeña muestra de desarrollo de un flujo de login mediante una aplicacion web.

La aplicacion fue totalmente desarrollada mienta el MERN Stack. El proposito de este desarrollo es para demostrar mi amplio conocimiento en el desarrollo web (frontend y backend).

## Where is deployed?

This client developed with React was deployed to an [AWS S3](https://aws.amazon.com/es/s3/) bucket. You can do live tests through the following link:

`http://finphera.auth-formulary.s3-website-us-west-2.amazonaws.com/`

## Description

You can find more information about the backend and frontend project in their respective folders.

## Screen Flow

1. ### Registration Screen

- Description: Allows users to create a new account by providing a username, email, and password.
- Flow:
  1. The user completes the registration form.
  2. The user submits the form.
  3. If the registration is successful, the user is redirected to the login screen.

2. ### Login Screen

- Description: Allows users to log in with their email and password.
- Flow:
  1. The user enters their login credentials.
  2. The user submits the form.
  3. If the login is successful, the user is redirected to the home screen.

3. ### Home Screen

- Description: A protected page that can only be accessed by authenticated users.
- Flow:

  1. The authenticated user can view their personal information and access additional functionality.

  2. If the user is not authenticated, they are redirected to the login screen.

![alt text](image.png)
