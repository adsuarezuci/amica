import { FormattedMessage } from "react-intl"
import { useNavigate } from 'react-router-dom'


const Footer = () =>{

    const navigate = useNavigate()
    const onClickPath = (path) =>{
        navigate(path, { replace: true })
    }


    return(
        <>
            <div className="container footer">
                <div className="row">
                    <div className="col-md-4">
                        <h2>AMICA</h2>
                        <ul className="footer-list">
                            <li>
                                <FormattedMessage id="title"/>
                            </li>
                            <li>
                                <FormattedMessage id="subtitle"/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="svg-replaced-11">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                                </svg>
                                <span>Manila 318A</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="svg-replaced-12">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>+53 53151057</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-md-4">
                        <h2>Servicios</h2>
                        <ul className="footer-list">
                            <li >
                                <a onClick={()=> onClickPath('/servicios')}>
                                    Pruebas de Software End to End
                                </a>
                            </li>
                            <li>
                                <a onClick={()=> onClickPath('/servicios')}>
                                    Automatización de Pruebas
                                </a>
                            </li>
                            <li>
                                <a onClick={()=> onClickPath('/servicios')}>
                                    Pruebas de Performance
                                </a>
                            </li>
                            <li>
                                <a onClick={()=> onClickPath('/servicios')}>
                                    Pruebas en aplicaciones móviles
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2>Temas</h2>
                        <ul className="footer-list">
                            <li >
                                <a onClick={()=> onClickPath('/empresa')}><FormattedMessage id="aboutUs"/></a>
                            </li>
                            <li>
                                <a onClick={()=> onClickPath('/servicios')}><FormattedMessage id="services"/></a>
                            </li>
                            <li>
                                <a onClick={()=> onClickPath('/equipo')}><FormattedMessage id="careers"/></a>
                            </li>
                            <li>
                                <a onClick={()=> onClickPath('/blog')}><FormattedMessage id="blog"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 copyrigth">
                        @ Amica 2022. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer