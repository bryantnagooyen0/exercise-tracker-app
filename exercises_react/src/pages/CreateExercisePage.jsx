// File: src/pages/CreateExercisePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';

export default function CreateExercisePage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        reps: '',
        weight: '',
        unit: 'lbs',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/exercises', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                reps: parseInt(formData.reps),
                weight: parseInt(formData.weight),
            }),
        });

        if (res.status === 201) {
            alert('Exercise created successfully!');
        } else {
            alert('Failed to create exercise.');
        }
        navigate('/');
    };

    return (
        <div>
        
            <main>
                <h2>Create New Exercise</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name: <input name="name" value={formData.name} onChange={handleChange} required /></label><br />
                    <label>Reps: <input name="reps" type="number" value={formData.reps} onChange={handleChange} required /></label><br />
                    <label>Weight: <input name="weight" type="number" value={formData.weight} onChange={handleChange} required /></label><br />
                    <label>Unit:
                        <select name="unit" value={formData.unit} onChange={handleChange}>
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                        </select>
                    </label><br />
                    <label>Date: <input name="date" placeholder="MM-DD-YY" value={formData.date} onChange={handleChange} required /></label><br />
                    <button type="submit">Create Exercise</button>
                </form>
            </main>
            
        </div>
    );
}
