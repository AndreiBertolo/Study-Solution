import styles from './MatchCard.module.css';

export default function MatchCard({ usuario, motivo }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.nome}>{usuario.nome}</h3>
        <span className={styles.icone}>🤝</span>
      </div>
      
      <p className={styles.info}>
        <strong>Curso:</strong> {usuario.curso} | <strong>Contato:</strong> {usuario.contato || 'Disponível após o match'}
      </p>
      
      <div className={styles.motivoBox}>
        <p className={styles.motivoTitulo}><strong>Motivo do Match:</strong></p>
        <p className={styles.motivoTexto}>{motivo}</p>
      </div>
      
      <button className={styles.btnContato}>
        Entrar em Contato
      </button>
    </div>
  );
}