import React, { useState, useEffect } from 'react';

const FeedbackRatings = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/feedback', feedback)
      .then(response => {
        console.log('Feedback submitted successfully:', response.data);
        // Optionally, reset the form
        setFeedback({
          name: '',
          email: '',
          comments: ''
        });
      })
      .catch(error => {
        console.error('There was an error submitting the feedback!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>
      <div className="bg-white shadow-md rounded p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Comments</label>
            <textarea
              name="comments"
              value={feedback.comments}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackRatings;