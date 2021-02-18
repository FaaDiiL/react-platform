import React from 'react'

function Table({expenses}) {
  return (
  
    <ul>
     {expenses.map((expense, index) => <li key={index}>{expense.title}{expense.amount}</li>)} 
    </ul>

  )
}

export default Table
