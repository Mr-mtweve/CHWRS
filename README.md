# Community Health Workers Reporting System (CHWRS)

A modern, secure, and scalable web-based application designed to digitize community healthcare reporting processes and improve health data collection, monitoring, and decision-making within municipal and community healthcare systems.

## 📋 Table of Contents

- [Features](#features)
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Security Features](#security-features)
- [User Roles & Permissions](#user-roles--permissions)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Modules

1. **Authentication & Authorization**
   - Secure user login/logout
   - Password reset functionality
   - Session management
   - Multi-role authentication (Admin, Supervisor, CHW)
   - Role-based access control (RBAC)
   - JWT token-based authentication

2. **Dashboard Analytics**
   - Real-time health metrics
   - Disease outbreak alerts
   - Maternal health statistics
   - Vaccination tracking
   - Interactive charts and visualizations
   - Performance indicators

3. **Report Submission**
   - Daily, weekly, and monthly reports
   - Draft saving functionality
   - Auto-save capability
   - Mobile-friendly forms
   - Offline-ready forms
   - Real-time validation

4. **Report Management**
   - View, search, and filter reports
   - Approve/reject functionality
   - Add comments and feedback
   - Track report status
   - Export (PDF, Excel, CSV)

5. **CHW Management**
   - Add/edit/delete community health workers
   - Assign wards and facilities
   - Monitor CHW activity
   - Activate/deactivate accounts

6. **Facilities & Wards Management**
   - Manage health facilities
   - Organize wards and municipalities
   - Assign CHWs to locations

7. **Notifications**
   - In-app notifications
   - Email alerts
   - Report reminders
   - Submission confirmations

8. **Analytics & Monitoring**
   - Disease trend analysis
   - Outbreak monitoring
   - Performance metrics
   - Comparative analytics
   - Downloadable reports

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CHWRS Architecture                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │           Frontend (React.js + Tailwind CSS)           │ │
│  │  - Dashboard  - Reports  - User Management - Analytics │ │
│  └────────────────┬─────────────────────────────────────┘ │
│                   │                                        │
│                   �� (REST APIs, JWT Auth)                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │     Backend API (Node.js + Express.js)                │ │
│  │  - Authentication  - Report Management                 │
│  │  - User Management  - Analytics Engine                 │
│  │  - Notifications    - Data Validation                  │
│  └────────────────┬─────────────────────────────────────┘ │
│                   │                                        │
│                   ↓ (SQL Queries)                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │             Database (MySQL)                           │ │
│  │  - Normalized Relational Schema                        │ │
│  │  - Audit Logs & Activity Tracking                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 💻 Technology Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Styling
- **Chart.js / ApexCharts** - Data visualization
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service

### Database
- **MySQL 8.0+** - Relational database
- **Sequelize** - ORM

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container setup
- **Git** - Version control

## 🚀 Installation

### Prerequisites

- Node.js 16+
- MySQL 8.0+
- npm or yarn
- Git

### Clone Repository

```bash
git clone https://github.com/Mr-mtweve/CHWRS.git
cd CHWRS
```

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run migrate
npm run seed
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with API endpoint
npm start
```

## ⚙️ Configuration

### Environment Variables (.env)

#### Backend

```env
# Server
NODE_ENV=development
PORT=5000
API_URL=http://localhost:5000

# Database
DB_HOST=localhost
DB_PORT=3306
DB_NAME=chwrs_db
DB_USER=root
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_password

# Session
SESSION_SECRET=your_session_secret
```

#### Frontend

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## 📊 Database Setup

### Create Database

```sql
CREATE DATABASE chwrs_db;
USE chwrs_db;
```

### Run Migrations

```bash
cd backend
npm run migrate
npm run seed  # Load sample data
```

### Database Tables

- `users` - User accounts
- `roles` - User roles (Admin, Supervisor, CHW)
- `permissions` - Role permissions
- `chw_profiles` - CHW information
- `reports` - Health reports
- `report_data` - Report details
- `indicators` - Health indicators
- `health_facilities` - Facility information
- `wards` - Ward information
- `municipalities` - Municipal areas
- `notifications` - System notifications
- `audit_logs` - Activity tracking

## 🏃 Running the Application

### Development Mode

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm start

# Terminal 3: Database
mysql -u root -p
```

### Production Mode

```bash
# Backend
npm run build
npm start

# Frontend
npm run build
# Serve with nginx or your preferred server
```

### Using Docker

```bash
docker-compose up -d
```

Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Documentation: http://localhost:5000/api-docs

## 📚 API Documentation

### Authentication Endpoints

```
POST   /api/auth/register       - Register new user
POST   /api/auth/login          - Login user
POST   /api/auth/logout         - Logout user
POST   /api/auth/refresh-token  - Refresh JWT token
POST   /api/auth/forgot-password - Request password reset
POST   /api/auth/reset-password - Reset password
```

### Report Endpoints

```
GET    /api/reports             - Get all reports
POST   /api/reports             - Submit new report
GET    /api/reports/:id         - Get report details
PUT    /api/reports/:id         - Update report
DELETE /api/reports/:id         - Delete report
GET    /api/reports/status/pending - Get pending reports
POST   /api/reports/:id/approve - Approve report
POST   /api/reports/:id/reject  - Reject report
```

### User Management

```
GET    /api/users               - List all users
POST   /api/users               - Create user
GET    /api/users/:id           - Get user details
PUT    /api/users/:id           - Update user
DELETE /api/users/:id           - Delete user
```

### Dashboard

```
GET    /api/dashboard/summary   - Get dashboard summary
GET    /api/dashboard/analytics - Get analytics data
GET    /api/dashboard/charts    - Get chart data
```

## 📁 Project Structure

```
CHWRS/
├── backend/
│   ├── src/
│   │   ├── config/              - Configuration files
│   │   ├── controllers/         - Request handlers
│   │   ├── models/              - Database models
│   │   ├── routes/              - API routes
│   │   ├── middleware/          - Express middleware
│   │   ├── services/            - Business logic
│   │   ├── utils/               - Utility functions
│   │   ├── validators/          - Input validators
│   │   └── app.js               - Express app setup
│   ├── migrations/              - Database migrations
│   ├── seeders/                 - Sample data
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/          - React components
│   │   ├── pages/               - Page components
│   │   ├── services/            - API services
│   │   ├── context/             - React context
│   │   ├── hooks/               - Custom hooks
│   │   ├── styles/              - CSS/Tailwind
│   │   ├── utils/               - Utility functions
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── docs/
│   ├── DATABASE.md              - Database documentation
│   ├── API.md                   - API documentation
│   ├── ERD.md                   - Entity Relationship Diagram
│   ├── ARCHITECTURE.md          - System architecture
│   └── INSTALLATION.md          - Setup guide
│
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

## 🔒 Security Features

- **Password Hashing**: Bcrypt with salt rounds
- **JWT Authentication**: Secure token-based auth
- **CSRF Protection**: Token-based CSRF prevention
- **Input Validation**: Server-side validation
- **SQL Injection Prevention**: Parameterized queries
- **XSS Prevention**: Input sanitization
- **Role-Based Access Control**: Fine-grained permissions
- **Audit Logging**: Complete activity tracking
- **Secure Sessions**: HTTPOnly cookies
- **Rate Limiting**: API endpoint protection

## 👥 User Roles & Permissions

### Admin
- Full system access
- Manage users
- Manage facilities
- View analytics
- Manage reports
- System configuration

### Supervisor
- View reports
- Approve/reject reports
- Monitor CHWs
- Generate reports
- View analytics

### CHW (Community Health Worker)
- Submit reports
- Edit personal reports
- View personal reports
- Receive notifications
- View dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 📧 Support

For support, email: support@chwrs.com or open an issue on GitHub.

---

**CHWRS** - Improving Community Healthcare Through Digital Reporting