import React from 'react'

const TodoList = (props) => {
  return (
    <section className='todoList-container'>
      <ul>
        { props.children }
      </ul>
    </section>
  )
}

export default TodoList