import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import Pensando from "../../images/pensando.svg";
import AmicaItem from '../amicaItem';


const AmicaInfo = () =>{
    const [windowWidth,setWindowWidth] = useState(undefined)
    const resize = () =>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        resize();
        window.addEventListener('resize',resize);
    }, []);

    return(
        <div className="container" >
            <div className="row align-items-center">
                {windowWidth < 768 && <div className='col-12'>
                        <h1 className="animate-enter"><FormattedMessage id="whyAmica" /></h1>
                        <p className='animate-enter'>
                            Tenemos el impulso dinámico e innovador de los nuevos comienzos, sustentado en el sacrificio, 
                            la profesionalidad y el compromiso de querer un mundo tecnológico 
                            con más calidad para el aprovechamiento de todos, nos interesa el 
                            producto y sobre todo las personas.
                        </p>
                        <img id="img-pensando" src={Pensando}></img>
                    </div>}
                {windowWidth >= 768 && <><div className='col-6'>
                        <h1 className="animate-enter"><FormattedMessage id="whyAmica" /></h1>
                        <p className='animate-enter'>
                            Tenemos el impulso dinámico e innovador de los nuevos comienzos, sustentado en el sacrificio, 
                            la profesionalidad y el compromiso de querer un mundo tecnológico 
                            con más calidad para el aprovechamiento de todos, nos interesa el 
                            producto y sobre todo las personas.
                        </p>
                    </div>
                    <div className="col-6">
                        <img id="img-pensando" src={Pensando}></img>
                </div></>}     
            </div>
            <div className="row ">
                <AmicaItem classLocal={"col-md-6"} 
                    title={"Flexibilidad"}
                    description={"Podemos proporcionarle un equipo solido en su unión y complementación, y a la vez flexible ante los cambios dinámicos, disfrutamos los retos, haremos que sienta que trabaja con amigos fielmente comprometidos con su crecimiento y mejora, lo acompañamos en su proceso."}
                />
                <AmicaItem classLocal={"col-md-6"} 
                    title={"Tiempo"}
                    description={"Trabajamos para ahorrarle tiempo a la vez que damos optima calidad, para ello nos entrenamos en la mejor metodología y las herramientas adecuadas, contara con un equipo a su completa disposición."}
                />
            </div>
        </div>   
    )
}
export default AmicaInfo