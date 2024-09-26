import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Header from './components/header';
import Footer from './components/footer';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile';
import backgroundWall from './assets/backgroundWall.jpg'; // Import background image

import AdminSignup from './pages/adminsignup';
import AdminSignin from './pages/adminsignin';
import AdminDashboard from './pages/admin';

import Donation from './pages/Donations';
import AppointmentManagement from './pages/AppointmentManagement'; // Make sure this matches your file structure
import FeedbackRatings from './pages/FeedbackRatings';

export default function App() {
  return (
    <BrowserRouter>
      {/* Using flex container to ensure footer stays at the bottom */}

      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundWall})` }}
      >

        {/* Header */}
        <Header />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path="/adminsignup" element={<AdminSignup />} />
            <Route path="/adminsignin" element={<AdminSignin />} />
            <Route path='/admin/' element={<AdminDashboard />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/appointment" element={<AppointmentManagement />} /> {/* Updated to AppointmentManagement */}
            <Route path="/feedback" element={<FeedbackRatings />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
