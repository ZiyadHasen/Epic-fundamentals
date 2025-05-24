// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      style={{fontStyle: 'italic', ...style}}
      className={`box ${sizeClassName}`}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: '#ADD8E6'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: '#FFC0CB'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: '#FFA500'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
