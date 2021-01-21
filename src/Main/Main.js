import React, { useState } from 'react'

import AddListItem from '../AddListItem/AddListItem'
import List from '../List/List'

function Main() {
     
     const [inputVal,setInputVal] = useState('Default Todo')
     const [liVal,setLiVal] = useState('Default Todo')

     const handleChange = (e) => {
          setInputVal(e.target.value)
     }

     const handleOnSubmit = () => {
          setLiVal(inputVal)
     }

     return (
          <>
               <AddListItem handleOnChange={handleChange} handleSubmit={handleOnSubmit} />
               <List mainSetLi={liVal} />
          </>
     )
}

export default Main
