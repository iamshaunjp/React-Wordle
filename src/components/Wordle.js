import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordle(solution)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
    </div>
  )
}
