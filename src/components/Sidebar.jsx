import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { useState } from 'react';
import { useTodo } from "../hooks/useTodos";



export function Sidebar() {
  const { selectList } = useTodo()

  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelectTab = (index) => {
    setActiveIndex(index)
    selectList(index)
  }

  const genericLists = [
    {
      title: 'inbox',
      icon: <FaInbox />,
    },
    {
      title: 'Today',
      icon: <FaCalendar />,
    },
    {
      title: 'Next 7 Days',
      icon: <FaCalendarAlt />,
    },
  ]

  return (
    <aside className="sidebar">
      <section className="sidebar__generic">
        <ul className="generic__list">
          {/* ตัวอย่าง useState classname */}
          {genericLists.map((listObj, Index) => (
            <li className={`${activeIndex === Index ? 'active' : ''}`} onClick={() => handleSelectTab(Index)} key={listObj.title}>
              <span>
                {listObj.icon}
              </span>
              <h6>{listObj.title}</h6>
            </li>
          )
          )}
        </ul>
      </section>
      <section className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h6>Projects</h6>
      </section>
      <section className="sidebar__projects">
        <ul className="project__lists">
          <li className="active">
            <span>
              <FaInbox />
            </span>
            <h6>project a</h6>
          </li>
          <li>
            <span>
              <FaInbox />
            </span>
            <h6>project b</h6>
          </li>
        </ul>
      </section>
      <section className="sidebar__pagination">
         <button >5</button>
         <button >10</button>
         <button >25</button>
         <button >Log Out</button>
      </section>
    </aside>
  )
}
