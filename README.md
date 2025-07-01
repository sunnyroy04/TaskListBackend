@"
# 📝 Task List Backend

This is a Node.js + Express backend API for a Task List (Todo) application using MongoDB. It allows users to create, retrieve, update, and delete their tasks. The backend is structured using MVC principles and uses environment variables for configuration.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS
- Nodemon (for development)

---

## 📁 Project Structure

\`\`\`
TaskListBackend/
├── config/              # MongoDB connection
│   └── db.js
├── controllers/         # Route logic
│   └── todoController.js
├── models/              # Mongoose models
│   └── Todo.js
├── routes/              # Express routes
│   └── todoRoutes.js
├── .env                 # Environment config
├── server.js            # Entry point
├── package.json
└── README.md
\`\`\`

---

## 📦 Installation

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/sunnyroy04/TaskListBackend.git
cd TaskListBackend
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

3. **Set up your environment**

Create a `.env` file in the root directory:

\`\`\`env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tododb
\`\`\`

4. **Start the server**

\`\`\`bash
npm run dev     # for development using nodemon
npm run start   # for production
\`\`\`

---

## 🔌 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| POST   | \`/api/todo\`        | Create a new task        |
| GET    | \`/api/todos\`       | Get all tasks            |
| GET    | \`/api/todo/:id\`    | Get task by ID           |
| PUT    | \`/api/todo/:id\`    | Update task by ID        |
| DELETE | \`/api/todo/:id\`    | Delete task by ID        |

---

## 💡 Example cURL Request

\`\`\`bash
curl -X POST http://localhost:5000/api/todo ^
 -H "Content-Type: application/json" ^
 -d "{\"title\":\"Study MongoDB\",\"description\":\"Complete CRUD operations\"}"
\`\`\`

---

## 🛡️ .gitignore (Important)

Ensure your `.env` and `node_modules/` are ignored from Git:

\`\`\`gitignore
node_modules/
.env
\`\`\`

---

## 🧑‍💻 Author

**Sunny Kumar**  
GitHub: [@sunnyroy04](https://github.com/sunnyroy04)

---

## 📃 License

This project is licensed under the MIT License.
"@ > README.md
