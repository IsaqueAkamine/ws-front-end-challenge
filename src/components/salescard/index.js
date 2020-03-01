import React, { useState } from 'react';

import { Card } from '@material-ui/core';

//Uso de Styled Components para fazer a estilização
import {
    Container,
} from "./styles";

export default function SalesCard() {
    return (
        <Container>
            <Card variant="contained" color="primary" style={{ display: 'flex', flex: 1, width: '100%', paddingBottom: 20 }}>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 12, marginRight: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold' }}>Vendas</p>
                    </div>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <text>Adicionar grafico aqui</text>
                    </div>
                </div>
            </Card>
        </Container>
    );
}