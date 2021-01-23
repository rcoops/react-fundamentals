// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef();;
  const [username, setUsername] = useState(() => '');
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value)
  };

  const onChange = ({ target: { value } }) => setUsername(value?.toLowerCase());
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={inputRef} onChange={onChange} value={username} />
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
