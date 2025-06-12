import React, { useState } from 'react';
import GetRestaurante from './pages/restaurantes/GetRestaurante';
import PostPrato from './pages/pratos/PostPrato';
import GetPrato from './pages/pratos/GetPrato';
import PutPrato from './pages/pratos/PutPrato';
import DeletePrato from './pages/pratos/DeletePrato';
import Header from './components/Header';
import Footer from './components/Footer';
import './Style.css';

function App() {
  const [pratoSelecionadoId, setPratoSelecionadoId] = useState<number | null>(null);
  const [refreshList, setRefreshList] = useState(false);

  const atualizarLista = () => setRefreshList(!refreshList);

  const handleSelecionarPrato = (id: number) => {
    setPratoSelecionadoId(id);
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1>Gerenciamento de Restaurantes e Pratos</h1>

        <section>
          <GetRestaurante />
        </section>

        <hr />

        <section>
          <PostPrato onCreated={atualizarLista} />

          <GetPrato onSelectPrato={handleSelecionarPrato} refreshFlag={refreshList} />

          {pratoSelecionadoId && (
            <>
              <PutPrato pratoId={pratoSelecionadoId} onUpdated={atualizarLista} />
              <DeletePrato pratoId={pratoSelecionadoId} onDeleted={atualizarLista} />
            </>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
