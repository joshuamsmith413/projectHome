import React from 'react';
import AddWorkout from './WorkoutForm';
import Workouts from './Workouts';
import UseWorkout from '../../hooks/UseWorkout';
import styles from './styles.module.scss';

export default function Excersise() {
    const { workouts, handleChange} = UseWorkout()

    return (
        <div className={styles.workout}>
            <h2>Workout App</h2>
            <AddWorkout handleChange={handleChange} />
            <Workouts workouts={workouts}/>
        </div>
    )
}