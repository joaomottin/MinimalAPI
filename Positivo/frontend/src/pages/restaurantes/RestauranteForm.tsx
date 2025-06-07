import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RestauranteForm = () => {
  const [nome, setNome] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/restaurantes/${id}`)
        .then(response => setNome(response.data.nome));
    }
  }, [id]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const dados = { nome };

    const request = id
      ? axios.put(`http://localhost:3000/restaurantes/${id}`, dados)
      : axios.post('http://localhost:3000/restaurantes/', dados);

    request.then(() => navigate('/restaurantes'));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">{id ? 'Editar Restaurante' : 'Novo Restaurante'}</h2>
      <input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Nome do restaurante"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Salvar</button>
    </form>
  );
};

export default RestauranteForm;
