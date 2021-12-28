import NavBar from "./navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItems } from "./menuItems";

const SmallMenu = ({menuClass, onMenu}) =>{
    const allMenuClass = "smallMenu "+menuClass
    const AreaClass = "smallMenuAreaClose "+menuClass

    return(
        <>
            <div className={AreaClass} onClick={onMenu}>

            </div>
            <div className={allMenuClass}>
                <div className="smallMenuClose" onClick={onMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="" style={{paddingTop:'30px'}}>
                    <h2>Navegación:</h2>
                </div>
                <PanelMenu model={MenuItems} style={{ width: '260px' }}/>
            </div>
            
        </>
    );
}

export default SmallMenu