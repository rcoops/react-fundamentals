// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef();
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value)
  };

  const onChange = ({target: { value }}) => {
    const isValid = value === value?.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={inputRef} onChange={onChange} />
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
      { !!error && <div role="alert" style={{color: '#AA0000'}}>{error}</div> }
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
