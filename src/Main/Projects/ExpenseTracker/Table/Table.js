import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul `
width: 350px;
margin: 16px 0px;
padding: 0px;
list-style: none;

li{
  position: relative;
  padding: 10px 2px;
  width:100%;
  display: flex;
  justify-content:space-between;
}
li span {
  padding: 0px 30px;
  /* margin: 33.33.%; */
}
.expense-amount{
color: red;
}
.income-amount{
color:green;
}
.income-amount, .expense-amount {
  text-align: right;
}
.date{
  color: blue
}

/* .buttonWrapper{

display: none;

}
.buttonWrapper:hover{

display: block;

} */
.button{
  position: absolute;
  left: -40px;
  width: 10%;
  background: #ba181b;
  color: white;
  font-size: 15px;
  border: none;
  padding: 2px;
  border-radius: 6px;
}
`
function Table({expenses, handleDelete}) {

  const TotalSum = expenses.map(expense => 
    parseInt(expense.amount))
    .reduce( (acc, curr) => (acc + curr), 0)



  return (
  
    <Ul>
  {/*   <li>
        <span>Title</span>
        <span>Date</span>
        <span>Amount</span>
      </li> */}
     {expenses.map((expense, index) => 
(
      
     <li key={index}>
     <span>{expense.title}</span>
     
     <span className='date'>{expense.date}</span>
     <span className={expense.type?'expense-amount':'income-amount'}>{expense.amount}</span>
     
    
      <button onClick={() => handleDelete(expense.id)} className='button'>x</button>
    
     </li>
    
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
