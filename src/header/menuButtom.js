import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'



const menuButtom = ({onMenu}) =>{
    
    return(
        <div className="menuButtom" onClick={onMenu}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    );
}

export default menuButtom