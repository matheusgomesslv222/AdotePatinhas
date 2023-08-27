import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './Pages/HomePage.tsx';
import LoginPage from './Pages/LoginPage.tsx';

function App() {
  // Código que renderiza as rotas de cada pagina 
  return (
      <HashRouter>  
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </HashRouter>
  )
}

export default App
