import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Bhaskar',
    age: 34,
    mesaage: 'My message',
  })
  const changeMessage = () => {
    setPerson({
      ...person,
      mesaage: 'My message 1',
    })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.mesaage}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
