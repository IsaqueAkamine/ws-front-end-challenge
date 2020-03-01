import React, { useState } from 'react';

import { Card } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';

import WhatsApp from '@material-ui/icons/WhatsApp';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';


//Uso de Styled Components para fazer a estilização
import {
    Container,
    UserDescriptionContainer,
    UserDescriptionTextContainer,
    UserDescriptionText,

    UserContactContainer,
} from "./styles";

export default function UserCard() {
    //declaração de usuário padrão para exibir dados no card
    const user_default = {
        name: 'Justine Robinson',
        company: 'Acme inc',
        active: true,
        phone: '45 9 9555 5555',
        email: 'justine@email.com'
    }

    //useState para controlar o valor das variaveis a serem exibidas.
    const [user, setUser] = useState(user_default);

    return (
        <Container>
            <Card variant="contained" color="primary" style={{ flex: 1, width: '100%' }}>
                <div style={{ marginLeft: 12, marginRight: 12 }}>
                    <p>Informações gerais</p>
                    <UserDescriptionContainer>
                        <div style={{ display: 'flex', height: 60, width: 60, borderRadius: 30, backgroundColor: '#d3d3d3', justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                            <Person style={{ color: '#fff', fontSize: 40 }} />
                        </div>
                        <UserDescriptionTextContainer>
                            <UserDescriptionText>{user.name}</UserDescriptionText>
                            <UserDescriptionText>{user.company}</UserDescriptionText>
                            <div style={{ padding: 6, backgroundColor: user.active ? '#c8e6c9' : '#c62828', borderRadius: 4 }}>
                                <UserDescriptionText>{user.active ? 'Ativo' : 'Inativo'}</UserDescriptionText>
                            </div>
                        </UserDescriptionTextContainer>
                    </UserDescriptionContainer>

                    <UserContactContainer>
                        <div style={{ display: 'flex' }}>
                            <Phone style={{ color: '#424242', fontSize: 18 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <text>{user.phone}</text>
                                <text>Celular</text>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: 8, }}>
                            <Mail style={{ color: '#424242', fontSize: 18 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                <text>{user.email}</text>
                                <text>Trabalho</text>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', marginTop: 9 }}>
                            <WhatsApp style={{ color: '#424242', fontSize: 16, paddingLeft: 4, paddingRight: 4, }} />
                            <Facebook style={{ color: '#424242', fontSize: 16, paddingLeft: 4, paddingRight: 4, opacity: 0.7 }} />
                            <Instagram style={{ color: '#424242', fontSize: 16, paddingLeft: 4, paddingRight: 4, }} />
                            <Twitter style={{ color: '#424242', fontSize: 16, paddingLeft: 4, paddingRight: 4, opacity: 0.7 }} />
                            <LinkedIn style={{ color: '#424242', fontSize: 16, paddingLeft: 4, paddingRight: 4, opacity: 0.7 }} />
                        </div>
                    </UserContactContainer>
                </div>
            </Card>
        </Container>
    );
}