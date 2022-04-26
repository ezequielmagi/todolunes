import React from 'react'

const TodoSearch = ( { searchValue, setSearchValue } ) => {

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }


  return (
    <input 
      type="text"
      value={searchValue}
      onChange={handleChange}
    />
  )
}

export default TodoSearch