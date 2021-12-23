import Language from "./language";

const NavBar = () =>{
    return(
        <div className="navigation">
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
                
                <li className="menuLang"><Language/></li>
            </ul>
        </div>
    );
}

export default NavBar