import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreateExercisePage from './pages/CreateExercisePage.jsx';
import EditExercisePage from './pages/EditExercisePage.jsx';
import Navigation from './components/Navigation.jsx';

export default function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>Exercise Tracker</h1>
                    <p>Track your workouts with ease</p>
                </header>

                <Navigation />

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create" element={<CreateExercisePage />} />
                        <Route path="/edit/:id" element={<EditExercisePage />} />
                    </Routes>
                </main>

                <footer>
                    <p>© 2025 Bryant Nguyen</p>
                </footer>
            </div>
        </Router>
    );
}