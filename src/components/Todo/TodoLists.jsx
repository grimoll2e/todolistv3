import { TodoItem } from './TodoItem';
import { useTodo } from '../../hooks/useTodos';


export function TodoLists() {
    const { todosFilter } = useTodo()

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
