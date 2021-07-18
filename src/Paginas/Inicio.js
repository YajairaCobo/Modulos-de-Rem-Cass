import React from 'react'

import MenuDesp from '../Components/MenuDesplegable/MenuDesp';
import Carrusel from '../Components/CarruselPrincipal/Carrusel';
import Registro from '../Components/Registro/Registro';

function Inicio() {
    return (
        <div>              
            <MenuDesp/>   
            <Carrusel/> 
            <Registro/>               
        </div>
    )
}
export default Inicio
