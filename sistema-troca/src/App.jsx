import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Listagem from './pages/Listagem';
import Matches from './pages/Matches';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/listagem" element={<Listagem />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}