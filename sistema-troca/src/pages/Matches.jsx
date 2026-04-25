import { Link } from 'react-router-dom';
import MatchCard from '../components/MatchCard';

const mockUsuarios = [
  { id: 1, nome: "João Medeiros", curso: "Engenharia de Software", ensina: "Matemática", aprende: "Violão", contato: "joao@email.com" },
  { id: 2, nome: "Maria Silva", curso: "Música", ensina: "Violão", aprende: "Matemática", contato: "maria@email.com" },
  { id: 3, nome: "Thiago Ruiz", curso: "Ciência da Computação", ensina: "React", aprende: "Inglês", contato: "thiago@email.com" },
  { id: 4, nome: "Ana Costa", curso: "Letras", ensina: "Inglês", aprende: "React", contato: "ana@email.com" }
];

export default function Matches() {
 
  const usuarioString = localStorage.getItem('usuarioLogado');
  const meuPerfil = usuarioString ? JSON.parse(usuarioString) : null;

  if (!meuPerfil) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h2>Acesso Restrito</h2>
        <p>Precisa de criar um perfil para ver as suas sugestões de troca.</p>
        <Link to="/cadastro" style={{ color: '#007bff' }}>Ir para o Cadastro</Link>
      </div>
    );
  }

  const meusMatches = mockUsuarios.map(user => {
    // Para evitar problemas com letras maiúsculas/minúsculas, passamos tudo para minúsculas (.toLowerCase())
    const euEnsinoEleAprende = meuPerfil.ensina.toLowerCase() === user.aprende.toLowerCase();
    const eleEnsinaEuAprendo = meuPerfil.aprende.toLowerCase() === user.ensina.toLowerCase();

    if (euEnsinoEleAprende && eleEnsinaEuAprendo) {
      return { ...user, motivo: `Match Perfeito! Tu ensinas ${meuPerfil.ensina} e aprendes ${meuPerfil.aprende} com esta pessoa.` };
    } 
    else if (eleEnsinaEuAprendo) {
      return { ...user, motivo: `${user.nome} pode ensinar-te ${user.ensina}.` };
    } 
    else if (euEnsinoEleAprende) {
      return { ...user, motivo: `Podes ensinar ${meuPerfil.ensina} a ${user.nome}.` };
    }
    
    return null;
    
  }).filter(user => user !== null && user.nome !== meuPerfil.nome); // Retira os nulos e garante que não faz match consigo próprio

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Meus Matches</h2>
      <p>O sistema cruzou as tuas informações e encontrou estas oportunidades de troca:</p>
      
      {meusMatches.length === 0 ? (
        <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ color: '#6c757d' }}>Nenhum match encontrado ainda.</h3>
          <p>Tente novamente mais tarde, nenhum match encontrado!</p>
        </div>
      ) : (
        meusMatches.map(match => (
          <MatchCard key={match.id} usuario={match} motivo={match.motivo} />
        ))
      )}
    </div>
  );
}