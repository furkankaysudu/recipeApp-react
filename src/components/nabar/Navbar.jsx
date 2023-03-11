import React from "react";
import { Navigator, Menu,Logoside,Logo } from "./Styled";

//import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Navigator>
       <Logo> <ul>{'<ED8EN/>'} <Logoside> <span>recipeapp</span></Logoside></ul></Logo>

        <Menu>
          <ul>contact</ul>
          <ul>about </ul>
          <ul>github</ul>
        </Menu>
      </Navigator>
    </div>
  );
};

export default Navbar;
