import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul `
min-width:100%;
li{
  width:100%;
  display: flex;
  justify-content:space-between;
}
li span {
  width:33.33%;
}
.expense-amount{
color: red;
}
.income-amount{
color:green;
}
.date{
  color: blue
}
`
function Table({expenses}) {
  return (
  
    <Ul>
     {expenses.map((expense, index) => 
(
     <li key={index}>
     <span>{expense.title}</span>
     <span>{expense.date}</span>
     <span className={`${(expense.amount).toString(0,1) === '-'?'expense-amount':'income-amount'}`}>{expense.amount}</span></li>
)     
     )} 
     
    </Ul>

  )
}

export default Table
