import { Button } from 'react-bootstrap'
import React from 'react'



function Toog({handleToogle}) {

  

  return (
    <div>
    <Button onClick={()=>{handleToogle(
      (previousdarkMode)=>!previousdarkMode
      )}} 
      className='save'><span class="material-symbols-outlined">
      clear_day
      </span></Button>
    </div>
  )
}

export default Toog