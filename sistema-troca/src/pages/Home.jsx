import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>
        Aprenda algo novo. <br />
        <span className={styles.destaque}>Ensine o que sabe.</span>
      </h1>
      
      <p className={styles.subtitulo}>
        A plataforma colaborativa onde estudantes trocam conhecimentos de forma gratuita. 
    
      </p>
      
      <div className={styles.botoes}>
        <Link to="/cadastro" className={styles.btnPrimario}>Começar Agora</Link>
        <Link to="/listagem" className={styles.btnSecundario}>Explorar Alunos</Link>
      </div>
    </div>
  );
}