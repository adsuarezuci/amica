import NavBar from "./navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SmallMenu = ({menuClass, onMenu}) =>{
    const allMenuClass = "smallMenu "+menuClass
    return(
        <div className={allMenuClass}>
            <div className="smallMenuClose" onClick={onMenu}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="" style={{paddingTop:'30px'}}>
                <h2>Navegación:</h2>
            </div>
            <NavBar></NavBar>
        </div>
    );
}

export default SmallMenu