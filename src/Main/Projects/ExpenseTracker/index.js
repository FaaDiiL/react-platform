import React, { useEffect, useState } from 'react'

import NewExpenses from './NewExpenses/NewExpenses'
import Table from './Table/Table'

function Index() {
  const [expenses, setExpenses] = useState([])
  
  const [expenseTitle, setExpenseTitle] = useState('Title')
  const [expenseAmount, setExpenseAmount] = useState('Amount')
  
  const handleChange = ((e) => {
    
  switch(e.target.name){

    case 'titleData':
      setExpenseTitle(e.target.value)
      break;

      case 'amountData':
        setExpenseAmount(e.target.value)
        break;

      default:
      console.log('Some err')
        break;
  }
  })  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setExpenses([...expenses, {title: expenseTitle, amount: expenseAmount}])
  }


  useEffect(() => {
   console.log(expenses)
  }, [expenses])


  return (
    <div>
      <NewExpenses handleChange={handleChange} handleSubmit={handleSubmit} />
      <Table expenses={expenses}/>
      
    </div>
  )
}


export default Index
