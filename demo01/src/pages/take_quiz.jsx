import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TakeQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions/random');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAnswerClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers, { question: questions[currentQuestion], userAnswer: selectedAnswer, isCorrect }]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const shuffleAnswers = (question) => {
    const answers = [...question.falseAnswers, question.correctAnswer];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  };

  if (loading) {
    return <div className="text-center mt-10">Loading quiz...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Take Quiz</h1>
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">
            You scored {score} out of {questions.length}
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Review Your Answers:</h3>
            {userAnswers.map((item, index) => (
              <div key={index} className={`mb-4 p-3 rounded-lg ${item.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-semibold">{item.question.question}</p>
                <p>Your answer: {item.userAnswer}</p>
                {!item.isCorrect && (
                  <p className="text-green-700">Correct answer: {item.question.correctAnswer}</p>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-slate-700 text-white p-3 rounded-lg hover:opacity-95"
          >
            Back to Home
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <span className="text-lg font-semibold">Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <p className="text-xl mb-4">{questions[currentQuestion].question}</p>
          <div className="flex flex-col gap-2">
            {shuffleAnswers(questions[currentQuestion]).map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className="bg-slate-200 p-3 rounded-lg hover:bg-slate-300"
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}