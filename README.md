AI Model Inventory Manager – Client

A full-featured React-based web application for managing AI Models with authentication, CRUD operations, dynamic filtering, and purchase tracking.
This project is built as part of the B12-A10_category-0014 assignment.

🚀 Live Demo

👉 Live Site URL: https://cheery-raindrop-9ce816.netlify.app/

👉 Server GitHub: https://github.com/shakilwebdev/ai-model-inventory-manager-server.git

👉 Client GitHub: https://github.com/shakilwebdev/ai-model-inventory-manager-client.git

📌 Project Overview

AI Model Inventory Manager is a modern web application that allows users to add, view, update, delete, and purchase AI model entries.
It uses Firebase Authentication, a MongoDB database, and supports private routes, search, and real-time purchase count updates.

This project simulates how real platforms like Hugging Face, Kaggle, and Model Zoo organize AI models.

🛠️ Technologies Used
Frontend

React.js

React Router

Firebase Authentication

TailwindCSS

DaisyUI

React Toastify

SweetAlert2

ImgBB (Image Upload)

Backend

Node.js

Express.js

MongoDB (Mongoose / Native Driver)

JWT / Firebase Token (for optional authorization)

Vercel Deployment

⭐ Main Features

🔐 User Authentication

Email/Password login & registration

Google Sign-In

Private routes

Reload-safe authentication

📦 CRUD Operations

Add new AI models

View all models

View model details

Update model

Delete model

🛒 Model Purchase System

Purchase model with one click

Real-time purchase counter update

Store purchased items in separate MongoDB collection

<!-- 🔎 Search & Filter -->

🔎 Search

Search models by name (Regex search)

<!-- Filter models by framework (TensorFlow, PyTorch, etc.) -->

🌙 Dark/Light Theme Toggle

Full-site theme switch

Stored per user/browser setting

📱 Fully Responsive UI

Mobile, Tablet & Desktop responsive

Professional & unique design

📂 Folder Structure (Client Side)
src/
├── components/
├── context/
├── firebase/
├── layout/
├── pages/
│ ├── AddModel/
│ ├── AllModels/
│ ├── Auth/
│ ├── ErrorPage/
│ ├── Footer/
│ ├── Home/
│ ├── ModelDetails/
│ ├── MyModels/
│ ├── MyPurchase/
│ ├── UpdateModel/
├── router/
├── App.jsx
└── main.jsx

🔐 Authentication Workflow

User can register using email & password

Google login supported

After login, user stays logged in even after reload

Private routes are protected

Only model creator can update & delete their own model

📝 CRUD Endpoints (Backend)
Method Route Description
POST /models Add new model
GET /models Get all models
GET /models/:id Get single model
PUT /models/:id Update a model
DELETE /models/:id Delete a model
POST /purchases Add purchase entry
GET /purchases/:email Get user purchases
🧪 Challenges Implemented

✔ Framework-based filtering
✔ Search by model name
✔ Real-time purchase counter using $inc
✔ Full dark/light theme

📸 Screenshots

(Add 3–4 screenshots of your project here)

📦 How to Run Locally
1️⃣ Clone Repo
git clone https://github.com/shakilwebdev/ai-model-inventory-manager-client.git

cd ai-model-inventory-manager-client

2️⃣ Install Dependencies
npm install

3️⃣ Add Environment Variables

Create a .env file:

VITE_apiKey=your_key
VITE_authDomain=your_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storageBucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_appId

4️⃣ Start Dev Server
npm run dev

🎯 Assignment Requirements Covered

15+ client commits

8+ server commits

Meaningful README

No lorem ipsum text

Toast notifications everywhere

Fully hosted client + server

No reload error on private routes

Responsive UI

👨‍💻 Developer

Md Shakil Ahmad
