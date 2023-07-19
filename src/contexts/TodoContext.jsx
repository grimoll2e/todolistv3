import { useEffect, useState, createContext } from "react";
import * as TodoAPIServices from '../service/todoService'

// createContext => context Obj (name)ใชช้ได้ 2 ที
// #1 provider : wrapper component => shared data,logic
// #2 comsumer : component ที่ต้องการใช้ data,logic (subscribe component)
export const TodoContext = createContext()

// #1 provider : wrapper component => shared data,logic
function TodoContextProvider(props) {

  const [todos, setTodos] = useState([])
  const [todosFilter, setTodosfilter] = useState([])

  // data from database
  async function fetchAllTodo() {
    try {
      // sync whit External service
      let response = await TodoAPIServices.getAllTodoAPI()
      // sync whit Internal service
      let todoList = response.data.todos
      setTodos(todoList)
      setTodosfilter(todoList)
    } catch (err) {
      // error handler
      console.log(err.response.status)
    }
  }
  //   เรียกใช้ 1 ครั้งตอนเริ่มโปรแกรม
  useEffect(() => {
    fetchAllTodo()
    return () => console.log('Clear up')
  }, [])

  const addTodo = async (task) => {
    try {
      //sync external state
      const now = new Date().toISOString().slice(0, 10)
      const newTodoObj = { task: task, status: false, date: now }

      const response = await TodoAPIServices.createTodoAPI(newTodoObj)
      const createdTodoObj = response.data.todo
      // sync Internal state : ui state
      const newTodoLists = [createdTodoObj, ...todos]

      setTodosfilter(newTodoLists)
      setTodos(newTodoLists)
    } catch (err) {
      // error handler
      console.log(err.response.date)
    }
  }

  const editTodo = async (todoID, updateObj) => {
    try {
      //sync external state
      const response = await TodoAPIServices.updateTodoAPI(updateObj)
      const updatedTodoObj = response.data.todo
      //sync ixternal state
      const foundedIndex = todos.findIndex((todo) => todo.id === todoID)
      if (foundedIndex !== -1) {
        const newTodoLists = [...todos]
        newTodoLists[foundedIndex] = { ...newTodoLists[foundedIndex], ...updatedTodoObj }
        setTodos(newTodoLists)
        setTodosfilter(newTodoLists)
      }
    } catch (err) {
      // error handler
      console.log(err.response.data)
    }

  }
  // น่าจะได้ ?
  const deleteTodo = async (todoID) => {
    try {
      await TodoAPIServices.deleteTodoAPI(todoID)

    } catch (err) {
      console.log(err.response.data)
    }

    let currTodoID = curr => curr.filter((todoObj) => todoObj.id !== todoID)
    setTodos(currTodoID)
    setTodosfilter(currTodoID)
  }


  const sharedObj = { magic: 42, todos: todos, todosFilter: todosFilter, addTodo: addTodo ,editTodo:editTodo,deleteTodo:deleteTodo}

  return (
    <TodoContext.Provider value={sharedObj}>{props.children}</TodoContext.Provider>
  )
}

export default TodoContextProvider