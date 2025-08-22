import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';

export default function EditExercisePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const original = location.state;

    const [formData, setFormData] = useState({
        name: original.name,
        reps: original.reps,
        weight: original.weight,
        unit: original.unit,
        date: original.date,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'reps' || name === 'weight' ? parseInt(value) : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/exercises/${original._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (res.status === 200) {
            alert('Exercise updated successfully.');
        } else {
            alert('Failed to update exercise.');
        }
        navigate('/');
    };

    return (
        <div>
      
            <main>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Reps:
                        <input type="number" name="reps" value={formData.reps} onChange={handleChange} required />
                    </label>
                    <label>
                        Weight:
                        <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
                    </label>
                    <label>
                        Unit:
                        <select name="unit" value={formData.unit} onChange={handleChange} required>
                            <option value="kgs">kgs</option>
                            <option value="lbs">lbs</option>
                        </select>
                    </label>
                    <label>Date: <input name="date" placeholder="MM-DD-YY" value={formData.date} onChange={handleChange} required /></label>
                    <button type="submit">Update Exercise</button>
                </form>
            </main>
            
        </div>
    );
}