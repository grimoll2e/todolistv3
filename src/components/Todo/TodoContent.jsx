import { Addtodo } from './Addtodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';


export function TodoContent() {

    return (
        <main className="content">
            <TodoHeader />
            <Addtodo />
            <TodoLists />
        </main>
    )
}
