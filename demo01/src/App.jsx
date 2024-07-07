import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Signin from './pages/signin';

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      
     </Routes>
     
    </BrowserRouter>
  )
}
