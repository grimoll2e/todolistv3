import "./App.scss";
import { Header } from '../components/Header';
import { Sidebar } from "../components/Sidebar";
import { TodoContent } from "../components/Todo/TodoContent";
import { useState, useEffect } from 'react';
import { getSevenDayRange } from "../utils/DateUtils";
import * as TodoAPIServices from "../service/todoService";

function App() {

  // logic state
  const [todos, setTodos] = useState([])
  const [filterList, setTodosfilter] = useState([])
  
  // useEffect data from database
  useEffect(() => {

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
    fetchAllTodo()

    return () => console.log('Clear up')
  }, [])

  //logic function
  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange()
    let filterTodo = [...todos]

    // filter logic : schma for filter yyyy-mm-dd
    if (index === 0) {
      setTodosfilter(todos)
    } else if (index === 1) {
      filterTodo = todos.filter(todoObj => todoObj.date === nowStr)
      setTodosfilter(filterTodo)
    } else if (index === 2) {
      filterTodo = todos.filter(todoObj => todoObj.date >= nowStr && todoObj.date <= nextSevenStr)
    }
    // setTodos(filterTodo)
    setTodosfilter(filterTodo)
  }

  const handleSearch = (searchText) => {
    const newTodo = todos.filter((todoObj) => todoObj.task.toLocaleLowerCase().includes(searchText))
    setTodosfilter(newTodo)

  }

  return (
    <div className="container">
      <Header onSearchText={handleSearch} />
      <Sidebar onSelectTab={handleFilterLists} />
      <TodoContent todos={filterList} setTodos={setTodos} setFilterList={setTodosfilter} />
    </div>
  );
}

export default App;
