import { FormattedMessage } from 'react-intl'
import IntroImg from '../../images/IntroImg.jpg'

const Intro = () =>{
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6" >
                    <div className="intro-frase" >
                        <p className='c-title'><FormattedMessage id="title"/></p>
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