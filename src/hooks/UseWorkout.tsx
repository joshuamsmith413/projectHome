import { useState, useEffect, useContext, createContext } from 'react';

interface IExcersise {
    excersiseName: string;
    reps: number;
};

interface IWorkout {
    name: string;
    excersises: IExcersise[];
};



const seed = [
    {
        name: 'arms',
        excersises: [
            {
                excersiseName: 'benchpress',
                reps: 4
            },
            {
                excersiseName: 'curls for the girls',
                reps: 5,
            }
        ]
    }
]

// const Workoutcontext = createContext()

export default function UseWorkout() {
    const [workouts, setWorkouts] = useState<IWorkout[]>(seed);
    const [workout, setWorkout] = useState<IWorkout>();

    const handleChange = (workoutName: string, excersises: {excersiseName: string, reps: number}[]) => {
        setWorkout({
            name: workoutName,
            excersises: [...excersises]
        })
    }
    
    useEffect(() => {
        function pushWorkout(newWorkout) {
            if (!!newWorkout) {
                setWorkouts((prevState) => {
                    return [...prevState, newWorkout]
                })
            }
        }

        pushWorkout(workout)
    }, [workout])
        

    return {workouts, workout, handleChange}
}