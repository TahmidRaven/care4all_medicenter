import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the admin is authenticated, otherwise redirect to the admin signin page
    const isAdminAuthenticated = localStorage.getItem('adminToken'); // Assuming you store an admin token after login
    if (!isAdminAuthenticated) {
      navigate('/adminsignin');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear admin token from localStorage and redirect to admin signin page
    localStorage.removeItem('adminToken');
    navigate('/adminsignin');
  };

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-8'>Admin Dashboard</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Sample Admin Cards - Customize as needed */}
        <div className='bg-slate-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Manage Users</h2>
          <p>View and manage registered users.</p>
          <button className='bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg'>Go to Users</button>
        </div>

        <div className='bg-slate-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>View Reports</h2>
          <p>Access system reports and logs.</p>
          <button className='bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg'>View Reports</button>
        </div>

        <div className='bg-slate-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Settings</h2>
          <p>Adjust system settings and preferences.</p>
          <button className='bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg'>Go to Settings</button>
        </div>
      </div>

      <div className='mt-8 text-center'>
        <button
          onClick={handleLogout}
          className='bg-red-600 text-white px-4 py-2 rounded-lg hover:opacity-90'
        >
          Logout
        </button>
      </div>
    </div>
  );
}
