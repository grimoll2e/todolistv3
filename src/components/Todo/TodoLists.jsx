import { TodoItem } from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';


export function TodoLists() {
    const { todosFilter } = useContext(TodoContext)

    //แก้แล้ว
    return (
        <ul>
            {todosFilter.map((item) => (
                <TodoItem
                    todo={item}
                    key={item.id}
                />
            ))}
        </ul>
    )
}
