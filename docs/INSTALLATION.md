# CHWRS Installation Guide

## Prerequisites

- Node.js 16+
- MySQL 8.0+
- Git
- npm or yarn

## Step 1: Clone Repository

```bash
git clone https://github.com/Mr-mtweve/CHWRS.git
cd CHWRS
```

## Step 2: Backend Setup

### Install Dependencies
```bash
cd backend
npm install
```

### Configure Environment
```bash
cp .env.example .env
```

Edit `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=chwrs_db
DB_USER=root
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```

### Create Database
```bash
mysql -u root -p
CREATE DATABASE chwrs_db;
EXIT;
```

### Run Migrations
```bash
npm run migrate
```

### Seed Sample Data
```bash
npm run seed
```

### Start Backend
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## Step 3: Frontend Setup

### Install Dependencies
```bash
cd frontend
npm install
```

### Configure Environment
```bash
cp .env.example .env
```

Edit `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### Start Frontend
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## Step 4: Using Docker (Optional)

### Build and Run
```bash
docker-compose up -d
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MySQL: localhost:3306
- PhpMyAdmin: http://localhost:8080

### Stop Services
```bash
docker-compose down
```

## Default Credentials

### Admin Account
- Email: admin@chwrs.com
- Password: admin123

### Supervisor Account
- Email: supervisor@chwrs.com
- Password: supervisor123

### CHW Account
- Email: chw@chwrs.com
- Password: chw123

## Troubleshooting

### Port Already in Use
```bash
# Change PORT in .env
PORT=5001
```

### Database Connection Error
```bash
# Check MySQL is running
mysql -u root -p -e "SELECT 1"
```

### CORS Issues
- Update `FRONTEND_URL` in backend `.env`
- Update `REACT_APP_API_URL` in frontend `.env`

## Next Steps

1. Review API documentation in `docs/API.md`
2. Check database schema in `docs/DATABASE.md`
3. Follow security best practices
4. Deploy to production environment
