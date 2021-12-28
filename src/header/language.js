
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { I18nProvider, Locales } from '../i18n';

const Language = ({onlangChange}) =>{

    const [lan,setLan] = useState('ES')
    const [show,setShow] = useState(false)

    const changeLan=(label, value)=>{
        setLan(label)
        onlangChange(value)
    }
    return(
        <>
        <div className="language" >
            <ul className="">
                <li className="" onClick={(e) => setShow(!show)}>
                    <div className="lan-selected">
                        {lan}
                        <span className="down" style={{paddingLeft:'10px'}}>
                            <FontAwesomeIcon icon={faSortDown}/>
                        </span>
                    </div>
                    {show && (<ul className="drop-menu">
                        <li onClick={() => changeLan('ES',Locales.SPANISH)} className="lan-items">
                            ES
                        </li>
                        <li onClick={() => changeLan('EN',Locales.ENGLISH)} className="lan-items">
                            EN
                        </li>
                        <li onClick={() => changeLan('FR',Locales.FRENCH)} className="lan-items">
                            FR
                        </li>
                    </ul>)}
                </li>
            </ul>
        </div>
        {/* <div className="language" >
            <select className="language-select" onChange={(e) => onlangChange(e.target.value)}>
                <option value={Locales.SPANISH}>
                    ES
                 </option>
                <option value={Locales.ENGLISH}>
                    EN
                </option>
                <option value={Locales.FRENCH}>
                    FR
                </option>
            </select>
            <span className="custom-arrows"></span>
        </div> */}
        </>
        
    );
}

export default Language