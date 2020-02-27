import React from 'react';

import { Container } from "./styles";

//remover header, adicionar na rota
import Header from '../../components/header';

function Dashboard() {
  return (
    <div>
      <Header />

      <Container>
        pagina dashboard
      </Container>
    </div>
  );
}

export default Dashboard;
