import React, { useState } from "react";
import Language from "./language";
import HeaderLogo from "./logo";
import MenuButtom from "./menuButtom";
import NavBar from "./navBar";
import SmallMenu from "./smallMenu";

const Header = () =>{

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
            <div className="smallLanguage">
                <Language></Language>
            </div>
            
            <SmallMenu menuClass={getMenuClass()} onMenu={changeShow}></SmallMenu>
        </div>
    );
}

export default Header