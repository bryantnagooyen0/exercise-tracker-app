import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ExerciseRow({ exercise, onDelete }) {
    const navigate = useNavigate();

    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
                <FaEdit
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                    onClick={() => navigate(`/edit/${exercise._id}`, { state: exercise })}
                />
                <FaTrash
                    style={{ cursor: 'pointer' }}
                    onClick={() => onDelete(exercise._id)}
                />
            </td>
        </tr>
    );
}
