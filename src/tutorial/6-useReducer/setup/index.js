import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const reducer = (state, action) => {}

const defaultState = {
  people: [],
  isModelOpen: false,
  modelContent: 'hello world',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  // const [people, setPeople] = useState(data)
  // const [showModel, setShowModel] = useState(false)

  const handelSubmit = (e) => {
    e.preventDefault()
    if (name) {
    } else {
    }
  }
  return (
    <>
      {state.isModelOpen && <Modal />}
      <form onSubmit={handelSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
