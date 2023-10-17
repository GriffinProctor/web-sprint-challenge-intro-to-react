import React, { useState } from 'react'

function Character({ name, homeWorld }) { // ❗ Add the props
  const [showHomeWorld, setShowHomeWorld] = useState(false)
  const toggle = () => {
    setShowHomeWorld(!showHomeWorld)
  }
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div onClick={toggle} className='character-card'>
      <h3 className='character-name'>{name}</h3>

      {showHomeWorld && (

        <p>{"Planet: "}
          <span className='character-planet'>{homeWorld}</span>
        </p>

      )}
    </div>
  )
}

export default Character
