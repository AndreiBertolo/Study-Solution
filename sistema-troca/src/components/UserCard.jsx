import styles from './UserCard.module.css';

export default function UserCard({ usuario }) {
  return (

    <div className={styles.card}>
      <h3 className={styles.nome}>{usuario.nome}</h3>
      
      <p className={styles.curso}>
        <strong>Curso:</strong> {usuario.curso}
      </p>
      
      <div className={styles.badgeContainer}>
        <span className={styles.badgeEnsina}>
          Ensina: {usuario.ensina}
        </span>
        
        <span className={styles.badgeAprende}>
          Aprende: {usuario.aprende}
        </span>
      </div>
    </div>
  );
}