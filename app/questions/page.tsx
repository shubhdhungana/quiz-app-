// questions folder related, this file manage quiz question part
"use client"; // yo file client side ma execute huncha, tei bhayera use gareko
import { useState, useEffect } from "react"; 
import { QuizQuestion, QuizState } from "../../types"; // types import gareko, type definitions types.ts file ma xa
import Link from "next/link"; // navigation ko lagi link import gareko Next.js bata

// questions ko array banako, sabai question yaha define xa
const questions: QuizQuestion[] = [
  {
    question: "Which actor played the lead in Baazigar?",
    answers: ["Shahrukh Khan", "Aamir Khan", "Salman Khan"],
    correctAnswer: "Shahrukh Khan",
    type: "multiple-choice", 
  },
  {
    question: "Who directed 3 Idiots?",
    answers: ["SS Rajamouli", "Rajkumar Hirani", "Nitesh Tiwari"],
    correctAnswer: "Rajkumar Hirani",
    type: "multiple-choice",
  },
  {
    question: "What is the highest-grossing Bollywood movie of all time (as of 2024)?",
    answers: ["Dangal", "Pathaan", "Baahubali: The Conclusion"],
    correctAnswer: "Dangal",
    type: "multiple-choice",
  },
  {
    question: "Which Bollywood movie won India's first-ever Oscar for Best Original Song?",
    answers: ["RRR", "Lagaan", "Slumdog Millionaire"],
    correctAnswer: "RRR",
    type: "multiple-choice",
  },
  {
    question: "Who composed the music for the movie Rockstar?",
    answers: ["A.R. Rahman", "Pritam", "Shankar-Ehsaan-Loy"],
    correctAnswer: "A.R. Rahman",
    type: "multiple-choice",
  },
  {
    question: "In which year was the movie Sholay released?",
    answers: ["1972", "1975", "1978"],
    correctAnswer: "1975",
    type: "multiple-choice",
  },
  {
    question: "Which Bollywood actor was honored with the Dadasaheb Phalke Award in 2022?",
    answers: ["Amitabh Bachchan", "Rajinikanth", "Asha Parekh"],
    correctAnswer: "Asha Parekh",
    type: "multiple-choice",
  },
  // aru questions yastai format ma xa
];

// QuestionsPage component banako, yo quiz ke page ho
const QuestionsPage = () => {
  // state banako quiz manage garna
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0, // kun question ma xa
    userAnswers: [], // user le diye ko answer store garna
    score: 0, // score ko lagi
    timer: 30, // question ko time limit
    isQuizFinished: false, // quiz sakiyo ki chaina check garna
  });

  // timer manage garna, question change huda automatically run huncha
  useEffect(() => {
    if (quizState.timer <= 0 || quizState.isQuizFinished) return; // timer sakiyo bhane ya quiz sakiyo bhane stop
    const timer = setInterval(() => {
      setQuizState((prevState) => ({
        ...prevState,
        timer: prevState.timer - 1,
      })); // timer 1 second le ghatauna
    }, 1000);
    return () => clearInterval(timer); // clean up interval pachi
  }, [quizState.timer]); // timer state ma depend xa

  // user le answer select garyo bhane handle garna
  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = questions[quizState.currentQuestion]; // current question fetch garna
    const isCorrect = answer === currentQuestion.correctAnswer; // answer right xa ki wrong check garna
    setQuizState((prevState) => {
      const updatedAnswers = [...prevState.userAnswers, answer]; // user ko answer add garna
      const nextQuestion = prevState.currentQuestion + 1; // agadi ko question ma jane

      // sabai question answer bhaye, quiz sakiyo banaucha
      if (nextQuestion >= questions.length) {
        return {
          ...prevState,
          userAnswers: updatedAnswers, // update answer
          score: isCorrect ? prevState.score + 1 : prevState.score, // correct xa bhane score badhauna
          isQuizFinished: true, // quiz sakiyo state ma true set garna
        };
      }

      // baki question xa bhane agadi badhcha
      return {
        ...prevState,
        userAnswers: updatedAnswers,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        currentQuestion: nextQuestion, // next question ma jancha
        timer: 30, // next question ko lagi timer reset garna
      };
    });
  };

  // sabai question answer bhaye bhane score dekhaune part
  if (quizState.isQuizFinished) {
    return (
      <div className="result-page">
        <h2>
          Your Score: {quizState.score} out of {questions.length}
        </h2>{" "}
        {/* final score dekhaune */}
        <Link href="/">
          {" "}
          {/* home page ma jane link */}
          <button className="finish-btn">End</button> {/* quiz end ko button */}
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[quizState.currentQuestion]; // current question access garna

  return (
    <div className="question-container">
      <h2>{currentQuestion?.question}</h2> {/* question text dekhaune */}
      {currentQuestion?.answers.map((answer) => (
        <button key={answer} onClick={() => handleAnswerSelect(answer)}>
          {" "}
          {/* answer button */}
          {answer} {/* answer text dekhaune */}
        </button>
      ))}
      <p>Time remaining: {quizState.timer}s</p> {/* remaining time dekhaune */}
    </div>
  );
};

export default QuestionsPage; // component export garna
