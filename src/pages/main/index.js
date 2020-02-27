import React from 'react';
import Header from '../../components/header';
import SideNav from '../../components/sidenav';

import { Container } from "./styles";

export default function Main() {
    return (
        <Container>
            <Header />
            <SideNav />
        </Container>
    );
}