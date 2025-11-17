https://mernstackcapstone.onrender.com/login

# 📚 **BookHive – A Smart Digital Library & Book Borrowing System**

BookHive is a full-stack digital library management system designed for institutions, colleges, and organizations to modernize their library workflows. It automates book search, borrowing, returning, and management using a clean UI and dynamic APIs.

---

## 🚀 **1. Project Overview**

Traditional libraries still rely on manual processes, which cause:

* ❌ Inefficient book searching
* ❌ Poor accessibility for students
* ❌ Missing or delayed book returns
* ❌ Outdated and error-prone record keeping

**BookHive solves these issues** by offering:

* Real-time book browsing
* Dynamic search, filter, sort, and pagination
* A complete borrowing & return workflow
* Separate dashboards for students and admins

---

## 🧩 **2. System Architecture**

```
Frontend (React) → Backend (Node/Express API) → Database (MongoDB / MySQL)
```

| Component    | Technology                                                         |
| ------------ | ------------------------------------------------------------------ |
| **Frontend** | React.js, React Router, TailwindCSS                                |
| **Backend**  | Node.js, Express.js                                                |
| **Database** | MongoDB (Mongoose), MySQL                                          |
| **Auth**     | JWT-based login/signup                                             |
| **Hosting**  | Netlify/Vercel (Frontend), Render/Railway (Backend), MongoDB Atlas |

---

## ⚙️ **3. Dynamic Features**

* 🔎 **Full-text search** (title, author, ISBN)
* ↕️ **Sorting** (popularity, publication date, author)
* 🎭 **Filtering** (genre, availability, borrow status)
* 📄 **Server-side pagination** (limit + skip)
* 🔄 **Real-time dynamic fetching** using Axios/Fetch
* 🔁 **Data updates without page reload**

---

## 💡 **4. Key Functional Improvements (Based on Feedback)**

| Category         | Improvements                                            |
| ---------------- | ------------------------------------------------------- |
| **Searching**    | Full-text search using MongoDB `$regex`                 |
| **Sorting**      | Sort by popularity, author name, published date         |
| **Filtering**    | Genre-based, availability, borrow status                |
| **Pagination**   | Server-side pagination with UI controls                 |
| **Dynamic Data** | All pages fetch live data from API                      |
| **Scalability**  | Supports large datasets with infinite scroll (optional) |

---

## 🔥 **5. Updated Key Features**

### 👤 **Authentication & Authorization**

* JWT login/signup
* Admin / Student role-based access

### 📚 **Dynamic Book Listings**

* Search, filter, sort, paginated results
* Instant updates using Axios

### 🔄 **Book Borrow System**

* Borrow books (available only)
* Return books
* Availability auto-updates

### 🧑‍🎓 **Student Dashboard**

* Borrowed books
* Due dates
* Borrow history

### 🛠 **Admin Dashboard**

* Add / edit / delete books
* Track borrow requests
* View basic analytics

### 🔔 **Future Enhancements**

* Due-date reminders via email
* AI book recommendations (OpenAI API)

---

## 📡 **6. API Overview**

### 📘 **Books**

| Endpoint         | Method | Description                                           | Access        |
| ---------------- | ------ | ----------------------------------------------------- | ------------- |
| `/api/books`     | GET    | Fetch books with **search, sort, filter, pagination** | Authenticated |
| `/api/books/:id` | GET    | Get book details                                      | Authenticated |
| `/api/books`     | POST   | Add a new book                                        | Admin         |
| `/api/books/:id` | PUT    | Update book details                                   | Admin         |
| `/api/books/:id` | DELETE | Delete book                                           | Admin         |

---

### 🔄 **Borrow System**

| Endpoint          | Method | Description | Access  |
| ----------------- | ------ | ----------- | ------- |
| `/api/borrow/:id` | POST   | Borrow book | Student |
| `/api/borrow/:id` | PUT    | Return book | Student |

---

### 👤 **User APIs**

| Endpoint            | Method | Description                   | Access  |
| ------------------- | ------ | ----------------------------- | ------- |
| `/api/user/borrows` | GET    | User’s current borrowed books | Student |
| `/api/user/history` | GET    | Borrow/return history         | Student |

---

## 🛠 **7. Tech Stack**

### **Frontend**

* React.js
* React Router
* TailwindCSS
* Axios

### **Backend**

* Node.js
* Express.js

### **Database**

* MongoDB (Mongoose)
* MySQL (optional additional support)

### **Authentication**

* JSON Web Tokens (JWT)

### **Hosting**

* **Frontend:** Netlify / Vercel
* **Backend:** Render / Railway
* **Database:** MongoDB Atlas

### **Optional Integrations**

* OpenAI API → For smart book recommendations

---

## 📦 **8. Installation & Setup**

### 🔧 **Backend Setup**

```bash
cd backend
npm install
npm start
```

Create `.env`:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=4000
```

---

### 🎨 **Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

Configure API base URL in `services/api.js`.

---

## 📸 **9. Screenshots (Add later)**

* Login / Signup
* Book Listing
* Admin Dashboard
* Borrow/Return Page

---

## 🤝 **10. Contributing**

Pull requests and feature requests are welcome!

---

## 📄 **11. License**

This project is licensed under the **MIT License**.

---

