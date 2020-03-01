import React from 'react';
import Header from '../../components/header';
import SideNav from '../../components/sidenav';

import { Container } from "./styles";

export default function Main(props) {
    return (
        <Container>
            <Header />
            <SideNav />
            {props.children}
        </Container>
    );
}