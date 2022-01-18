import { useEffect, useState } from 'react'
import Pensando from "../pensando.svg";


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
                        <h1 className="">¿Por qué AMICA?</h1>
                        <p>
                            Tenemos el impulso dinámico e innovador de los nuevos comienzos, sustentado en el sacrificio, 
                            la profesionalidad y el compromiso de querer un mundo tecnológico 
                            con más calidad para el aprovechamiento de todos, nos interesa el 
                            producto y sobre todo las personas.
                        </p>
                        <img id="img-pensando" src={Pensando}></img>
                    </div>}
                {windowWidth >= 768 && <><div className='col-6'>
                        <h1 className="">¿Por qué AMICA?</h1>
                        <p>
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
            <div className="row">
                <div className="col-md-6 amica-info-item-container">
                    <div className="amica-info-item">
                        <h3>Flexibilidad:</h3>
                        <p>
                            Podemos proporcionarle un equipo solido en su unión y complementación, 
                            y a la vez flexible ante los cambios dinámicos, disfrutamos los retos,
                             haremos que sienta que trabaja con amigos fielmente comprometidos con 
                             su crecimiento y mejora, lo acompañamos en su proceso.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 amica-info-item-container">
                    <div className="amica-info-item">
                        <h3>Tiempo:</h3>
                        <p>
                            Trabajamos para ahorrarle tiempo a la vez que damos optima calidad, 
                            para ello nos entrenamos en la mejor metodología y las herramientas adecuadas, 
                            contara con un equipo a su completa disposición.
                        </p>
                    </div>
                </div>
            </div>
        </div>   
    )
}
export default AmicaInfo