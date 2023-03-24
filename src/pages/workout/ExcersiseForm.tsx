import React, { useState } from 'react';

export default function AddExcersise({handleExcersise}) {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');

    function submitForm(e) {
        e.preventDefault()
       handleExcersise(name, reps)
    }
    return (
        <div> 
            <h3>Create Excersise</h3>
            <form onSubmit={submitForm}>
                <label>
                    Excersise Name:
                    <input type="text" name="excersiseName" onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Reps:
                    <input type="number" name="reps" onChange={(e) => setReps(e.target.value)}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}