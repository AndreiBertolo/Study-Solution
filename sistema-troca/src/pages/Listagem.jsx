import { useState } from 'react';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar'; // 1. Importamos a barra de pesquisa

const mockUsuarios = [
  { id: 1, nome: "João Medeiros", curso: "Engenharia de Software", ensina: "Matemática", aprende: "Violão" },
  { id: 2, nome: "Maria Silva", curso: "Música", ensina: "Violão", aprende: "Matemática" },
  { id: 3, nome: "Thiago Ruiz", curso: "Ciência da Computação", ensina: "React", aprende: "Inglês" },
  { id: 4, nome: "Ana Costa", curso: "Letras", ensina: "Inglês", aprende: "React" }
];

export default function Listagem() {
  const [busca, setBusca] = useState('');

  const usuariosFiltrados = mockUsuarios.filter((user) => {
    if (busca === '') return true;
    
    const termo = busca.toLowerCase();
    const ensina = user.ensina.toLowerCase();
    const aprende = user.aprende.toLowerCase();

    return ensina.includes(termo) || aprende.includes(termo);
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Explorar Alunos</h2>
      <p>Veja todos os estudantes registados na plataforma e as suas habilidades.</p>

      <SearchBar termoBusca={busca} setTermoBusca={setBusca} />

      {usuariosFiltrados.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '30px' }}>
          Nenhum aluno encontrado com essa habilidade.
        </p>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        
        {usuariosFiltrados.map((user) => (
          <UserCard key={user.id} usuario={user} />
        ))}

      </div>
    </div>
  );
}