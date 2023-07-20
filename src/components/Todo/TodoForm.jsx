import React, { useState } from 'react';
import styles from './TodoForm.module.scss'
import PropTypes from 'prop-types';
import { useTodo } from '../../hooks/useTodos';

TodoForm.propTypes = {
    submitText: PropTypes.string.isRequired,
    onSetShow: PropTypes.func.isRequired,
    todo: PropTypes.oneOfType([
        PropTypes.object,
    ])
}

export function TodoForm({ submitText, onSetShow, oldTodo }) {
    const { addTodo, editTodo } = useTodo()

    const [task, setTask] = useState(oldTodo?.task || '')
    const [error, setError] = useState(false)

    // แก้แล้ว
    const validate = (Text) => {
        if (Text.trim() === '') {
            setError(true)
            return false
        } else {
            setError(false)
            return true
        }
    }
    //แก้แล้ว
    const handleChangeInput = (e) => {
        setError(false)
        setTask(e.target.value)
        // handleChangeDate()
    }
    //แก้แล้ว
    // const handleChangeDate = (e) => {
    //     console.log(e.target.value)
    // }
    //แก้แล้ว
    const handleSubmit = (e) => {
        e.preventDefault()
        let validTask = validate(task)
        if (validTask && !oldTodo) {
            addTodo?.(task)
            onSetShow(false)
            return;
        } else if (validTask && oldTodo) {
            editTodo(oldTodo.id, { ...oldTodo, task })
            onSetShow(false)
        }
    }
    //แก้แล้ว
    const handlecancel = () => {
        onSetShow(false)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.todo__form__container}>
            <input className={styles.todo__form__input} placeholder='Task Name' value={task} onChange={handleChangeInput} />
            <div className={styles.todo__form__footer}>
                {error && <p className={styles.todo__error}> Title is required</p>}
                <div className={styles.todo__form__buttons}>
                    <button type='button' onClick={handlecancel}>Cancle</button>
                    <button type='submit' >{submitText}</button>
                </div>

            </div>
        </form>
    )
}
