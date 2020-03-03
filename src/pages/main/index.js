import React from 'react';

import { Container, Body, LeftSide, RightSide, GroupCards } from "./styles";

import UserCard from '../../components/usercard';
import LocalCard from '../../components/localcard';
import OpportunityCard from '../../components/opportunitycard';
import LimitCard from '../../components/limitcard';
import SalesCard from '../../components/salescard';
import FinancialSecuritiesCard from '../../components/financialsecuritiescard';
import ActivityCard from '../../components/activitycard';

export default function Main(props) {
    return (
        <Container>
            <Body>
                <LeftSide>
                    <GroupCards >
                        <UserCard />
                        <UserCard />
                        {/* <LocalCard /> */}
                    </GroupCards>
                    <GroupCards>
                        <OpportunityCard />
                        <LimitCard />
                    </GroupCards>
                    <GroupCards>
                        <SalesCard />
                        <FinancialSecuritiesCard />
                    </GroupCards>
                </LeftSide>
                <RightSide>
                    <ActivityCard />
                </RightSide>
            </Body>
        </Container>
    );
}