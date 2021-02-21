import React from 'react'

function NewExpenses({handleChange, handleIncome, handleExpense}) {

     return (
          <div>
               <h2>Expense Tracker</h2>
               <form>
                   <input onChange={handleChange} name ='titleData' type="text" placeholder="Income/Expense title"  />
                   <input  onChange={handleChange} name ='amountData' min='0' type="number" placeholder="Sum" />
                   
                   <button onClick={handleIncome} type="submit" className="incomeButton">Income</button>
                   <button onClick={handleExpense} type="submit" className="expenseButton">Expense</button>
               </form>
          </div>
     )
}

export default NewExpenses