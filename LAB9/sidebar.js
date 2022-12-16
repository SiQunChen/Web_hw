import React from 'react';
import {Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";

function MySidebar(){
    return (
        <div style={{height: "100%"}}>
            <Sidebar>
                <Menu>
                    <MenuItem><Link to="/">Home</Link></MenuItem>
                    <MenuItem><Link to="/Search">Search</Link></MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
export default MySidebar;