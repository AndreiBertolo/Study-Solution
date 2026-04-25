import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css'; // Importando o CSS partilhado

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [contato, setContato] = useState('');
  const [ensina, setEnsina] = useState('');
  const [aprende, setAprende] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoUsuario = { nome, curso, contato, ensina, aprende };
    localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));
    alert("Perfil criado com sucesso!");
    navigate('/perfil');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Criar o meu perfil</h2>
      <p className={styles.subtitulo}>Preencha os seus dados e as habilidades que quer trocar.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Nome completo:
          <input type="text" className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>

        <label className={styles.label}>
          Curso atual:
          <input type="text" className={styles.input} value={curso} onChange={(e) => setCurso(e.target.value)} required />
        </label>

        <label className={styles.label}>
          Contacto (Email ou WhatsApp):
          <input type="text" className={styles.input} value={contato} onChange={(e) => setContato(e.target.value)} required />
        </label>

        <label className={`${styles.label} ${styles.labelDestaqueVerde}`}>
          Habilidade que pode ENSINAR:
          <input type="text" className={styles.input} placeholder="Ex: Matemática, Violão..." value={ensina} onChange={(e) => setEnsina(e.target.value)} required />
        </label>

        <label className={`${styles.label} ${styles.labelDestaqueAzul}`}>
          Habilidade que quer APRENDER:
          <input type="text" className={styles.input} placeholder="Ex: Inglês, Desenho..." value={aprende} onChange={(e) => setAprende(e.target.value)} required />
        </label>

        <button type="submit" className={styles.btnSubmit}>Salvar Perfil e Avançar</button>
      </form>
    </div>
  );
}