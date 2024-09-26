import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackRatings = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    comments: ''
  });

  // Fetch feedbacks from the server
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/api/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/feedbacks', feedback);
      console.log('Feedback submitted successfully:', response.data);
      // Reset the form
      setFeedback({
        name: '',
        email: '',
        comments: ''
      });
      // Fetch feedbacks again to update the list
      const fetchResponse = await axios.get('/api/feedbacks');
      setFeedbacks(fetchResponse.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>
      <div className="mb-4">
        {feedbacks.length === 0 ? (
          <p>No feedbacks submitted yet.</p>
        ) : (
          feedbacks.map((fb) => (
            <div key={fb._id} className="mb-2 p-4 bg-gray-100 border border-gray-300 rounded">
              <h2 className="font-bold">{fb.name}</h2>
              <p>{fb.comments}</p>
              <p className="text-gray-500">{new Date(fb.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Submit Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Comments</label>
            <textarea
              name="comments"
              value={feedback.comments}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackRatings;
