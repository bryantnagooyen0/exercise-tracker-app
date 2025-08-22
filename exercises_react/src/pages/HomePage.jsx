import React, { useEffect, useState } from 'react';
import ExerciseTable from '../components/ExerciseTable.jsx';
import Navigation from '../components/Navigation.jsx';

export default function HomePage() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/exercises')
            .then(res => res.json())
            .then(data => setExercises(data))
            .catch(err => console.error('Failed to fetch exercises:', err));
    }, []);

    const deleteExercise = async (_id) => {
        const res = await fetch(`http://localhost:3000/exercises/${_id}`, {
            method: 'DELETE',
        });
        if (res.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            alert("Failed to delete the exercise.");
        }
    };

    return (
        <div>
            
            <main>
                <ExerciseTable exercises={exercises} onDelete={deleteExercise} />
            </main>
            
        </div>
    );
}