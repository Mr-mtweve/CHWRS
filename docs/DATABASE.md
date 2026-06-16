# CHWRS Database Documentation

## Database Schema

### Tables Overview

#### 1. Users Table
Stores user account information.

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  role_id INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(id)
);
```

#### 2. Roles Table
Defines user roles: Admin, Supervisor, CHW.

```sql
CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 3. Permissions Table
Defines permissions for each role.

```sql
CREATE TABLE permissions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  role_id INT,
  permission_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(id)
);
```

#### 4. CHW Profiles Table
Stores community health worker specific information.

```sql
CREATE TABLE chw_profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNIQUE,
  ward_id INT,
  facility_id INT,
  gender VARCHAR(20),
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (ward_id) REFERENCES wards(id),
  FOREIGN KEY (facility_id) REFERENCES health_facilities(id)
);
```

#### 5. Reports Table
Stores submitted health reports.

```sql
CREATE TABLE reports (
  id INT PRIMARY KEY AUTO_INCREMENT,
  report_type ENUM('daily', 'weekly', 'monthly'),
  chw_id INT,
  facility_id INT,
  status ENUM('draft', 'pending', 'approved', 'rejected') DEFAULT 'draft',
  submitted_by INT,
  approved_by INT,
  rejection_reason TEXT,
  submitted_at TIMESTAMP,
  approved_at TIMESTAMP,
  rejected_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (chw_id) REFERENCES users(id),
  FOREIGN KEY (facility_id) REFERENCES health_facilities(id),
  FOREIGN KEY (submitted_by) REFERENCES users(id),
  FOREIGN KEY (approved_by) REFERENCES users(id)
);
```

#### 6. Report Data Table
Stores detailed health indicators data.

```sql
CREATE TABLE report_data (
  id INT PRIMARY KEY AUTO_INCREMENT,
  report_id INT,
  indicator_id INT,
  value INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (report_id) REFERENCES reports(id),
  FOREIGN KEY (indicator_id) REFERENCES indicators(id)
);
```

#### 7. Health Indicators Table
Defines health indicators to track.

```sql
CREATE TABLE indicators (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  category VARCHAR(50),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 8. Health Facilities Table
Stores health facility information.

```sql
CREATE TABLE health_facilities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50),
  location VARCHAR(255),
  municipality_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (municipality_id) REFERENCES municipalities(id)
);
```

#### 9. Wards Table
Stores ward information.

```sql
CREATE TABLE wards (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  facility_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (facility_id) REFERENCES health_facilities(id)
);
```

#### 10. Municipalities Table
Stores municipal area information.

```sql
CREATE TABLE municipalities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  region VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 11. Notifications Table
Stores system notifications.

```sql
CREATE TABLE notifications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  message TEXT,
  type VARCHAR(50),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### 12. Audit Logs Table
Tracks all system activities.

```sql
CREATE TABLE audit_logs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  action VARCHAR(100),
  entity_type VARCHAR(50),
  entity_id INT,
  changes JSON,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Indexes

```sql
-- Performance indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role_id ON users(role_id);
CREATE INDEX idx_reports_chw_id ON reports(chw_id);
CREATE INDEX idx_reports_status ON reports(status);
CREATE INDEX idx_reports_created_at ON reports(created_at);
CREATE INDEX idx_chw_profiles_facility ON chw_profiles(facility_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
```

## Sample Data

### Insert Roles
```sql
INSERT INTO roles (name, description) VALUES
('admin', 'System Administrator'),
('supervisor', 'Health Supervisor'),
('chw', 'Community Health Worker');
```

### Insert Health Indicators
```sql
INSERT INTO indicators (name, category, description) VALUES
('Vaccinations', 'immunization', 'Number of vaccinations'),
('Maternal Visits', 'maternal', 'Antenatal care visits'),
('ANC Visits', 'maternal', 'Antenatal clinic visits'),
('Malaria Cases', 'disease', 'Confirmed malaria cases'),
('HIV/TB Cases', 'disease', 'HIV and TB cases'),
('Child Health', 'child', 'Child health indicators');
```

## Entity Relationship Diagram

```
users (1) -------- (M) reports
  |
  ├-- role
  ├-- chw_profiles
  └-- audit_logs

health_facilities (1) -------- (M) wards
                     |
                     ├-- chw_profiles
                     └-- reports

reports (1) -------- (M) report_data
    |
    └-- indicators

municipalities (1) -------- (M) health_facilities
```
