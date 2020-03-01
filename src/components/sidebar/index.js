import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './styles.css';

import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import EventOutlined from '@material-ui/icons/EventOutlined';
import LocalOfferOutlined from '@material-ui/icons/LocalOfferOutlined';


function Sidebar({ items, openMenu }) {
    return (
        <div className="sidebar" style={{ maxWidth: openMenu ? 55 : 240, justifyContent: 'center' }}>
            <List disablePadding dense style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <ListItem >
                    <SearchIcon style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
                    <ListItemText style={{ display: openMenu && "none" }}>Buscar</ListItemText>
                </ListItem>
                <ListItem >
                    <PersonOutlineOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
                    <ListItemText style={{ display: openMenu && "none" }}>Usuário</ListItemText>
                </ListItem>
                <ListItem >
                    <EventOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
                    <ListItemText style={{ display: openMenu && "none" }}>Calendário</ListItemText>
                </ListItem>
                <ListItem >
                    <LocalOfferOutlined style={{ color: "#737373", paddingTop: 8, paddingBottom: 8 }} />
                    <ListItemText style={{ display: openMenu && "none" }}>Tag</ListItemText>
                </ListItem>
            </List>
        </div >
    )
}

export default Sidebar