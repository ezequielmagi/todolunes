import React from 'react'

const TodoItem = ( props ) => {
  
  const handleComplete = (e) => {
    console.log(e)
  }

  return (
    <li>
      <span className='todoItemCompleted' onClick={handleComplete}>V</span>
      <p className='todoItemText'> { props.text } </p>
      <span className='todoItemDelete'>X</span>
    </li>
  )
}

export default TodoItem