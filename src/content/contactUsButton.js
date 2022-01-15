import { FormattedMessage } from "react-intl"
import { useNavigate } from 'react-router-dom'

const ContactUsButton = ({menu}) => {
    const navigate = useNavigate()
    const getClassLocal = () =>{
        console.log(menu)
        if(menu) return "contact-button contact-button-menu"
        return "contact-button"
    }
    const onClickContact = () =>{
        navigate(`/contact`, { replace: true })
    }

    return(
        <>
            <div className={getClassLocal()} onClick={onClickContact}>
                <FormattedMessage id="contactUs"/>
            </div>
        </>
    )
}

export default ContactUsButton