import React from 'react'

import {Link} from 'react-router-dom';

function MenuDesp() {
  return (
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rem-Cass</a>
    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            REMEDIOS CASEROS 
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li>< Link class="dropdown-item" to="/remediosgripe">Remedios Para La Gripe</Link></li>
            <li>< Link class="dropdown-item" to="/remediosestomago">Malestar Estomacal</Link></li>
            <li>< Link class="dropdown-item" to="/remediosgarganta">Remedios Para El Dolor De Garganta</Link></li>
            <li>< Link class="dropdown-item" to="/aliviarcolicos">Aliviar Los Colicos</Link></li>
            <li>< Link class="dropdown-item" to="/aliviestreñimiento">Aliviar El Estreñimiento</Link></li>
            <li>< Link class="dropdown-item" to="/presion">Bajar la Presion Alta</Link></li>
            <li>< Link class="dropdown-item" to="/jugosnatu">Jugos Naturales</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default MenuDesp  
