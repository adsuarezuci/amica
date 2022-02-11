import { useNavigate } from "react-router-dom"
import AmicaInfo from "../content/home/amicaInfo"
import Intro from "../content/home/intro"
import OurTeam from "../content/home/ourTeam"
import ServiceCard from "../content/home/serviceCard"




const Home = () =>{
    const navigate = useNavigate()
    const onCardSelected = (goTo) =>{
        navigate(goTo, { replace: true }) 
    }

    return(
        <div>
            <Intro/>
            
            <div className="margin-top" >
                <div className="container" >
                    <h1 className="animate-enter">Servicios</h1>
                    <div className="row row-cols-auto justify-content-center">
                        <div className="col animate-enter" onClick={()=>onCardSelected("pruebasEndToEnd")}>
                            <ServiceCard 
                                title="Pruebas de Software End-to-End" 
                                description="Entregue un software de alta calidad usando metodología ágil."
                            />
                        </div>
                        <div className="col animate-enter">
                            <ServiceCard 
                                title="Automatización de Pruebas" 
                                description="Ayudamos a acelerar el lanzamiento al mercado, al tiempo que mejora la efectividad y la capacidad de mantenimiento."
                            />
                        </div>
                        <div className="col animate-enter">
                            <ServiceCard 
                                title="Pruebas de Performance" 
                                description="Trabajamos para reducir el riesgo y aportar estabilidad en las liberaciones."
                            />
                        </div>
                        <div className="col animate-enter">
                            <ServiceCard 
                                title="Pruebas en aplicaciones móviles" 
                                description="Ayudamos a mejorar la calidad de sus aplicaciones móviles, garantizando que corran en las distintas plataformas requeridas"
                            />
                        </div>
                        
                    </div>
                    
                </div> 
                {/* <ServicesSlide/> */}
            </div>             
            <div className="margin-top" >
                <AmicaInfo className="margin-top"/>    
            </div>
            <div className="margin-top" >
                <OurTeam/>    
            </div>
                     
        </div>
    )
}
export default Home