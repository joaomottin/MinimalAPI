import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';
import '../../Style.css';

export default function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5163/api/restaurantes')
      .then((res) => {
        setRestaurantes(res.data);
      })
      .catch((err) => {
        console.error('Erro ao buscar restaurantes:', err);
      });
  }, []);

  return (
    <div className="list-container">
      <h2>Restaurantes Cadastrados</h2>
      {restaurantes.length === 0 ? (
        <p>Nenhum restaurante cadastrado.</p>
      ) : (
        <ul>
          {restaurantes.map((r) => (
            <li key={r.id}>
              <strong>{r.nome}</strong> – {r.endereco} – {r.telefone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
