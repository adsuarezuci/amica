
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { I18nProvider, Locales } from '.';

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
                        <span className="down" style={{paddingLeft:'8px'}}>
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
       
        </>
        
    );
}

export default Language