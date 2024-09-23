import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-600 text-white min-h-screen p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/add-question" className="hover:text-slate-300">Add Questions</Link>
          </li>
          <li>
            <Link to="/add-to-health-library" className="hover:text-slate-300">Manage Health Library</Link>
          </li>
          <li>
            <Link to="/admin/users" className="hover:text-slate-300">Manage Users</Link>
          </li>
          <li>
            <Link to="/admin/reports" className="hover:text-slate-300">View Reports</Link>
          </li>
          <li>
            <Link to="/admin/settings" className="hover:text-slate-300">Settings</Link>
          </li>
          <li>
            <Link to="/admin/logout" className="hover:text-slate-300">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <header className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
          <button className="bg-slate-700 text-white p-2 rounded-lg">Add New User</button>
        </header>

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link to="/add-question" className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-100 transition">
            <h2 className="text-xl font-semibold">Add Questions</h2>
          </Link>
          <Link to="/add-to-health-library" className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-100 transition">
            <h2 className="text-xl font-semibold">Manage Health Library</h2>
          </Link>
          <Link to="/admin/users" className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-100 transition">
            <h2 className="text-xl font-semibold">Manage Users</h2>
          </Link>
          <Link to="/admin/reports" className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-100 transition">
            <h2 className="text-xl font-semibold">View Reports</h2>
          </Link>
          <Link to="/admin/settings" className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-100 transition">
            <h2 className="text-xl font-semibold">Settings</h2>
          </Link>
          <Link to="/admin/logout" className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-100 transition">
            <h2 className="text-xl font-semibold">Logout</h2>
          </Link>
        </div>

        {/* Placeholder for future content */}
        <div className="bg-white p-4 rounded-lg shadow-lg mt-5">
          <h2 className="text-xl font-semibold">Welcome to the Admin Dashboard</h2>
          <p className="mt-2">Use the cards above to navigate through different sections.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
