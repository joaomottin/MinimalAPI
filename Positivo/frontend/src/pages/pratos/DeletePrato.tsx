import axios from 'axios';

interface DeletePratoProps {
  pratoId: number;
  onDeleted: () => void;
}

export default function DeletePrato({ pratoId, onDeleted }: DeletePratoProps) {
  const handleDelete = () => {
    if (!window.confirm('Tem certeza que quer deletar esse prato?')) return;

    axios.delete(`http://localhost:5163/api/pratos/${pratoId}`)
      .then(() => {
        alert('Prato deletado com sucesso!');
        onDeleted();
      })
      .catch(err => {
        console.error('Erro ao deletar prato:', err);
        alert('Erro ao deletar prato');
      });
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>
      Deletar
    </button>
  );
}
