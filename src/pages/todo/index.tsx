
import React,  { useState } from 'react';
import styles from'./styles.module.css';

export default function Todo() {
    const [newTodo, setNewTodo] = useState({
        title: '',
        description: '',
    })
    const [todoList, setTodoList] = useState([]);


    const handleTitle = (e) => {
        setNewTodo({
            ...newTodo,
            title: e.target.value
        })
    }

    const handleDescription = (e) => {
        setNewTodo({
            ...newTodo,
            description: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(newTodo)
        setTodoList([
            ...todoList, newTodo
        ])
        console.log(todoList)
    }

    const makeTodoList = (list) => {
        return list.map(item => {
            return (
                <li>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </li>
            )
        })
    }

    return (
        <div className={styles.todoMain}>
            <form className={styles.todoForm} onSubmit={submitForm}>
                <label>
                    Title:
                    <input className={styles.formInput} type='text' value={newTodo.title} onChange={(e) => handleTitle(e)} placeholder='title'/>
                </label>
                <label>
                    Description
                    <input className={styles.formInput} type='text' value={newTodo.description} onChange={(e) => handleDescription(e)} placeholder='description'/>
                </label>
                <input type="submit" value="submit"/>
            </form>
            <div className={styles.todoList}>
              {makeTodoList(todoList)}  
            </div>
        </div>
    )
}