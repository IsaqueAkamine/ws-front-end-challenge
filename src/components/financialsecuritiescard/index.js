import React, { useState } from 'react';

import { Card } from '@material-ui/core';

//Uso de Styled Components para fazer a estilização
import {
    Container,
    NumberContainer,
    NumberText,
    ValueText
} from "./styles";

export default function FinancialSecuritiesCard() {
    const financialsecurity_default = {
        overdue_qtd: 1,
        overdue_value: 3105,
        due_qtd: 2,
        due_value: 3105,
        paid_qtd: 2,
        paid_value: 3105
    }

    const [financialSecurity, setFinancialSecurity] = useState(financialsecurity_default);

    function currencyMask(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRl' });
    }

    return (
        <Container>
            <Card variant="contained" color="primary" style={{ flex: 1, width: '100%', paddingBottom: 20 }}>
                <div style={{ marginLeft: 12, marginRight: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold' }}>Títulos financeiros</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: 200, justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <NumberContainer style={{ backgroundColor: '#c62828' }}>
                                <NumberText>{financialSecurity.overdue_qtd}</NumberText>
                            </NumberContainer>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <ValueText>{currencyMask(financialSecurity.overdue_value)}</ValueText>
                                <text style={{ opacity: 0.8 }}>Vencidos</text>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <NumberContainer style={{ backgroundColor: '#ff6f00' }}>
                                <NumberText>{financialSecurity.due_qtd}</NumberText>
                            </NumberContainer>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <ValueText>{currencyMask(financialSecurity.due_value)}</ValueText>
                                <text style={{ opacity: 0.8 }}>A vencer</text>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <NumberContainer style={{ backgroundColor: '#2e7d32' }}>
                                <NumberText>{financialSecurity.paid_qtd}</NumberText>
                            </NumberContainer>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <ValueText>{currencyMask(financialSecurity.paid_value)}</ValueText>
                                <text style={{ opacity: 0.8 }}>A vencer</text>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Container>
    );
}