# User Registration Endpoint

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



