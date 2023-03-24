import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function AddWorkout({handleChange}) {
    const [workoutName, setWorkoutName] = useState('');
    const [excersiseName, setExcersiseName] = useState('');
    const [reps, setReps] = useState('');
    const [excersises, setExcersises] = useState([]);

    function submitForm(e) {
        e.preventDefault()
        if (excersiseName !== '') {
            handleChange(workoutName, [...excersises, {excersiseName, reps: reps}])
        } else {
            handleChange(workoutName, excersises);
        }
    }
    
    function addExcersise(e) {
        e.preventDefault()
        setExcersises(prevState => {
            prevState.push({
                name: excersiseName,
                reps: reps
            })
            return [...prevState]
        })
        setExcersiseName('');
        setReps('')
    }

    return (
        <div className={styles.workoutForm}>
            <h3>Create Workout</h3>
            <form onSubmit={submitForm}>
                <label>
                    Workout Name: 
                    <input type="text" name="workoutName" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Excersise Name:
                    <input type="text" name="excersiseName" value={excersiseName} onChange={(e) => setExcersiseName(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Reps:
                    <input type="number" name="reps" value={reps} onChange={(e) => setReps(e.target.value)}/>
                </label>
                <br/>
                <button onClick={(e) => addExcersise(e)} className={styles.btn}>Add Excersise</button>  
                <br/>
                <input type="submit" className={styles.btn}/>
            </form>
        </div>
    )
}
