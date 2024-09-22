import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Header from './components/header';
import Footer from './components/footer';
import NewsPage from './pages/NewsPage';
import LocationPage from './pages/LocationPage';

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
            <Route path="/news" element={<NewsPage />} />
            <Route path="/find-locations" element={<LocationPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
