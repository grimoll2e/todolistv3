import { TodoItem } from './TodoItem';


export function TodoLists({lists,onEditTodo,onDeleteTodo}) {
 //แก้แล้ว
    return (
        <ul>
            {lists.map((item) => (
                <TodoItem 
                todo={item}
                key={item.id}
                onEditTodo={onEditTodo}
                onDeleteTodo={onDeleteTodo}
                />
            ))}
        </ul>
    )
}
