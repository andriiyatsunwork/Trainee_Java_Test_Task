
# Notes Management Application

This is a full-stack application for managing notes (create, read, update, delete) developed as a test task.

## Technologies Used
- **Backend:** Java 17, Spring Boot, Spring Data JPA, PostgreSQL
- **Frontend:** React (Vite), Zustand (State Management), Axios, i18next (Localization)
- **Testing:** Cypress (Frontend E2E Test)
- **Infrastructure:** Docker & Docker Compose

## Prerequisites
Ensure you have the following installed on your machine before running the application:
- [Java 17 or higher](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js (v18+)](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (must be running)

---

## How to Run the Application

The application consists of three parts: Database, Backend API, and Frontend Client. Please start them in the following order.

### 1. Start the Database (Docker)
The application uses a real PostgreSQL database. To avoid local installation, it runs in a Docker container.
1. Open a terminal in the root directory of the project (where `docker-compose.yml` is located).
2. Run the following command to start the database in the background:
   ```bash
   docker-compose up -d
   ```
*(Note: The database is mapped to port 5433 to prevent conflicts with local Postgres installations).*

### 2. Start the API Service (Backend)
Open a terminal and navigate to the backend folder:

```bash
cd backend
```
Run the Spring Boot application using the Maven wrapper:

```bash
# On Windows
mvnw.cmd spring-boot:run

# On Mac/Linux
./mvnw spring-boot:run
```
Alternatively, you can open the backend folder in your IDE (e.g., IntelliJ IDEA) and run the `BackendApplication.java` main class.

*(The API service will start on http://localhost:8080).*

### 3. Start the Client App (Frontend)
Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```
Install the required npm dependencies:

```bash
npm install
```
Start the React development server:

```bash
npm run dev
```
*(The UI will be available at http://localhost:5173 or the port provided in the console).*

---

## 🧪 How to Run the Tests

### Frontend E2E Test (Cypress)
**Important:** Both the Database, the Backend API, and the Frontend client app MUST be running before you execute the E2E test.

Open a terminal and navigate to the frontend folder.

Run Cypress in headless mode (fast, console output only):

```bash
npx cypress run
```
Or, to open the Cypress UI and watch the test execute in a browser:

```bash
npx cypress open
```
Then select E2E Testing, choose your browser, and click on notes.cy.js.

📌 API Endpoints Summary
- **GET /notes** - Get all notes

- **GET /notes/{id}** - Get a specific note by ID

- **POST /notes** - Create a new note

- **PUT /notes/{id}** - Update an existing note

- **DELETE /notes/{id}** - Delete a note by ID
