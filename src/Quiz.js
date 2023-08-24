import React, { useState } from "react";
import "./App.css";
import QuizResults from "./QuizResults";
// import questions from './QuizData';

const questions = [
  {
    id: 1,
    quesTxt:
      "In React, which type of component is capable of maintaining its own internalstate?",
    ansOpts: [
      { ansTxt: "Funcional component", isCorrect: false },
      { ansTxt: "Stateful component", isCorrect: true },
      { ansTxt: "Stateless component", isCorrect: false },
      { ansTxt: "Pure component", isCorrect: false },
    ],
  },
  {
    id: 2,
    quesTxt: "When was React Released ?",
    ansOpts: [
      { ansTxt: 2015, isCorrect: false },
      { ansTxt: 2012, isCorrect: false },
      { ansTxt: 2013, isCorrect: true },
      { ansTxt: 2016, isCorrect: false },
    ],
  },
  {
    id: 3,
    quesTxt:
      "What syntax extension is used in React to write components that look like TML butare actually JavaScript?",
    ansOpts: [
      { ansTxt: "HTML", isCorrect: false },
      { ansTxt: "JSX", isCorrect: true },
      { ansTxt: "JSS", isCorrect: false },
      { ansTxt: "XML", isCorrect: false },
    ],
  },
  {
    id: 4,
    quesTxt:
      "What does React use to improve performance by minimizing direct updates o the atual DOM?",
    ansOpts: [
      { ansTxt: "irtual DOM", isCorrect: true },
      { ansTxt: "Shadow DOM", isCorrect: false },
      { ansTxt: "Actual DOM", isCorrect: false },
      { ansTxt: "Render DOM", isCorrect: false },
    ],
  },
  {
    id: 5,
    quesTxt: "Who Introduced React JS?",
    ansOpts: [
      { ansTxt: "Pete Hamsdon", isCorrect: false },
      { ansTxt: "Mark Toddy", isCorrect: false },
      { ansTxt: "Jorden James", isCorrect: false },
      { ansTxt: "Jordan Walke", isCorrect: true },
    ],
  },
];

export default function Quiz() {
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [CorrectAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [click, setClick] = useState(false);
  const handleAnsOpts = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 2);
      setCorrectAns(CorrectAns + 1);
    }
    setClick(true);
  };
  const handleNextBtn = () => {
    setClick(false);
    const nextQues = currentQues + 1;
    if (nextQues < questions.length) {
      setCurrentQues(nextQues);
    } else {
      setShowResult(true);
    }
  };
  const handlePlayAgain=()=>{
    setScore(0);
    setCurrentQues(0)
    setCorrectAns(0);
    setShowResult(false);
  }
  return (
    <>
      <div className="topic">Test your knowledge on <span>React!</span></div>
      <div className="app">
        {showResult ? (
          <QuizResults score={score} CorrectAns={CorrectAns} handlePlayAgain={handlePlayAgain} />
        ) : (
          <>
            <div className="ques-sec">
              <h5>Score: {score}</h5>
              <div className="ques-count">
                <span>
                  Question {currentQues + 1} of {questions.length}
                </span>
              </div>
              <div className="ques-Txt">{questions[currentQues].quesTxt}</div>
            </div>
            <div className="ans-sec">
              {questions[currentQues].ansOpts.map((ans, index) => {
                return (
                  <button
                  className={`button ${click  && ans.isCorrect? "correct" : "button"}`}
                  disabled={click}
                    key={index}
                    onClick={() => handleAnsOpts(ans.isCorrect)}
                  >
                    {ans.ansTxt}
                  </button>
                );
              })}
              <div className="actions">
                <button onClick={handlePlayAgain}>Quit</button>
                <button disabled={!click} onClick={handleNextBtn}>Next</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
