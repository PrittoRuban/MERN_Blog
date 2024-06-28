
# MERN Blog App

Welcome to the MERN Blog App! This project is a full-stack blogging application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), enhanced with Tailwind CSS, React Redux, and JWT for secure authentication.

## Features
- **Admin Functionality:** Create, edit, and delete blog posts.
- **User Functionality:** Read blog posts and post comments.
- **Secure Authentication:** JWT-based secure authentication for admins and users.
- **Responsive Design:** Optimized for all devices using Tailwind CSS.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB
- Firebase API Key

### Installation

1. **Fork the Repository**

   Click the "Fork" button at the top-right corner of this page to create a copy of this repository in your GitHub account.

2. **Clone the Repository**

   Open your terminal and clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/PrittoRuban/MERN_Blog.git
   ```

3. **Navigate to the Backend Directory**

   ```bash
   cd MERN_Blog
   ```

4. **Install Backend Dependencies**

   ```bash
   npm install
   ```

5. **Set Up Backend Environment Variables**

   Create a `.env` file in the root directory and add your MongoDB URL and JWT secret:

   ```env
   MONGO=your-mongodb-url
   JWT_SECRET=your-jwt-secret
   ```

6. **Navigate to the Frontend Directory**

   ```bash
   cd Client
   ```

7. **Install Frontend Dependencies**

   ```bash
   npm install
   ```

8. **Set Up Frontend Environment Variables**

   Create a `.env` file in the `Client` directory and add your Firebase API key:

   ```env
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   ```


Replace `your-mongodb-url`, `your-jwt-secret`, `your-firebase-api-key` with the appropriate values.

### Running the Application

1. **Start the Backend Server**

   ```bash
   npm run dev
   ```

2. **Start the Frontend Server**

   Open a new terminal window, navigate to the `Client` directory, and run:

   ```bash
   npm run dev
   ```


The application should now be running locally. Open your browser and navigate to the appropriate localhost URLs to see the frontend and backend in action.



---

Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated!

---

