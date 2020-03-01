import React from 'react';

import { Card } from '@material-ui/core';

import { Container } from "./styles";

export default function LocalCard() {
    return (
        <Container>
            <Card variant="contained" color="primary" >
                <div style={{ marginLeft: 12, marginRight: 12 }}>
                    <h1>Local card</h1>
                </div>
            </Card>
        </Container>
    );
}