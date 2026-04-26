import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import MatchCard from '../components/MatchCard';
import styles from './Matches.module.css';

export default function Matches() {
  const { usuario } = useContext(AuthContext);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (usuario) {
      const todosAlunos = [
        { id: 1, nome: "Ana Silva", curso: "Engenharia", ensina: usuario.aprende, aprende: usuario.ensina, contato: "ana@email.com" },
        { id: 2, nome: "Bruno Costa", curso: "Design", ensina: usuario.aprende, aprende: "Física", contato: "99988-7766" }
      ];

      // Filtra apenas quem tem o "Match Perfeito" (Eu ensino o que ele quer e vice-versa)
      const encontrados = todosAlunos.filter(aluno => 
        aluno.ensina.toLowerCase() === usuario.aprende.toLowerCase()
      );
      
      setMatches(encontrados);
    }
  }, [usuario]);

  if (!usuario) {
    return (
      <div className={styles.container}>
        <div className={styles.semMatches}>
          <h2>Faça login para ver os seus matches.</h2>
          <Link to="/login" className={styles.linkExplorar}>Ir para Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.titulo}>Meus Matches</h1>
        <p className={styles.subtitulo}>
          Encontramos estes alunos que possuem interesses complementares aos seus. 
          Aproveite para trocar conhecimentos!
        </p>
      </header>

      <div className={styles.lista}>
        {matches.length > 0 ? (
          matches.map(m => (
            <MatchCard 
              key={m.id} 
              usuario={m} 
              motivo={`Você quer aprender ${usuario.aprende} e ${m.nome} pode te ensinar! Além disso, ele tem interesse em ${usuario.ensina}.`} 
            />
          ))
        ) : (
          <div className={styles.semMatches}>
            <h3>Ainda não encontramos o match perfeito...</h3>
            <p>Tente ajustar as suas habilidades no perfil para aumentar as chances.</p>
            <Link to="/perfil" className={styles.linkExplorar}>Editar Perfil</Link>
          </div>
        )}
      </div>
    </div>
  );
}