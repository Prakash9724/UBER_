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

#### Example Request Body:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}



# User Profile Endpoint Documentation

## Endpoint: `/user/profile`

### Method: GET

### Description:
This endpoint retrieves the user's profile information and returns the user's details in the response body.

### Required Data:
No request body is required for this endpoint.

### Response:

- Status Code: 200 (OK)
- Response Body:
  - `user`: User object containing user details.

#### Example Response:
```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

# User Logout Endpoint Documentation

## Endpoint: `/user/logout`

### Method: GET

### Description:
This endpoint logs out the user by clearing the authentication token from the cookies and adding it to the blacklist.

### Required Data:
No request body is required for this endpoint.

### Response:

- Status Code: 200 (OK)
- Response Body:
  - `message`: A success message indicating that the user has been logged out.

#### Example Response:
```json
{
  "message": "Logged out"
}






# Captain Registration Endpoint Documentation

## Endpoint: `/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns an authentication token along with the captain details.


### Required Data:

The request body must contain the following fields:

- `fullname`: An object containing the captain's name details:

  - `firstname` (required): Captain's first name (minimum 3 characters long).
  - `lastname` (optional): Captain's last name.
  
- `email` (required): Captain's email address (must be a valid email format).

- `password` (required): Captain's password (minimum 6 characters long).

- `vehicle`: An object containing vehicle details:

  - `color` (required): Vehicle color (minimum 3 characters long).
  
  - `plate` (required): Vehicle plate number (minimum 6 characters long, must be unique).
  
  - `capacity` (required): Vehicle capacity (must be at least 1).
  
  - `vehicleType` (required): Type of vehicle (options: "car", "motorcycle", "auto").
  
### Request Body Example:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

### Response:

- **Status Code**: 201 (Created)

- **Response Body**:

  - `token`: JWT token for authentication.
  
  - `user`: Captain object containing captain details.
  
#### Example Response:
```json
{
  "token": "your_jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Responses:

- **400 Bad Request**: If required fields are missing or validation fails.

  - **Response Body**:
  ```json
  {
    "error": "All fields are required"
  }
  ```
