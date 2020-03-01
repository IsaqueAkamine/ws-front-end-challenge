import React, { useState } from 'react';

import { Card } from '@material-ui/core';

//Uso de Styled Components para fazer a estilização
import {
    Container,
} from "./styles";

export default function SalesCard() {
    const limitcard_default = {
        granted_value: 12000.20,
        available_value: 3105
    }

    const [limitcard, setLimitcard] = useState(limitcard_default);

    function currencyMask(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRl' });
    }

    return (
        <Container>
            <Card variant="contained" color="primary" style={{ display: 'flex', flex: 1, width: '100%', paddingBottom: 20 }}>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 12, marginRight: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold' }}>Vendas</p>
                    </div>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
                        <text>Adicionar grafico aqui</text>
                    </div>
                </div>
            </Card>
        </Container>
    );
}