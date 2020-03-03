import React from 'react';

import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import EventOutlined from '@material-ui/icons/EventOutlined';
import LocalOfferOutlined from '@material-ui/icons/LocalOfferOutlined';

import { Container } from "./styles";

function SideNav() {
    return (
        <Container >
            <Link to={'/main'}><SearchIcon style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} /></Link>
            <Link to={'/dashboard'}><PersonOutlineOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} /></Link>
            <Link to={'/menupage'}><EventOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} /></Link>
            <LocalOfferOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
        </Container>
    );
}

export default SideNav;