import styles from './Addtodo.module.scss'
import { useState } from 'react'
import { TodoForm } from './TodoForm'

export function Addtodo({onAddTodo}) {
    const [isShow,setIsShow] = useState(false)

    const handleClickToAddTask = () =>{
        setIsShow(!isShow)
    }
    return (
        <>
            {!isShow?(<div className={styles.add__todo} onClick={handleClickToAddTask}>
                <span>+</span>
                <h3>Add task</h3>
            </div>):(
            <TodoForm 
            onSetShow={handleClickToAddTask} 
            submitText='Add task' 
            onAddTodo={onAddTodo}
            />
            )}
        </>
    )
}
