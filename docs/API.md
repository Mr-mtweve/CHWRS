# CHWRS API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All endpoints (except login and register) require JWT token in the Authorization header:
```
Authorization: Bearer {token}
```

## Endpoints

### Authentication

#### Register
```
POST /auth/register
Body: {
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login
```
POST /auth/login
Body: {
  "email": "user@example.com",
  "password": "password123"
}
Response: {
  "success": true,
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

#### Logout
```
POST /auth/logout
```

### Reports

#### Get All Reports
```
GET /reports?status=pending&page=1&limit=10
```

#### Create Report
```
POST /reports
Body: {
  "reportType": "daily",
  "data": { ... }
}
```

#### Get Report by ID
```
GET /reports/:id
```

#### Update Report
```
PUT /reports/:id
Body: { ... }
```

#### Delete Report
```
DELETE /reports/:id
```

#### Approve Report
```
POST /reports/:id/approve
```

#### Reject Report
```
POST /reports/:id/reject
Body: {
  "reason": "Data incomplete"
}
```

### Users

#### Get All Users
```
GET /users
```

#### Create User
```
POST /users
Body: {
  "email": "user@example.com",
  "firstName": "John",
  "roleId": 3
}
```

#### Get User Profile
```
GET /users/profile/me
```

#### Update Profile
```
PUT /users/profile/me
Body: { ... }
```

### Dashboard

#### Get Dashboard Summary
```
GET /dashboard/summary
Response: {
  "success": true,
  "data": {
    "totalCHWs": 45,
    "totalReports": 320,
    "pendingReports": 12,
    "approvedReports": 280
  }
}
```

#### Get Analytics
```
GET /dashboard/analytics
```

#### Get Chart Data
```
GET /dashboard/charts
```

### CHWs

#### Get All CHWs
```
GET /chws
```

#### Create CHW
```
POST /chws
Body: {
  "email": "chw@example.com",
  "firstName": "Jane",
  "phone": "+1234567890",
  "wardId": 1,
  "facilityId": 1
}
```

### Facilities

#### Get All Facilities
```
GET /facilities
```

#### Create Facility
```
POST /facilities
Body: {
  "name": "Health Center",
  "type": "clinic",
  "location": "Downtown",
  "municipalityId": 1
}
```

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error
