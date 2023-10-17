import React, { useState } from 'react'

function Character({ name, planet }) { // ❗ Add the props
  const [showPlanet, setShowPlanet] = useState(false)
  const togglePlanet = () => {
    setShowPlanet(!showPlanet)
  }
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'>
      <h3 onClick={togglePlanet} className='character-name'>{name}</h3>

      {showPlanet && (

        <p>{"Planet: "}
          <span className='character-planet'>{planet}</span>
        </p>

      )}
    </div>
  )
}

export default Character
