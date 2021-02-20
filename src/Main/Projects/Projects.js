import React from 'react'

import ExpenseTracker from './ExpenseTracker'
import TodoApp from './TodoApp/TodoApp'

function Projects() {
  return (
    <>
      {/** TODO Set a switch with routes on your projects. */}
      <h2>Projects</h2>
      <TodoApp />
      <ExpenseTracker />
    </>
  )
}

//kommentar

export default Projects
