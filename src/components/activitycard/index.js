import React, { useState } from 'react';

import { Card } from '@material-ui/core';

//Uso de Styled Components para fazer a estilização
import {
    Container,
} from "./styles";

export default function ActivityCard() {

    return (
        <Container>
            <Card variant="contained" color="primary" style={{ flex: 1, width: '100%', paddingBottom: 20 }}>
                <div style={{ marginLeft: 12, marginRight: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold' }}>Atividades</p>
                    </div>
                </div>
            </Card>
        </Container>
    );
}