import React from 'react';
import Header from '../../components/header';
import SideNav from '../../components/sidenav';

import { Container, Body } from "./styles";

export default function Main(props) {
    return (
        <Container>
            {/* <Header />
            <Body>
                <SideNav />
                {props.children}
            </Body> */}
            {/* {props.children} */}
        </Container>
    );
}