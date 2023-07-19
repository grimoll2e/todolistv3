import { Addtodo } from './Addtodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';

//แก้แล้ว
export function TodoContent() {
    //แก้แล้ว
    // const handleAddTodo = async (task) => {
    //     try {
    //         //sync external state
    //         const now = new Date().toISOString().slice(0, 10)
    //         const newTodoObj = { task: task, status: false, date: now }

    //         const response = await TodoAPIServices.createTodoAPI(newTodoObj)
    //         const createdTodoObj = response.data.todo
    //         // sync Internal state : ui state
    //         const newTodoLists = [createdTodoObj, ...todos]

    //         setFilterList(newTodoLists)
    //         setTodos(newTodoLists)
    //     } catch (err) {
    //         // error handler
    //         console.log(err.response.date)
    //     }
    // }
    //แก้แล้ว
    // const handleEditTodo = async (todoID, updateObj) => {
    //     try {
    //         //sync external state
    //         const response = await TodoAPIServices.updateTodoAPI(updateObj)
    //         const updatedTodoObj = response.data.todo
    //         //sync ixternal state
    //         const foundedIndex = todos.findIndex((todo) => todo.id === todoID)
    //         if (foundedIndex !== -1) {
    //             const newTodoLists = [...todos]
    //             newTodoLists[foundedIndex] = { ...newTodoLists[foundedIndex],...updatedTodoObj}
    //             setTodos(newTodoLists)
    //             setFilterList(newTodoLists)
    //         }
    //     } catch (err) {
    //         // error handler
    //         console.log(err.response.data)
    //     }

    // }
    // น่าจะได้ ?
    // const handleDeleteTodo = async (todoID) => {
    //     try {
    //         await TodoAPIServices.deleteTodoAPI(todoID)

    //     } catch (err) {
    //         console.log(err.response.data)
    //     }

    //     let currTodoID = curr => curr.filter((todoObj) => todoObj.id !== todoID)
    //     setTodos(currTodoID)
    //     setFilterList(currTodoID)
    // }

    return (
        <main className="content">
            <TodoHeader />
            <Addtodo/>
            <TodoLists/>
        </main>
    )
}
