import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddQuestion() {
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [falseAnswers, setFalseAnswers] = useState(['', '', '']);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFalseAnswerChange = (index, value) => {
    const newFalseAnswers = [...falseAnswers];
    newFalseAnswers[index] = value;
    setFalseAnswers(newFalseAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/questions/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          correctAnswer,
          falseAnswers,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add question');
      }

      setQuestion('');
      setCorrectAnswer('');
      setFalseAnswers(['', '', '']);
      alert('Question added successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Add a New Question</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="bg-slate-100 p-3 rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Correct Answer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className="bg-slate-100 p-3 rounded-lg"
          required
        />
        {falseAnswers.map((answer, index) => (
          <input
            key={index}
            type="text"
            placeholder={`False Answer ${index + 1}`}
            value={answer}
            onChange={(e) => handleFalseAnswerChange(index, e.target.value)}
            className="bg-slate-100 p-3 rounded-lg"
            required
          />
        ))}
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Adding...' : 'Add Question'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}