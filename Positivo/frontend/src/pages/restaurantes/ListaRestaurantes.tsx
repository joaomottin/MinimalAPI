import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';
import '../../Style.css';

export default function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5163/api/restaurantes')
      .then((response) => setRestaurantes(response.data))
      .catch((err) => console.error('Erro ao buscar restaurantes:', err));
  }, []);

  return (
    <div className="container">
      <h1>Restaurantes Cadastrados</h1>
      <div className="grid-cards">
        {restaurantes.map((restaurante) => (
          <div key={restaurante.id} className="card">
            <h3>{restaurante.nome}</h3>
            <p>{restaurante.endereco}</p>
            <p>{restaurante.telefone}</p>
          </div>
        ))}
        {restaurantes.length === 0 && <p>Nenhum restaurante encontrado.</p>}
      </div>
    </div>
  );
}
=======
import { Restaurante } from '../../models/Restaurante';

//On building...
>>>>>>> origin/main
