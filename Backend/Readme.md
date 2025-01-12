```markdown
# 📖 API Documentation

This repository provides a detailed description of the API endpoints available in the project. The documentation includes endpoints for user registration, user management, and captain-specific routes.

---

## 🚀 User Registration Endpoint

### Endpoint: `/user/register`

- **Method**: `POST`
- **Description**:  
  This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### ✅ Request Body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```
- `fullname` (object):
  - `firstname` (required): User's first name (minimum 3 characters).
  - `lastname` (optional): User's last name.
- `email` (required): User's email address (must be a valid email format).
- `password` (required): User's password (minimum 6 characters).

### 🔄 Response:
- **Status Code**: `201 Created`
- **Response Body**:
```json
{
  "token": "your_jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

## 👤 User Profile Endpoint

### Endpoint: `/user/profile`

- **Method**: `GET`
- **Description**:  
  This endpoint retrieves the user's profile information and returns the user's details in the response body.

### 🔄 Response:
- **Status Code**: `200 OK`
- **Response Body**:
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

---

## 🔓 User Logout Endpoint

### Endpoint: `/user/logout`

- **Method**: `GET`
- **Description**:  
  This endpoint logs out the user by clearing the authentication token from the cookies and adding it to the blacklist.

### 🔄 Response:
- **Status Code**: `200 OK`
- **Response Body**:
```json
{
  "message": "Logged out"
}
```

---

## 🛳️ Captain Routes Documentation

### 1. Captain Registration Endpoint

- **Endpoint**: `/register`
- **Method**: `POST`
- **Description**:  
  This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns an authentication token along with the captain details.

### ✅ Required Data:
The request body must contain the following fields:
- `fullname` (object): Contains the captain's name details:
  - `firstname` (required): Captain's first name (minimum 3 characters).
  - `lastname` (optional): Captain's last name.
- `email` (required): Captain's email address (must be a valid email format).
- `password` (required): Captain's password (minimum 6 characters).
- `vehicle` (object): Contains vehicle details:
  - `color` (required): Vehicle color (minimum 3 characters).
  - `plate` (required): Vehicle plate number (minimum 6 characters, must be unique).
  - `capacity` (required): Vehicle capacity (must be at least 1).
  - `vehicleType` (required): Type of vehicle (options: `"car"`, `"motorcycle"`, `"auto"`).

### 📝 Request Body Example:
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

### 🔄 Response:
- **Status Code**: `201 Created`
- **Response Body**:
```json
{
  "token": "your_jwt_token_here",
  "captain": {
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

### ❌ Error Responses:
- **400 Bad Request**: If required fields are missing or validation fails.
```json
{
  "error": "All fields are required"
}
```

---

### 2. Captain Login Endpoint

- **Endpoint**: `/login`
- **Method**: `POST`
- **Description**:  
  This endpoint is used to log in an existing captain. It validates the input data, checks the credentials, and returns an authentication token along with the captain details.

### ✅ Required Data:
The request body must contain the following fields:
- `email` (required): Captain's email address (must be a valid email format).
- `password` (required): Captain's password (minimum 6 characters).

### 📝 Request Body Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### 🔄 Response:
- **Status Code**: `200 OK`
- **Response Body**:
```json
{
  "token": "your_jwt_token_here",
  "captain": {
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

### ❌ Error Responses:
- **400 Bad Request**: If required fields are missing or validation fails.
- **401 Unauthorized**: If the email or password is invalid.
```json
{
  "error": "Invalid email or password"
}
```

---

### 3. Captain Profile Endpoint

- **Endpoint**: `/profile`
- **Method**: `GET`
- **Description**:  
  This endpoint retrieves the logged-in captain's profile information and returns the captain's details in the response body.

### 🔄 Response:
- **Status Code**: `200 OK`
- **Response Body**:
```json
{
  "captain": {
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

---

### 4. Captain Logout Endpoint

- **Endpoint**: `/logout`
- **Method**: `GET`
- **Description**:  
  This endpoint logs out the captain by clearing the authentication token from the cookies and adding it to the blacklist.

### 🔄 Response:
- **Status Code**: `200 OK`
- **Response Body**:
```json
{
  "message": "Logged out"
}
```

---

### 📝 Notes:
- Ensure proper validation of all fields before sending the request.
- Use the JWT token returned in the registration or login response for authentication in subsequent requests.

---
