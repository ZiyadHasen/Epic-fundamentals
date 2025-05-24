// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef()
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  const changeHandler = e => {
    const inputValue = e.target.value
    setValue(inputValue)
    const isValid = inputValue === inputValue.toLowerCase()
    setError(isValid ? null : 'Username must be lowercase')
  }

  const onSubmitUser = e => {
    e.preventDefault()
    if (!error) {
      onSubmitUsername(value)
    }
  }
  return (
    <form onSubmit={onSubmitUser}>
      <div>
        <label>Username:</label>
        <input
          onChange={changeHandler}
          ref={inputRef}
          type="text"
          name="username"
        />
        <p style={{color: 'red', marginTop: '3'}}>{error}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)

  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
