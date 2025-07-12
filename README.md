# 👕 ReWear – Sustainable Clothing Exchange Platform

ReWear is a full-stack web application that promotes sustainable fashion by allowing users to **exchange clothes** through a **points-based or direct swap system**. It offers a modern, user-friendly interface for listing, browsing, and managing clothing items with community-driven values in mind.

---

## ❓ Problem Statement

Fast fashion is a leading contributor to textile waste and environmental harm. People frequently discard clothes that are still wearable, while others lack affordable access to quality clothing. Existing platforms often focus on buying and selling, limiting eco-friendly sharing and reuse.

**ReWear aims to solve this by:**

- Encouraging **circular fashion**
- Allowing users to **swap or donate clothing**
- Removing monetary barriers using a **point-based system**
- Providing admin tools to maintain community trust

---
[![Demo Video](https://img.youtube.com/vi/Muu8G9PlMOQ/0.jpg)](https://www.youtube.com/watch?v=Muu8G9PlMOQ)

---

## ✨ Key Features

- 🔐 User authentication with JWT
- 🧥 Listing creation with image uploads (Multer)
- 🔄 Swap requests (points-based or item-to-item)
- 📦 Order tracking and status updates
- 👮 Admin moderation (ban users, view logs)
- 🎯 Role-based access control (user/admin)
- 📊 MongoDB models: Users, Listings, Orders, Swaps

---

## 🛠 Tech Stack

### 🔹 Frontend
- React + TypeScript
- Axios, TailwindCSS (or your styling choice)

### 🔹 Backend
- Node.js + Express
- MongoDB + Mongoose
- Multer (for image upload)
- Joi (data validation)
- Bcrypt & JWT (auth & security)

---

## 🗂 Folder Structure

ReWear/
├── frontend/ # TypeScript React client
├── backend/ # Express.js + MongoDB server
├── README.md


---

## ⚙️ Getting Started

### 📦 Clone the Repository

```bash
git clone https://github.com/your-username/rewear.git
cd rewear

▶️ Run the Backend
cd backend
npm install
npm run dev

Make sure to set your environment variables in backend/.env:

PORT=5000
MONGO_URI=mongodb://localhost:27017/rewear
JWT_SECRET=yourSuperSecretKey

💻 Run the Frontend
cd frontend
npm install
npm run dev
