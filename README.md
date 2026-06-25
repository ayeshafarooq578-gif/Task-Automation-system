# 🚀 Task Automation System

A full-stack Task Automation System developed using the MERN Stack to automate intern task assignment, reminders, and progress tracking.

---

## 📌 Project Objective

The Task Automation System helps organizations assign tasks to interns, monitor their progress, and automate reminders to improve productivity and ensure timely task completion.

---

## ✨ Features

### 👨‍💼 Admin

- Register & Login
- Create Tasks
- Assign Tasks to Interns
- Edit Tasks
- Delete Tasks
- Mark Tasks as Completed
- View Intern Productivity
- Dashboard Statistics
- Search Tasks
- Filter Tasks
- Sort Tasks
- Upcoming Deadlines
- Notification Panel
- Logout

### 👩‍💻 Intern

- Secure Login
- View Assigned Tasks
- View Task Status
- Mark Tasks as Completed
- Dashboard Overview

### 🔔 Automation

- Automatic Task Notifications
- Email Reminder Support
- Cron Job Scheduler
- Upcoming Deadline Monitoring

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Chart.js
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Node Cron
- Nodemailer

---

## 📁 Project Structure

```
TaskAutomationSystem
│
├── backend
│   ├── config
│   ├── controllers
│   ├── cron
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/ayeshafarooq578-gif/Task-Automation-system.git
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

Example:

```env
PORT=****
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
```

Run backend

```bash
npm start
```

or

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on

```
http://localhost:5173
```

---

## 📊 Dashboard Features

- Dashboard Statistics
- Productivity Chart
- Notifications
- Upcoming Deadlines
- Task Management
- Task Search
- Task Filtering
- Task Sorting

---

## 🔐 Authentication

The project uses:

- JSON Web Token (JWT)
- Protected Routes
- Role-Based Authentication

Roles:

- Admin
- Intern

---

## 📧 Automated Reminder System

The system uses:

- Node Cron
- Nodemailer

to automatically send reminder emails for pending tasks before their due dates.

---

## 🗄️ Database

MongoDB Collections:

- Users
- Tasks
- Notifications

---

## 📸 Screenshots

You can add screenshots here after uploading them.

Example:

- Login Page
- Admin Dashboard
- Intern Dashboard
- Create Task
- Notification Panel

---

## 🚀 Future Improvements

- Real-time Notifications
- File Uploads
- Team Management
- Calendar Integration
- Dark/Light Theme
- Task Priority Levels

  
---
