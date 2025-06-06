import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Prato } from '../../models/Prato';
import '../../Style.css';

export default function ListaPratos() {
  const [pratos, setPratos] = useState<Prato[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5163/api/pratos')
      .then((response) => {
        setPratos(response.data);
      })
      .catch((err) => {
        console.error('Erro ao buscar pratos:', err);
=======

import { Prato } from '../../models/Prato';

function ListaPratos() {

  const [pratos, setPratos] = useState<Prato[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5163/api/pratos")
      .then(response => {
        setPratos(response.data);
      })
      .catch(err => {
        console.error("Erro ao buscar pratos:", err);
        alert("Erro ao buscar pratos.");
>>>>>>> origin/main
      });
  }, []);

  return (
<<<<<<< HEAD
    <div className="container">
      <h1>Pratos Cadastrados</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço (R$)</th>
            <th>Restaurante</th>
          </tr>
        </thead>
        <tbody>
          {pratos.length === 0 && (
            <tr>
              <td colSpan={5}>Nenhum prato encontrado.</td>
            </tr>
          )}
=======
    <div className="teste">
      <h1>Lista de Pratos</h1>

      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nome</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Restaurante</td>
          </tr>
        </thead>
        <tbody>
>>>>>>> origin/main
          {pratos.map((prato) => (
            <tr key={prato.id}>
              <td>{prato.id}</td>
              <td>{prato.nome}</td>
              <td>{prato.descricao}</td>
<<<<<<< HEAD
              <td>{prato.preco.toFixed(2)}</td>
=======
              <td>R$ {prato.preco.toFixed(2)}</td>
>>>>>>> origin/main
              <td>{prato.restaurante?.nome ?? 'Não informado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
<<<<<<< HEAD
=======

export default ListaPratos;
>>>>>>> origin/main
