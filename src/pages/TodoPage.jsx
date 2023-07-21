import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TodoContent } from '../components/Todo/TodoContent'


export default function TodoPage() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <TodoContent />
    </div>
  )
}
