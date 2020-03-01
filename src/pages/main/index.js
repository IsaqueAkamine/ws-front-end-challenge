import React from 'react';

import { Container, Body, LeftSide, RightSide } from "./styles";

import UserCard from '../../components/usercard';
import LocalCard from '../../components/localcard';

export default function Main(props) {
    return (
        <Container>
            <Body>
                <LeftSide>
                    <UserCard />
                    <LocalCard />
                </LeftSide>
                <RightSide>
                    <UserCard />
                </RightSide>
            </Body>
        </Container>
    );
}