import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackRatings = () => {
  const [providers, setProviders] = useState([]);
  const [feedback, setFeedback] = useState({
    providerId: '',
    rating: 0,
    review: '',
    comments: ''
  });

  useEffect(() => {
    // Fetch providers from the server
    axios.get('/api/providers')
      .then(response => {
        setProviders(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the providers!', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback data to the server
    axios.post('/api/feedback', feedback)
      .then(response => {
        alert('Feedback submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error submitting the feedback!', error);
      });
  };

  return (
    <div className="feedback-ratings p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Feedback and Ratings</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Select Provider</label>
            <select
              name="providerId"
              value={feedback.providerId}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select a provider</option>
              {providers.map(provider => (
                <option key={provider.id} value={provider.id}>{provider.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={feedback.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Review</label>
            <textarea
              name="review"
              value={feedback.review}
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