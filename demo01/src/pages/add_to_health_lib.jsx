import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddToHealthLib() {
  const [formData, setFormData] = useState({
    title: '',
    symptoms: '',
    precautions: '',
    treatment: ''
  });
  const [error, setError] = useState(null);
  const [showEmptyFieldsWarning, setShowEmptyFieldsWarning] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      setError('Title is mandatory');
      return;
    }

    if (!formData.symptoms.trim() || !formData.precautions.trim() || !formData.treatment.trim()) {
      setShowEmptyFieldsWarning(true);
      return;
    }

    try {
      await submitData();
      navigate('/'); // Assuming you have a route for the home
    } catch (error) {
      setError('Failed to add entry. Please try again.');
    }
  };

  const submitData = async () => {
    const dataToSubmit = {
      ...formData,
      symptoms: formData.symptoms.trim() || 'no data',
      precautions: formData.precautions.trim() || 'no data',
      treatment: formData.treatment.trim() || 'no data'
    };

    const response = await fetch('/api/health-library/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (!response.ok) {
      throw new Error('Failed to add entry');
    }
  };

  const handleConfirmSubmit = async () => {
    setShowEmptyFieldsWarning(false);
    try {
      await submitData();
      navigate('/');
    } catch (error) {
      setError('Failed to add entry. Please try again.');
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Add to Health Library</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title*"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />
        <textarea
          placeholder="Symptoms"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          rows="3"
        />
        <textarea
          placeholder="Precautions"
          name="precautions"
          value={formData.precautions}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          rows="3"
        />
        <textarea
          placeholder="Treatment"
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          rows="3"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Add Entry
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      
      {showEmptyFieldsWarning && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Warning</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Some fields are empty. Do you want to continue and fill them with 'no data'?
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={handleConfirmSubmit}
                >
                  Yes, Continue
                </button>
                <button
                  className="mt-3 px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setShowEmptyFieldsWarning(false)}
                >
                  No, I'll fill them
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}