import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './Perfil.module.css';

export default function Perfil() {
  const { usuario, login } = useContext(AuthContext); // Usamos o login para atualizar o contexto
  
  // Estados para controlar a edição
  const [editando, setEditando] = useState(false);
  const [ensina, setEnsina] = useState(usuario?.ensina || '');
  const [aprende, setAprende] = useState(usuario?.aprende || '');

  if (!usuario) {
    return (
      <div className={styles.aviso}>
        <h2>Nenhum perfil encontrado!</h2>
        <p>Precisa de criar um perfil primeiro.</p>
        <Link to="/cadastro" className={styles.linkAviso}>Ir para o Cadastro</Link>
      </div>
    );
  }

  const handleSalvar = () => {
    // 1. Criar o novo objeto de usuário com as habilidades atualizadas
    const usuarioAtualizado = { ...usuario, ensina, aprende };
    
    // 2. Salvar no localStorage (para persistir após o refresh)
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtualizado));
    
    // 3. Atualizar o Contexto Global (para a NavBar e outras páginas verem a mudança)
    login(usuarioAtualizado);
    
    // 4. Sair do modo de edição
    setEditando(false);
    alert("Habilidades atualizadas com sucesso!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>O Meu Perfil</h2>
      
      <div className={styles.card}>
        <h3 className={styles.nome}>{usuario.nome}</h3>
        <p className={styles.info}><strong>Curso:</strong> {usuario.curso}</p>
        <p className={styles.info}><strong>Contacto:</strong> {usuario.contato}</p>
        
        <hr className={styles.linha} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h4 className={styles.subtitulo}>As Minhas Habilidades</h4>
          {!editando && (
            <button 
              onClick={() => setEditando(true)}
              style={{ padding: '5px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              Editar ✎
            </button>
          )}
        </div>
        
        {editando ? (
          <div className={styles.formEdicao}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Ensina:</label>
              <input 
                type="text" 
                className={styles.input} 
                value={ensina} 
                onChange={(e) => setEnsina(e.target.value)} 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Aprende:</label>
              <input 
                type="text" 
                className={styles.input} 
                value={aprende} 
                onChange={(e) => setAprende(e.target.value)} 
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handleSalvar} className={styles.badgeEnsina} style={{ border: 'none', cursor: 'pointer' }}>
                Guardar Alterações
              </button>
              <button onClick={() => setEditando(false)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.badgeContainer}>
            <span className={styles.badgeEnsina}>
              Ensina: {usuario.ensina}
            </span>
            <span className={styles.badgeAprende}>
              Aprende: {usuario.aprende}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}