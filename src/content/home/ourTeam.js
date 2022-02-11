
import { FormattedMessage } from 'react-intl'
import Img1 from '../../images/team_collaboration.svg'
import Img2 from '../../images/team_connection.svg'

const OurTeam = () =>{
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12" >
                    <h1 className="animate-enter">
                        Nuestro Equipo
                    </h1>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 " >
                   <img src={Img1} className='team-img animate-enter'/>
                </div>
                <div className="col-md-6 my-4" >
                    <span className='animate-enter'>
                        Nuestro equipo está integrado por jóvenes profesionales nacidos en Cuba y graduados
                        de universidades cubanas. Cada uno con 10 años promedio trabajando en el sector 
                        del desarrollo de software. Creemos en una sociedad cada vez mas informatizada 
                        con mejor calidad, para ofrecer mejores servicios a las personas.
                    </span>
                </div>
                <div className="col-md-6 my-4" >
                    <span className='animate-enter'>
                        Nuestro modelo de dirección empresarial es participativo, donde todos aportan y cada 
                        idea es importante, apreciamos los valores humanos tanto como las capacidades técnicas.
                    </span>
                </div>
                <div className="col-md-6" >
                    <img src={Img2} className='team-img animate-enter' />
                </div>
            </div>
            
            
            <div className="row align-items-center">
                <div className="col-md-12 team-frase animate-enter" >
                    “Lo que no se define no se puede medir. <br/>
                    Lo que no se mide, no se puede mejorar. <br/>
                    Lo que no se mejora, se degrada siempre” <br/>
                    William Thomson
                </div>
            </div>
        </div>
    )
}
export default OurTeam