import React from "react";
import { AppBar ,Toolbar,styled} from '@mui/material';
import { NavLink } from "react-router-dom";

 const Header =styled(AppBar)
`background:black;
pading: 10px
`

const Tabs =styled(NavLink)
`font-size: 10px
margin: 10px;
color: inherit;
text-decoration: none
`


const Navbar = () => {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs to='/'>First page of this application &nbsp;&nbsp;&nbsp;</Tabs>
          <Tabs to="/all">All users &nbsp;</Tabs>
          <Tabs to="/add">Add users</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
};

export default Navbar;
