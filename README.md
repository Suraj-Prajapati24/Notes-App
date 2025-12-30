# 📝 Notes Saving Web Application

A full-stack **Notes Saving Web Application** that allows users to create and manage their personal notes securely.  
Each user has their own account, and all notes are stored and retrieved user-wise from the database.

---

## 🚀 Tech Stack

### Frontend
- **React.js**
- Modern component-based UI
- API communication using HTTP requests

### Backend
- **Node.js**
- **Express.js**
- RESTful APIs

### Database
- **PostgreSQL**
- Relational schema with proper primary and foreign key constraints

---

## ✨ Features

- User registration and authentication
- Secure storage of user credentials
- Create, read, update, and delete notes
- Notes are **linked to individual users**
- Clean separation of frontend, backend, and database logic

---

## 🗄️ Database Schema

### Users Table
Stores user account details.

| Column Name | Type | Description |
|------------|------|-------------|
| `user_id` | SERIAL | Primary Key (Auto Increment) |
| `user` | VARCHAR | Username |
| `email` | VARCHAR | User Email |
| `password` | VARCHAR | Hashed Password |

---

### Notes Table
Stores notes created by users.

| Column Name | Type | Description |
|------------|------|-------------|
| `note_id` | SERIAL | Primary Key (Auto Increment) |
| `user_id` | INTEGER | Foreign Key → users(user_id) |
| `title` | VARCHAR | Note Title |
| `content` | TEXT | Note Content |

---


## 📂 Project Structure (Basic)

Notes-App/  
│  
├── frontend/ # React frontend  
├── backend/ # Express backend  
│   ├── routes/  
│   ├── controllers/  
│   └── index.js  
│  
└── database/ # PostgreSQL schema & queries  

---

## 📌 Note

This project is built as a **learning project** to understand how frontend, backend, and databases work together in a real-world application.
