import styles from './TodoItem.module.scss'
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";
import { TodoForm } from './TodoForm';
import { getFormattedDate } from '../../utils/DateUtils'
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';


export function TodoItem({ todo }) {
    const { deleteTodo ,editTodo} = useContext(TodoContext)

    const [isEdit, setIsEdit] = useState(false)
    //แก้แล้ว
    const handleClickCheckIcon = () => setIsEdit(true)
    //แก้แล้ว
    const handleClickCheckBox = () => {
        editTodo(todo.id, { ...todo, status: !todo.status })
    }
    //แก้แล้ว
    const handleClickDeleteBox = () => {
        deleteTodo(todo.id)
    }
    //แก้แล้ว

    let CheckStyles = todo.status ? styles.checkbox_icon__done : styles.checkbox_icon
    let taskStyle = todo.status ? styles.done : ''
    return (
        <>
            {!isEdit ? <li className={styles.todo__item__container} >
                <div className={styles.checkbox__container} onClick={handleClickCheckBox}>
                    <HiCheck className={CheckStyles} />
                </div>
                <p className={taskStyle}>{todo.task}</p>
                <span className={styles.date__text}>{getFormattedDate(todo.date)}</span>
                <div className={styles.edit__icon} onClick={handleClickCheckIcon}>
                    <HiPencil />
                </div>
                <div className={styles.delete__icon} onClick={handleClickDeleteBox}>
                    <HiTrash />
                </div>
            </li> :
                <TodoForm
                    submitText='Edit Take'
                    onSetShow={setIsEdit}
                    oldTodo={todo}
                />}
        </>
    )
}
