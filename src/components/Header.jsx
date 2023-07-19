import React from "react";
import { useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";

export function Header({onSearchText}) {
  const[searchValue,setSearchValue]=useState('')

  const handleChange=(e)=>{
    setSearchValue(e.target.value)
    onSearchText(e.target.value)
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
    </header>

  );
}
