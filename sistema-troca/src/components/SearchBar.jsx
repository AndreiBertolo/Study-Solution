export default function SearchBar({ termoBusca, setTermoBusca }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Procurar por habilidade (ex: Matemática, React...)" 
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          borderRadius: '8px', 
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
      />
    </div>
  );
}