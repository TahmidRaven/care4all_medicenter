import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminSignin() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/adminsignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (!data.success) {
        setError(data.message);
        return;
      }
      navigate('/admin');
    } catch (error) {
      setLoading(false);
      setError('Signin failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen your-background-class">
      <div className="bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Signin</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />
          <input
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? 'Signing in...' : 'Signin'}
          </button>
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/adminsignup')}
            className="text-slate-700 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
