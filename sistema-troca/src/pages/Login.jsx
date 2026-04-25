import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './Auth.module.css';

export default function Login() {
  const [contato, setContato] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarioString = localStorage.getItem('usuarioLogado');
    const usuarioSalvo = usuarioString ? JSON.parse(usuarioString) : null;

    if (usuarioSalvo && usuarioSalvo.contato === contato) {
      login(usuarioSalvo);
      alert("Bem-vindo de volta!");
      navigate('/perfil');
    } else {
      alert("Contato não encontrado. Por favor, verifique ou faça o Cadastro.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Entrar</h2>
      <p className={styles.subtitulo}>Acesse à sua conta para ver os seus matches.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          O seu Contato (Email ou WhatsApp):
          <input 
            type="text" 
            className={styles.input}
            value={contato} 
            onChange={(e) => setContato(e.target.value)} 
            placeholder="Digite o contacto usado no cadastro..."
            required 
          />
        </label>

        <button type="submit" className={styles.btnSubmit}>Entrar no Sistema</button>
      </form>

      <p className={styles.textoRodape}>
        Ainda não tem conta? <Link to="/cadastro" className={styles.link}>Criar perfil</Link>
      </p>
    </div>
  );
}