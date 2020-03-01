import React from 'react';

import { Container, Body, LeftSide, RightSide, GroupCards } from "./styles";

import UserCard from '../../components/usercard';
import LocalCard from '../../components/localcard';
import OpportunityCard from '../../components/opportunitycard';
import LimitCard from '../../components/limitcard';

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
                        <OpportunityCard />
                        <LimitCard />
                    </GroupCards>
                </LeftSide>
                <RightSide>
                    <UserCard />
                </RightSide>
            </Body>
        </Container>
    );
}