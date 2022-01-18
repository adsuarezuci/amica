import { FormattedMessage } from "react-intl"
import { useNavigate } from 'react-router-dom'
import { Tooltip } from "primereact/tooltip";

const ContactUsButton = ({menu}) => {
    const navigate = useNavigate()
    const getClassLocal = () =>{   
        if(menu) return "no-select contact-button contact-button-menu"
        return "no-select contact-button"
    }
    const onClickContact = () =>{
        navigate(`/contact`, { replace: true })
    }

    return(
        <>
            <div className={getClassLocal()} onClick={onClickContact} >
                <span className="text">
                    <FormattedMessage id="contactUs"/>
                </span>
                <span className="pi pi-envelope"></span>
            </div>
        </>
    )
}

export default ContactUsButton