import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  // const secondValue = text && 'hello world'
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <>
      <h1>{text || 'Bhaskar Singh'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {text && <h1>hello world</h1>}
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error ...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
      {/* {!text && <h1>hello world</h1>} */}
    </>
  )
}

export default ShortCircuit
