import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from './NavBar.module.css'; 

export default function NavBar() {
  const { usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={styles.header}>
      <div>
        <Link to="/" className={styles.logo}>
          Study <span>Match</span>
        </Link>
      </div>

      <div className={styles.menu}>
        {usuario ? (
          <>
            <span className={styles.saudacao}>
              Olá, <strong>{usuario.nome.split(' ')[0]}</strong>
            </span>
            <Link to="/listagem" className={styles.link}>Explorar Alunos</Link>
            <Link to="/matches" className={styles.linkDestaque}>Meus Matches</Link>
            <Link to="/perfil" className={styles.link}>Meu Perfil</Link>
            
            <button onClick={handleLogout} className={styles.btnSair}>
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/cadastro" className={styles.link}>Cadastro</Link>
            <Link to="/login" className={styles.link}>Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}