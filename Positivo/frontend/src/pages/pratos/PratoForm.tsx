import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PratoForm = () => {
  const [nome, setNome] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5163/pratos/${id}`)
        .then(response => setNome(response.data.nome));
    }
  }, [id]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const dados = { nome };

    const request = id
      ? axios.put(`http://localhost:5163/pratos/${id}`, dados)
      : axios.post('http://localhost:5163/pratos/', dados);

    request.then(() => navigate('/pratos'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6 transition-all"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        {id ? 'Editar Prato' : 'Cadastrar Novo Prato'}
      </h2>

      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
          Nome do prato
        </label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Ex: Lasanha à bolonhesa"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition shadow"
        >
          {id ? 'Atualizar' : 'Salvar'}
        </button>
      </div>
    </form>
  );
};

export default PratoForm;
