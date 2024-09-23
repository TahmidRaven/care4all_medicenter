import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditHealthLib() {
  const [formData, setFormData] = useState({
    title: '',
    symptoms: '',
    precautions: '',
    treatment: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch(`/api/health-library/entry/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch entry');
        }
        const data = await response.json();
        setFormData(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch entry. Please try again.');
        setLoading(false);
      }
    };

    fetchEntry();
  }, [id]);

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

    try {
      const response = await fetch(`/api/health-library/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update entry');
      }

      navigate('/'); // Redirect to home or library page after successful update
    } catch (error) {
      setError('Failed to update entry. Please try again.');
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Edit Health Library Entry</h1>
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
          Update Entry
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}