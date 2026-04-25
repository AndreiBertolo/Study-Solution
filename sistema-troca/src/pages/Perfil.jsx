import { Link } from 'react-router-dom';
import styles from './Perfil.module.css';

export default function Perfil() {
  const usuarioString = localStorage.getItem('usuarioLogado');
  const usuario = usuarioString ? JSON.parse(usuarioString) : null;

  if (!usuario) {
    return (
      <div className={styles.aviso}>
        <h2>Nenhum perfil encontrado!</h2>
        <p>Precisa de criar um perfil primeiro.</p>
        <Link to="/cadastro" className={styles.linkAviso}>Ir para o Cadastro</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>O Meu Perfil</h2>
      
      <div className={styles.card}>
        <h3 className={styles.nome}>{usuario.nome}</h3>
        <p className={styles.info}><strong>Curso:</strong> {usuario.curso}</p>
        <p className={styles.info}><strong>Contacto:</strong> {usuario.contato}</p>
        
        <hr className={styles.linha} />
        
        <h4 className={styles.subtitulo}>As Minhas Habilidades</h4>
        
        <div className={styles.badgeContainer}>
          <span className={styles.badgeEnsina}>
            Ensina: {usuario.ensina}
          </span>
          <span className={styles.badgeAprende}>
            Aprende: {usuario.aprende}
          </span>
        </div>
      </div>
    </div>
  );
}