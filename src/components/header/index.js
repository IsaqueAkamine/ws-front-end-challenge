import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import { Container } from "./styles";
function Header() {
    return (
        <Container>
            <MenuIcon style={{ color: "#fff" }} />
        </Container>
    );
}

export default Header;