import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import EventOutlined from '@material-ui/icons/EventOutlined';
import LocalOfferOutlined from '@material-ui/icons/LocalOfferOutlined';

import { Container } from "./styles";

function SideNav() {
    return (
        <Container >
            <SearchIcon style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
            <PersonOutlineOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
            <EventOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
            <LocalOfferOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
        </Container>
    );
}

export default SideNav;