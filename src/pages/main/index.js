import React from 'react';

import { Container, Body, LeftSide, RightSide, GroupCards } from "./styles";

import UserCard from '../../components/usercard';
import LocalCard from '../../components/localcard';
import OpprtunityCard from '../../components/opportunitycard';

export default function Main(props) {
    return (
        <Container>
            <Body>
                <LeftSide>
                    <GroupCards >
                        <UserCard />
                        <LocalCard />
                    </GroupCards>
                    <GroupCards>
                        <OpprtunityCard />
                    </GroupCards>
                </LeftSide>
                <RightSide>
                    <UserCard />
                </RightSide>
            </Body>
        </Container>
    );
}