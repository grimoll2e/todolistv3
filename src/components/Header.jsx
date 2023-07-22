import { useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { useTodo } from "../hooks/useTodos";
import Avatar from '@mui/material/Avatar';
import userpic from '../assets/user.png'


export function Header() {
  const [searchValue, setSearchValue] = useState('')

  const { searchTodo } = useTodo()

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    searchTodo(e.target.value)
  }

  return (

    <header className="header">
      <span>
        <FaHome />
      </span>
      <h3>CC-todolist</h3>
      <div className="header__search__container">
        <span className="header__search__icon">
          <FaSearch />
        </span>
        <input type="text" className="header__search__input" placeholder="search" onChange={handleChange} value={searchValue} />
      </div>
      <div>
        <Avatar alt="Grimoll2e Sloth" src={userpic} sx={{ width: 40, height: 40 ,cursor:'pointer' }}/>
      </div>
    </header>

  );
}
