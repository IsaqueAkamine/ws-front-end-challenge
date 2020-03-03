import React, { useState } from 'react';

import { Card } from '@material-ui/core';
import Info from '@material-ui/icons/Info';

//Uso de Styled Components para fazer a estilização
import {
    Container,
    NumberContainer,
    NumberText,
    TitleOpportunitiesText,
} from "./styles";

export default function OpportunityCard() {
    //declaração de objeto padrão para exibir dados no card
    const opportunities_default = {
        earned_qtd: 4,
        earned_value: 20000,
        losses_qtd: 1,
        losses_value: 4300,
        opened_qtd: 2,
        opened_value: 'Diversas moedas',
        discarded_qtd: 0,
        discarded_value: '-',
        qtd_total: 7
    }

    //useState para controlar o valor das variaveis a serem exibidas.
    const [opportunity, setOpportunity] = useState(opportunities_default);

    function currencyMask(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRl' });
    }

    return (
        <Container>
            <Card variant="contained" color="primary" style={{ flex: 1, width: '100%', paddingBottom: 20 }}>
                <div style={{ marginLeft: 12, marginRight: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold' }}>Oportunidades ({opportunity.qtd_total})</p>
                        <Info style={{ color: '#424242', fontSize: 18 }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <NumberContainer style={{ backgroundColor: '#2e7d32' }}>
                                <NumberText>{opportunity.earned_qtd}</NumberText>
                            </NumberContainer>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <TitleOpportunitiesText>Ganhas</TitleOpportunitiesText>
                                <text style={{ opacity: 0.8 }}>{currencyMask(opportunity.earned_value)}</text>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <NumberContainer style={{ backgroundColor: '#c62828' }}>
                                <NumberText>{opportunity.losses_qtd}</NumberText>
                            </NumberContainer>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <TitleOpportunitiesText>Perdida</TitleOpportunitiesText>
                                <text style={{ opacity: 0.8 }}>{currencyMask(opportunity.losses_value)}</text>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <NumberContainer style={{ backgroundColor: '#1976d2' }}>
                                <NumberText>{opportunity.earned_qtd}</NumberText>
                            </NumberContainer>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <TitleOpportunitiesText>Abertas</TitleOpportunitiesText>
                                <text style={{ opacity: 0.8 }}>{currencyMask(opportunity.opened_value)}</text>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <NumberContainer style={{ backgroundColor: '#424242' }}>
                                <NumberText>{opportunity.discarded_qtd}</NumberText>
                            </NumberContainer>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <TitleOpportunitiesText>Descartadas</TitleOpportunitiesText>
                                <text style={{ opacity: 0.8 }}>{currencyMask(opportunity.discarded_value)}</text>
                            </div>
                        </div>
                    </div>
                </div>
                <text style={{ display: 'flex', marginTop: 15, marginLeft: 35, color: '#227bd3', fontWeight: 'bold', fontSize: 14 }}>VER TODAS OPORTUNIDADES</text>
            </Card>
        </Container>
    );
}