/**
 * Bryant Nguyen
 */
import mongoose from 'mongoose';
import 'dotenv/config';

const EXERCISE_DB_NAME = 'exercise_db';

let connection = undefined;

const exerciseSchema = new mongoose.Schema({
    name : { type: String, required: true},
    reps : { type: Number, required: true, min: 1},
    weight: { type: Number, required: true, min: 1},
    unit: { type: String, required: true, enum: ['lbs', 'kgs']},
    date: { type: String, required: true},
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

/**
 * This function connects to the MongoDB server and to the database
 *  'exercise_db' in that server.
 */
async function connect(){
    try{
        connection = await mongoose.connect(process.env.MONGODB_CONNECT_STRING, 
                {dbName: EXERCISE_DB_NAME});
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

async function createExercise(data){
    const exercise = new Exercise(data);
    await exercise.save();
    return exercise;
}

async function getAllExercises(){
    return await Exercise.find();
}

async function getExerciseById(id){
    return await Exercise.findById(id);
}

async function updateExercise(id,data){
    const updated = await Exercise.findByIdAndUpdate(id, data, {new: true});
    return updated;
}

async function deleteExercise(id){
    const result = await Exercise.findByIdAndDelete(id);
    return result;
}

export {
    connect,
    createExercise,
    getAllExercises,
    getExerciseById,
    updateExercise,
    deleteExercise
};