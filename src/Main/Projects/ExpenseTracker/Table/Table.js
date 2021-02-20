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

  const TotalSum = expenses.map(expense => parseInt(expense.amount)).reduce( (acc, curr) => (acc + curr), 0)



  return (
  
    <Ul>
    <li>
        <span>Title</span>
        <span>Datum</span>
        <span>Amount</span>
      </li>
     {expenses.map((expense, index) => 
(
     <li key={index}>
     <span>{expense.title}</span>
     <span>{expense.date}</span>
     <span className={`${(expense.type)?'expense-amount':'income-amount'}`}>{expense.amount}</span></li>
)     
     )} 
     <li>
        <span>Total</span>
        <span>{TotalSum}</span>
      </li>
    </Ul>

  )
}

export default Table
