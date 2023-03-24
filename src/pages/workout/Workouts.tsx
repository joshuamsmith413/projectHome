import React, { useEffect } from 'react';
import styles from './styles.module.scss';

export default function Workouts({workouts}) {

    function makeWorkoutList(data) {
        return data.map(workout => {
            return (
                <div>
                    <h5>{workout.name}</h5>
                    <strong>Excersises</strong>
                    {workout.excersises.map(excersise => {
                        return (
                            <>
                                <p>{excersise.excersiseName}</p>
                                <p>{excersise.reps}</p>
                            </>
                        )
                    })}
                </div>
            )
        })
    }

    return (
        <div className={styles.workouts}>
            <h3>My Workouts</h3>
            {makeWorkoutList(workouts)}
        </div>
    )
}