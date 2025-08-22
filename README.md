# Exercise Tracker

A simple web application for tracking your workout exercises. Built with React for the frontend and Express.js with MongoDB for the backend.

## Features

This application provides the following functionality:
- Create new exercises with name, reps, weight, unit (lbs/kgs), and date
- View all your exercises in a table format
- Edit existing exercises
- Delete exercises you no longer want to track

## Project Structure

- `exercises_react/` - React frontend application
- `exercises_rest/` - Express.js backend API server

## Setup

### Prerequisites
- Node.js installed on your computer
- MongoDB database (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd exercises_rest
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `exercises_rest` directory with your MongoDB connection string:
   ```
   MONGODB_CONNECT_STRING=your_mongodb_connection_string_here
   ```

4. Start the backend server:
   ```
   npm start
   ```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```
   cd exercises_react
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## How to use

1. Make sure both servers are running (backend on port 3000, frontend on port 5173)
2. Open your browser and go to `http://localhost:5173`
3. Use the navigation to create, view, edit, or delete exercises

## API Endpoints

- `GET /exercises` - Get all exercises
- `POST /exercises` - Create a new exercise
- `PUT /exercises/:id` - Update an exercise
- `DELETE /exercises/:id` - Delete an exercise

## Technologies Used

- Frontend: React, React Router, Vite
- Backend: Express.js, Mongoose
- Database: MongoDB
