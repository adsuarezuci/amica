import AmicaInfo from "../content/amicaInfo"
import ContactUsButton from "../content/contactUsButton"
import Intro from "../content/intro"
import ServicesSlide from "../content/servicesSlide"




const Home = () =>{
    return(
        <div>
            <Intro/>
            
            <div className="margin-top" >
                <div className="container" >
                    <h1>Servicios</h1>
                </div> 
                <ServicesSlide/>
            </div>             
            <div className="margin-top" >
                <AmicaInfo className="margin-top"/>    
            </div>
            <div className="margin-top" >
                <div className="container" >
                    <ContactUsButton />    
                </div>
            </div>            
        </div>
    )
}
export default Home