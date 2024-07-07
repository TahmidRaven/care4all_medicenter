import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      
     </Routes>
     <Footer />
     
    </BrowserRouter>
  )
}
