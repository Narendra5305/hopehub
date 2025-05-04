

# 🌟 HopeHub Website

HopeHub is a web platform that connects individuals with resources such as shelters, updates, and support during emergencies or critical times. It includes both a **React frontend** and an **Express backend**.

---

## 📦 Project Structure

### Frontend: React  
### Backend: Node.js + Express  
### Database: MongoDB

---

## 🚀 Frontend (React)

### ⚙️ Setup Instructions
```bash
cd frontend
npm install
npm start
````

Runs on: `http://localhost:3000`

### 📁 Frontend Routes

The app uses React Router for client-side navigation.

```jsx
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/post-update" element={<PostUpdate />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
```

---

## 🖥️ Backend (Node.js + Express)

### ⚙️ Setup Instructions

```bash
cd backend
npm install
# Create .env with MONGODB_URI and JWT_SECRET
node index.js   # or use nodemon
```

Runs on: `http://localhost:5000`

### 🔐 Authentication Middleware

* Middleware used: `authenticate`
* Protects sensitive routes like:

  * Posting updates
  * Creating shelters
  * Verifying updates
  * Creating requests
  * Adding comments

---

### 📘 API Routes

| Prefix          | Description                | Method(s) | Auth Required |
| --------------- | -------------------------- | --------- | ------------- |
| `/users`        | Register & login users     | POST      | ❌             |
| `/update`       | Create / Get updates       | POST, GET | ✅ (POST only) |
| `/verification` | Verify updates             | POST      | ✅             |
| `/shelters`     | Add / Get shelters         | POST, GET | ✅ (POST only) |
| `/requests`     | Create / Get requests      | POST, GET | ✅ (POST only) |
| `/comments`     | Add comment / Get comments | POST, GET | ✅ (POST only) |

### 🧱 Example Routers

**UserRouter**

```js
POST /users/register     // Register user
POST /users/login        // Login user
```

**UpdateRouter**

```js
POST /update             // Create update (auth required)
GET /update              // Get all updates
```

**ShelterRouter**

```js
POST /shelters           // Add shelter (auth required)
GET /shelters            // Get all shelters
```

**CommentRouter**

```js
POST /comments           // Add comment (auth required)
GET /comments/:updateId  // Get comments for a specific update
```

---

## 🛠 Tech Stack

* **Frontend**: React, React Router, Axios
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JWT
* **Others**: dotenv, nodemon, cors

--

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

> HopeHub —
