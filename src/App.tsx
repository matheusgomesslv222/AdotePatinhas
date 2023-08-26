import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './Pages/HomePage.tsx';
import LoginPage from './Pages/LoginPage.tsx';
import AboutPage from './Pages/AboutPage.tsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/sobre" element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
