import React from 'react'

// components
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        return <Row key={i} /> 
      })}
    </div>
  )
}
