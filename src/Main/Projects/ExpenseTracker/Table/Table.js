import React from 'react'
import styled from "styled-components"


const StyledUl = styled.ul`

padding: 0 0;

li{
  display:flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #808080;
}
`

function Table({expenses}) {


  return (
  
    <StyledUl>
      <li>
        <span>Title</span>
        <span>Datum</span>
        <span>Amount</span>
      </li>
      {expenses.map((expense, index) => 
      <li key={index}>
        <span>{expense.title}</span>
        <span>Datum</span>
        <span>{expense.amount}</span>
      </li>)} 
      <li>
        <span>Total</span>
        <span>Summa</span>
      </li>
    </StyledUl>

  )
}

export default Table
