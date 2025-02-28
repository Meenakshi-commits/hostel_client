# Hostel Management System

## 📌 Project Overview
The **Hostel Management System** is a **MERN stack** application designed to manage hostel operations, including **room bookings, payments, notifications, and user authentication**. It supports **Razorpay** for secure payments, **Twilio** for SMS notifications, and **SendGrid** for email alerts.

---
## 📂 Project Directory Structure

### **📌 Client Side (React + Vite)**
```
hostel_client/
│── src/
│   ├── assets/                      
│   ├── components/                  
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Notifications.jsx
│   ├── pages/                        
│   │   ├── HomePage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Booking.jsx
│   │   ├── Payment.jsx
│   │   ├── HostelDetails.jsx
│   │   ├── Maintenance.jsx
│   │   ├── Residents.jsx
│   │   ├── Billing.jsx
│   │   ├── Reports.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   ├── services/                     
│   │   ├── authService.js
│   │   ├── bookingService.js
│   │   ├── paymentService.js
│   │   ├── notificationService.js
│   ├── context/                       
│   │   ├── AuthContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── tailwind.config.js
│── vite.config.js
```

### **📌 Server Side (Node.js + Express.js + MongoDB)**
```
hostel_server/
│── src/
│   ├── config/                     # Configuration files (DB, JWT, etc.)
│   │   ├── db.js                   # MongoDB connection
│   │   ├── auth.js                 # JWT authentication config
│   ├── controllers/                 # Business logic for routes
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── paymentController.js
│   │   ├── notificationController.js
│   ├── models/                      # Mongoose schemas/models
│   │   ├── User.js
│   │   ├── Booking.js
│   │   ├── Payment.js
│   │   ├── Notification.js
│   │   ├── Room.js
│   ├── routes/                      # API routes
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── notificationRoutes.js
│   │   ├── roomRoutes.js
│   ├── middleware/                   # Middleware (Auth, Validation)
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   ├── services/                     # Business logic for APIs
│   │   ├── authService.js
│   │   ├── bookingService.js
│   │   ├── paymentService.js
│   │   ├── notificationService.js
│   ├── utils/                        # Utility functions
│   │   ├── sendEmail.js
│   │   ├── sendSMS.js
│   ├── app.js                        # Express App Configuration
│   ├── server.js                     # Entry Point
│── .env                              # Environment variables
│── .gitignore
│── package.json
│── README.md
```

---
## 🚀 Technologies Used
- **Frontend:** React.js, Vite, Tailwind CSS, React Router, Formik
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT Authentication
- **Payments:** Razorpay API Integration
- **Notifications:** Twilio (SMS), SendGrid (Emails)
- **Deployment:** Netlify (Frontend), Render (Backend)

---
## ⚡ Installation and Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/Hostel-Management-System.git
cd Hostel-Management-System
```

### **2️⃣ Install Dependencies**
#### **For Backend**
```sh
cd hostel_server
npm install
```
#### **For Frontend**
```sh
cd hostel_client
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in `hostel_server/` and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
SENDGRID_API_KEY=your_sendgrid_api_key
```

### **4️⃣ Run the Server**
```sh
cd hostel_server
npm start
```

### **5️⃣ Run the Client**
```sh
cd hostel_client
npm run dev
```

---
## 🔥 API Endpoints

### **1️⃣ Authentication**
- `POST /api/auth/signup` → Register a new user
- `POST /api/auth/login` → Login and get a JWT token

### **2️⃣ Room Management**
- `GET /api/rooms` → Get all available rooms
- `POST /api/rooms` → Create a new room (Admin only)

### **3️⃣ Booking Management**
- `POST /api/bookings` → Create a new booking
- `GET /api/bookings/:id` → Get booking details

### **4️⃣ Payment Management**
- `POST /api/payments/razorpay` → Process payment using Razorpay

### **5️⃣ Notifications**
- `POST /api/notifications/email` → Send email notifications
- `POST /api/notifications/sms` → Send SMS notifications

---
## 📌 Deployment
- **Frontend** → Deployed on **Netlify**
- **Backend** → Deployed on **Render**

---
## 📞 Contact
For any queries, feel free to contact **Meenakshi** at **meenakshi.v36@gmail.com**.

🚀 Happy Coding!


 
