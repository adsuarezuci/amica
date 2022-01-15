import React, { useState } from "react";
import Language from "../i18n/language";
import HeaderLogo from "./logo";
import MenuButtom from "./menuButtom";
import NavBar from "./navBar";
import SmallMenu from "./smallMenu";

const Header = ({onlangChange}) =>{

    const [open, setOpen] = useState(false);

    const changeShow = () =>{
        setOpen(!open)
    }
    const getMenuClass = () =>{
        if(open) return "menuShow"
        return "menuHide"
    }

    return(
        <div className="header">
            <MenuButtom onMenu={changeShow}></MenuButtom>
            <HeaderLogo></HeaderLogo>
            <div className="BigMenu">
                <NavBar></NavBar>
            </div>
            <div className="language-container">
                <Language onlangChange={onlangChange}></Language>
            </div>
            
            <SmallMenu menuClass={getMenuClass()} onMenu={changeShow}></SmallMenu>
        </div>
    );
}

export default Header