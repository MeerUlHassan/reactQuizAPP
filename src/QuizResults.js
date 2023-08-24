import React from 'react'
import './App.css'
import questions from './Quiz.js'

const QuizResults = (props) => {
  return (
    <div className='score-sec'>
      <h2>Quiz Completed!</h2>
      <h4>Total Score : {props.score} /10</h4>
      <h4>Correct questions are : {props.CorrectAns}</h4>
      <button onClick={props.handlePlayAgain}>Play Again!</button>
    </div>
  )
}

export default QuizResults
