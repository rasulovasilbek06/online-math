import React, { useState } from "react";
import BackBtn from "./BackBtn";
import Footer from "./Footer"

const Algebra = () => {
  const questions = [
    {
      questionText: "15+15",
      answerOptions: [
        { answerText: "30", isCorrect: true },
        { answerText: "25", isCorrect: false },
        { answerText: "31", isCorrect: false },
        { answerText: "29", isCorrect: false },
      ],
    },
    {
      questionText: "45+10-(5*2)",
      answerOptions: [
        { answerText: "30", isCorrect: false },
        { answerText: "55", isCorrect: false },
        { answerText: "45", isCorrect: true },
        { answerText: "35", isCorrect: false },
      ],
    },
    {
      questionText: "(12-5)*2-10",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "15", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "4", isCorrect: true },
      ],
    },
    {
      questionText: "10+(10*2)-10",
      answerOptions: [
        { answerText: "20", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "15", isCorrect: false },
        { answerText: "25", isCorrect: false },
      ],
    },
    {
      questionText: "(10 / 2) + (38+12)",
      answerOptions: [
        { answerText: "35", isCorrect: false },
        { answerText: "55", isCorrect: true },
        { answerText: "70", isCorrect: false },
        { answerText: "75", isCorrect: false },
      ],
    },
    {
      questionText: "(50 / 5) + (5 * 5)",
      answerOptions: [
        { answerText: "35", isCorrect: true },
        { answerText: "43", isCorrect: false },
        { answerText: "32", isCorrect: false },
        { answerText: "58", isCorrect: false },
      ],
    },
    {
      questionText: "(50 / 5) + (5 * 5) - 10",
      answerOptions: [
        { answerText: "35", isCorrect: false },
        { answerText: "43", isCorrect: false },
        { answerText: "32", isCorrect: false },
        { answerText: "25", isCorrect: true },
      ],
    },
    {
      questionText: "10 - (50 / 5) + (5 * 5)",
      answerOptions: [
        { answerText: "25", isCorrect: true },
        { answerText: "43", isCorrect: false },
        { answerText: "32", isCorrect: false },
        { answerText: "54", isCorrect: false },
      ],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  const refresh = ()=>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="question_cover">
      <div className="app">
      {
        showScore
         ? <div className="section_score">
         <div>Correct answers {score} / {questions.length}</div>
         <button onClick={refresh} className="refresh_btn">Repeat the test</button>
        <BackBtn/>
     </div> :  <div className="quizz">
        <div className="question_section">
          <div className="question_count">
            <span>Question {currentQuestion + 1} </span> / {questions.length}
          </div>
          <div className="question_text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer_section">
          {questions[currentQuestion].answerOptions.map((item) => (
            <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>
              {item.answerText}
            </button>
          ))}
        </div>
      </div> 
      }
    </div>
    </div>
  );
};

export default Algebra;
