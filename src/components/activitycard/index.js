import React, { useState } from 'react';

import { Card, Input } from '@material-ui/core';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Search from '@material-ui/icons/Search';
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';
import Event from '@material-ui/icons/Event';

//Uso de Styled Components para fazer a estilização
import {
    Container,
} from "./styles";

export default function ActivityCard() {

    const dados = {
        atrasos: [{
            icon: 'Phone',
            title: 'Ligação de agendamento da reunião',
            user: 'Erica Collins',
            description: 'Em atraso por 04 dias',
        }],
        previstas: [{
            icon: 'Phone',
            title: 'Reunião orçamento',
            user: 'Abigail Fisher',
            description: 'Hoje às 15h',
        },
        {
            icon: 'Mail',
            title: 'Email documentação',
            user: 'Jeffery King',
            description: 'Amanhã às 09:45',
        },
        {
            icon: 'Event',
            title: 'Almoço corporativo',
            user: 'Lawrence Kelly',
            description: 'Amanha às 15h',
        }],
        concluidas: [{
            icon: 'Event',
            title: 'Apresentação feira agrícola',
            user: 'Caroline Diaz',
            description: 'Segunda-feira (17/09/2018) às 08h',
        }, {
            icon: 'Mail',
            title: 'Email orçamento',
            user: 'Arthur Clark',
            description: 'Terça-feira (18/09/2018) às 13h',
        }, {
            icon: 'Mail',
            title: 'Email contrato',
            user: 'Frieda Howard',
            description: 'Quarta-feira (19/09/2018) às 10h',
        }, {
            icon: 'Phone',
            title: 'Ligação contrato',
            user: 'Dylan Watsor',
            description: 'Quarta-feira (19/09/2018) às 13h',
        },]
    };

    function renderAtrasos(item) {
        return (
            item.map((dado) => {
                return (<VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FFF', color: '#424242', boxShadow: 'none' }}
                    contentArrowStyle={{ display: 'none' }}
                    iconStyle={{ background: '#c62828', color: '#fff', boxShadow: 'none', height: 20, width: 20 }}
                >
                    <h4 className="vertical-timeline-element-title">Atividades em atraso</h4>
                    <div style={{ display: 'flex', marginTop: 16 }}>
                        {/* <Phone style={{ color: '#c62828', fontSize: 18 }} /> */}
                        {dado.icon === 'Phone' ?
                            <Phone style={{ color: '#c62828', fontSize: 18 }} /> :
                            dado.icon === 'Mail' ?
                                <Mail style={{ color: '#c62828', fontSize: 18 }} /> :
                                <Event style={{ color: '#c62828', fontSize: 18 }} />
                        }
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                            <text><b>{dado.title}</b></text>
                            <text>{dado.user}</text>
                            <text>{dado.description}</text>
                        </div>
                    </div>
                </VerticalTimelineElement>
                )
            })
        )
    }

    function renderPrevistas(item) {
        return (
            item.map((dado) => {
                return (<VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FFF', color: '#424242', boxShadow: 'none' }}
                    contentArrowStyle={{ display: 'none' }}
                    iconStyle={{ background: '#f9a825', color: '#fff', boxShadow: 'none', height: 20, width: 20 }}
                >
                    <h4 className="vertical-timeline-element-title">Atividades em atraso</h4>
                    <div style={{ display: 'flex', marginTop: 16 }}>
                        {dado.icon === 'Phone' ?
                            <Phone style={{ color: '#f9a825', fontSize: 18 }} /> :
                            dado.icon === 'Mail' ?
                                <Mail style={{ color: '#f9a825', fontSize: 18 }} /> :
                                <Event style={{ color: '#f9a825', fontSize: 18 }} />
                        }
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                            <text><b>{dado.title}</b></text>
                            <text>{dado.user}</text>
                            <text>{dado.description}</text>
                        </div>
                    </div>
                </VerticalTimelineElement>
                )
            }))
    }

    function renderConcluidas(item) {
        return (item.map((dado) => {
            return (<VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFF', color: '#424242', boxShadow: 'none' }}
                contentArrowStyle={{ display: 'none' }}
                iconStyle={{ background: '#2e7d32', color: '#fff', boxShadow: 'none', height: 20, width: 20 }}
            >
                <h4 className="vertical-timeline-element-title">Atividades em atraso</h4>
                <div style={{ display: 'flex', marginTop: 16 }}>
                    {dado.icon === 'Phone' ?
                        <Phone style={{ color: '#2e7d32', fontSize: 18 }} /> :
                        dado.icon === 'Mail' ?
                            <Mail style={{ color: '#2e7d32', fontSize: 18 }} /> :
                            <Event style={{ color: '#2e7d32', fontSize: 18 }} />
                    }
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                        <text><b>{dado.title}</b></text>
                        <text>{dado.user}</text>
                        <text>{dado.description}</text>
                    </div>
                </div>
            </VerticalTimelineElement>
            )
        })
        )
    }

    function SearchBar() {
        return (
            <div style={{
                display: 'flex',
                // flex: 1,
                height: 25,
                alignItems: 'center',
                borderWidth: 1.5,
                borderStyle: "solid",
                borderColor: '#777777',
                borderRadius: 4,
                paddingLeft: 8,
                paddingRight: 8
            }}>
                <Search />
                <Input id="standard-basic" style={{ display: 'flex', flex: 1, height: 25, marginLeft: 8 }} disableUnderline={true} placeholder="Pesquisar..." />
            </div>
        )
    }

    return (
        <Container>
            <Card variant="contained" color="primary" style={{ flex: 1, width: '100%', paddingBottom: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 12, marginRight: 12 }}>
                    <p style={{ fontWeight: 'bold' }}>Atividades</p>
                    <SearchBar />

                    <VerticalTimeline layout={'1-column'}>
                        {renderAtrasos(dados.atrasos)}
                        {renderPrevistas(dados.previstas)}
                        {renderConcluidas(dados.concluidas)}
                    </VerticalTimeline>
                </div>
            </Card>
        </Container >
    );
}