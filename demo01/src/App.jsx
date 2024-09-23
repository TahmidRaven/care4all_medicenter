import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Header from './components/header';
import Footer from './components/footer';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile';
import AddQuestion from './pages/add_question';
import TakeQuiz from './pages/take_quiz';
import AddToHealthLib from './pages/add_to_health_lib';
import HealthLibrary from './pages/health_library';
 


export default function App() {
  return (
    <BrowserRouter>
      {/* Using flex container to ensure footer stays at the bottom */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/add-question' element={<AddQuestion />} />
            <Route path="/take-quiz" element={<TakeQuiz />} />
            <Route path="/add-to-health-library" element={<AddToHealthLib />} />
            <Route path="/health-library" element={<HealthLibrary />} />
            

            <Route element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
             </Route>
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
