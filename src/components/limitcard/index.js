import React, { useState } from 'react';

import { Card } from '@material-ui/core';

//Uso de Styled Components para fazer a estilização
import {
    Container,
} from "./styles";

export default function LimitCard() {
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
            <Card variant="contained" color="primary" style={{ flex: 1, width: '100%', paddingBottom: 20 }}>
                <div style={{ marginLeft: 12, marginRight: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold' }}>Limite de crédito</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <text style={{ color: '#227bd3', fontWeight: 'bold' }}>{currencyMask(limitcard.granted_value)}</text>
                        <text style={{ marginTop: 6 }}>Concedido</text>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                        <text style={{ color: '#2e7d32', fontWeight: 'bold' }}>{currencyMask(limitcard.available_value)}</text>
                        <text style={{ marginTop: 6 }}>Disponível</text>
                    </div>
                </div>
            </Card>
        </Container>
    );
}