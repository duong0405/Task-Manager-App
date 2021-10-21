# Task Manager API App

## Description

It is a simple backend project for making REST API with NodeJS.
Task manager complete with user accounts and authentication.
Using Postman to simulate the request.

## Feature

-   Sending Emails
-   Authentication and Security
-   Filtering, Pagination and Sorting
-   Avatar upload

## Structure

```
.
└── src
    ├── index.js
    ├── routers
    │   ├── task.js
    │   └── user.js
    ├── models
    │   ├── task.js
    │   └── user.js
    ├── middleware
    │   └── auth.js
    ├── email
    │   └── account.js
    └── db
        └── mongoose.js
```

## API

#### /users

-   `POST` : Signup new user

#### /users/me

-   `GET` : Get user profile
-   `PATCH` : Update user profile
-   `DELETE` : Delete user profile

#### /users/me/avatar

-   `POST` : Upload user avatar
-   `DELETE` : Delete user avatar

#### /users/login

-   `POST` : Login user

#### /users/logout

-   `POST` : Logout user

#### /users/logoutAll

-   `POST` : Logout all sessions

#### /tasks

-   `POST` : Create a task
-   `GET` : Get all tasks created by user

#### /tasks/:id

-   `PATCH` : Update a task by id
-   `DELETE` : Delete a task by id
