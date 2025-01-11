This endpoint allows users to register by providing their first name, last name, email, and password.

## Endpoint

```
POST /user/register
```

## Description

- Users can register by providing their first name, last name, email, and password.
- The first name must be at least 3 characters long.
- The email must be a valid email format.
- The password must be at least 6 characters long.

## Request Body

- `firstname` (required): User's first name (at least 3 characters long).
- `lastname` (optional): User's last name.
- `email` (required): User's email address (must be a valid email format).
- `password` (required): User's password (at least 6 characters long).

## Response

- Status Code: 201 (Created)
- Response Body:
  - `token`: JWT token for authentication.
  - `user`: User object containing user details.

#### Example Reaponse:

user (object) :
-'fullname' (object).
-firstname' (string): User's first name (minimum 3 characters). - 'lastname' (string): User's last name (minimum 3 characters).

- 'email' (string): User's email address (must be a valid email).
-'password' (string): User's password (minimum 6 characters).
-`token' (String): JWT Token









# User Registration Endpoint Documentation

## Endpoint: `/user/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Required Data:

The request body must contain the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string (optional).
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

#### Example Reaponse:

user (object) :
-'fullname' (object).
-firstname' (string): User's first name (minimum 3 characters). - 'lastname' (string): User's last name (minimum 3 characters).

- 'email' (string): User's email address (must be a valid email).
-'password' (string): User's password (minimum 6 characters).
-`token' (String): JWT Token
