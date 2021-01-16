import React from 'react'
//Skapa en hook för att nå till todotexten
// Skapa ett objekt med varje todo egenskaper (unika id)

//todoArr ska skickas till localStorage med en funktion
//todoArr ska skickas till TodoItem.js med props

function AddListItem(props) {

     return (
          <>
               <form>
                    <label>
                         Write a todo:                  //B
                    <input id="search" type="text" onChange={props.typeName} />
                    </label>
                    <button onClick={props.onClick}>TO LOCAL AND FROM LOCAL TO NEW LI IN UL</button>
               </form>

          </>
     )

}



export default AddListItem
