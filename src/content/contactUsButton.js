import { FormattedMessage } from "react-intl"

const ContactUsButton = ({menu}) => {

    const getClassLocal = () =>{
        console.log(menu)
        if(menu) return "contact-button contact-button-menu"
        return "contact-button"
    }

    return(
        <>
            <div className={getClassLocal()}>
                <FormattedMessage id="contactUs"/>
            </div>
        </>
    )
}

export default ContactUsButton