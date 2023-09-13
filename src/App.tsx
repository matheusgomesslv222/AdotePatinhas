import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './Pages/HomePage.tsx';
import LoginPage from './Pages/LoginPage.tsx';

function App() {
  // Código que renderiza as rotas de cada pagina 
  return (
      <BrowserRouter>  
        <Routes>
          <Route path="/AdotePatinhas/" element={<HomePage/>} />
          <Route path="/AdotePatinhas/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App