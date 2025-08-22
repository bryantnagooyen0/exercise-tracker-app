/**
 * Bryant Nguyen
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

function isValidDate(dateStr) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(dateStr);
}

function validateExerciseBody(body) {
    const keys = ['name', 'reps', 'weight', 'unit', 'date'];
    const bodyKeys = Object.keys(body);

    if (bodyKeys.length !== 5 || !keys.every(k => bodyKeys.includes(k))) return false;
    if (typeof body.name !== 'string' || body.name.trim().length === 0) return false;
    if (!Number.isInteger(body.reps) || body.reps <= 0) return false;
    if (!Number.isInteger(body.weight) || body.weight <= 0) return false;
    if (body.unit !== 'kgs' && body.unit !== 'lbs') return false;
    if (!isValidDate(body.date)) return false;

    return true;
}

app.post('/exercises', asyncHandler(async (req, res) => {
    const body = req.body;
    if (!validateExerciseBody(body)) {
        return res.status(400).json({ Error: "Invalid request" });
    }
    const newExercise = await exercises.createExercise(body);
    res.status(201).json(newExercise);
}));


app.get('/exercises', asyncHandler(async (req, res) => {
    const allExercises = await exercises.getAllExercises();
    res.json(allExercises);
}));


app.get('/exercises/:_id', asyncHandler(async (req, res) => {
    const found = await exercises.getExerciseById(req.params._id);
    if (!found) {
        return res.status(404).json({ Error: "Not found" });
    }
    res.status(200).json(found);
}));


app.put('/exercises/:_id', asyncHandler(async (req, res) => {
    const body = req.body;
    if (!validateExerciseBody(body)) {
        return res.status(400).json({ Error: "Invalid request" });
    }
    const updated = await exercises.updateExercise(req.params._id, body);
    if (!updated) {
        return res.status(404).json({ Error: "Not found" });
    }
    res.status(200).json(updated);
}));


app.delete('/exercises/:_id', asyncHandler(async (req, res) => {
    const deleted = await exercises.deleteExercise(req.params._id);
    if (!deleted) {
        return res.status(404).json({ Error: "Not found" });
    }
    res.status(204).send();
}));

app.listen(PORT, async () => {
    await exercises.connect()
    console.log(`Server listening on port ${PORT}...`);
});