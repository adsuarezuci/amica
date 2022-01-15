import Language from "../i18n/language";
import { FormattedMessage } from "react-intl";

const NavBar = () =>{
    return(
        <div className="navigation">
            <ul>
                <li><FormattedMessage id="item1"/></li>
                <li><FormattedMessage id="item2"/></li>
                <li><FormattedMessage id="item3"/></li>
                <li><FormattedMessage id="item4"/></li>   
            </ul>
        </div>
    );
}

export default NavBar