import { FormattedMessage } from 'react-intl'
import IntroImg from '../IntroImg.jpg'

const Intro = () =>{
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6" >
                    <div className="intro-frase" >
                        <h1><FormattedMessage id="title"/></h1>
                    </div>
                    <div className="intro-subfrase" >
                        <p>
                            <FormattedMessage id="titleDescript"/>
                        </p>
                        <p style={{fontWeight:'bold'}}>
                            <FormattedMessage id="subtitle"/>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6" >
                    <img className="intro-img" src={IntroImg}/>
                </div>
            </div>
        </div>
    )
}
export default Intro