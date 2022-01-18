import React, { useEffect } from "react";
import { SpeedDial } from 'primereact/speeddial';
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from "react-intl";
import ContactUsButton from "./contactUsButton";
import Logo from "./logo";



const MenuModern = () =>{
    const navigate = useNavigate()
    const items = [
        {
            label: 'Add',
            //icon: 'pi pi-pencil',
            command: () => {
                console.log('blog');
                navigate(`/blog`, { replace: true })                
            }
        },
        {
            label: 'Update',
            //icon: 'pi pi-refresh',
            command: () => {
                navigate(`/equipo`, { replace: true })
            }
        },
        {
            label: 'Delete',
            //icon: 'pi pi-trash',
            command: () => {
                navigate(`/servicios`, { replace: true })
            }
        },
        {
            label: 'React Website',
            //icon: 'pi pi-external-link',
            command: () => {
                navigate(`/empresa`, { replace: true })
            }
        }
    ];

    useEffect(() => {
        const textEmpresa = document.getElementById('textEmpresa')
        const textServicios = document.getElementById('textServicios')
        const textEquipo = document.getElementById('textEquipo')
        const textBlog = document.getElementById('textBlog')

        const list = document.getElementsByClassName('p-speeddial-action');
        console.log(list)

        if(!list[0].hasChildNodes())
            list[0].appendChild(textBlog)        
        list[0].style.left = '-43px'
        list[0].style.top = '20px'

        if(!list[1].hasChildNodes())
            list[1].appendChild(textEquipo)
        list[1].style.left = '-32px'
        list[1].style.top = '-20px'

        if(!list[2].hasChildNodes())
            list[2].appendChild(textServicios)
        list[2].style.left = '-37px'
        list[2].style.top = '-20px'
        
        if(!list[3].hasChildNodes())
            list[3].appendChild(textEmpresa)
        list[3].style.left = '-30px'
        list[3].style.top = '20px'
    }, []);

    const shadowShow = () =>{
        const shadow = document.getElementById('menuShadow')
        shadow.classList.remove('menu-shadow-hide')
        shadow.classList.add('menu-shadow-show')
    }
    const shadowHide = () =>{
        const shadow = document.getElementById('menuShadow')
        shadow.classList.remove('menu-shadow-show')
        shadow.classList.add('menu-shadow-hide')
    }

    return(
        <>
            <div id="menuShadow" className="menu-shadow-hide"></div>
            <div className="menu-modern-container">  
                <SpeedDial model={items} 
                    radius={120} 
                    direction="down" 
                    type="semi-circle" 
                    className="menu-modern-button" 
                    showIcon="pi pi-bars" 
                    hideIcon="pi pi-times"
                    onShow={shadowShow}
                    onHide={shadowHide}
                    />              
            </div>
            <ContactUsButton menu />
            <Logo />

            <div style={{display:'none'}}>
                <div id="textEmpresa">                    
                        <FormattedMessage id="aboutUs"/>
                </div>
                <div id="textServicios"><FormattedMessage id="services"/></div>
                <div id="textEquipo"><FormattedMessage id="careers"/></div>
                <div id="textBlog"><FormattedMessage id="blog"/></div>
            </div>            
        </>
    )
}
export default MenuModern