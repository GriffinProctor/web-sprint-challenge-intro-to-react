import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    function fetchPlanets() {
      axios.get(urlPlanets)
        .then(res => {
          console.log(res.data)
          setPlanets(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    fetchPlanets()
  }, [])
  useEffect(() => {
    function fetchCharacters() {
      axios.get(urlPeople)
        .then(res => {
          console.log(res.data)
          setCharacters(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    fetchCharacters()
  }, [])
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map(character => (
        <Character
          key={character.id}
          name={character.name}
          planet={planets.find(planet => planet.id === character.homeworld).name}
        />
      ))}
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
