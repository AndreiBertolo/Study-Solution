import styles from './Listagem.module.css';

// Dados fictícios para popular a lista (Simulando outros alunos da faculdade)
const ALUNOS_MOCK = [
  { id: 1, nome: "Ana Silva", curso: "Engenharia", ensina: "C++", aprende: "Cálculo II" },
  { id: 2, nome: "Bruno Costa", curso: "Design", ensina: "Photoshop", aprende: "HTML/CSS" },
  { id: 3, nome: "Carla Souza", curso: "Letras", ensina: "Inglês", aprende: "Espanhol" },
  { id: 4, nome: "Diego Lima", curso: "Sistemas de Informação", ensina: "Python", aprende: "React" },
  { id: 5, nome: "Fernanda Dias", curso: "Administração", ensina: "Excel Avançado", aprende: "Marketing Digital" },
  { id: 6, nome: "Gabriel Moura", curso: "Psicologia", ensina: "Escrita Acadêmica", aprende: "Estatística" },
];

export default function Listagem() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.titulo}>Explorar Alunos</h2>
        <p className={styles.subtitulo}>Conheça a comunidade e encontre parceiros de estudo.</p>
      </header>

      <div className={styles.grid}>
        {ALUNOS_MOCK.map((aluno) => (
          <div key={aluno.id} className={styles.card}>
            <div className={styles.nome}>{aluno.nome}</div>
            <div className={styles.curso}>{aluno.curso}</div>
            
            <div className={styles.habilidades}>
              <p className={styles.itemHabilidade}>
                <span className={`${styles.badge} ${styles.badgeEnsina}`}>ENSINA</span> 
                <strong>{aluno.ensina}</strong>
              </p>
              <p className={styles.itemHabilidade}>
                <span className={`${styles.badge} ${styles.badgeAprende}`}>QUER APRENDER</span> 
                <strong>{aluno.aprende}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}