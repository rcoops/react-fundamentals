// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({ className, style, children }) => (
  <div className={`box${className ? ` ${className}` : ''}`} style={{...style, fontStyle: 'italic'}}>{children}</div>
);

const smallBox = <Box className="box--small" style={{ backgroundColor: 'lightblue' }}>small lightblue box</Box>
const mediumBox = <Box className="box--medium" style={{ backgroundColor: 'pink' }}>medium pink box</Box>
const largeBox = <Box className="box--large" style={{ backgroundColor: 'orange' }}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
