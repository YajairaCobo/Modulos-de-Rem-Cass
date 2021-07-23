import  {Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Inicio from '../Paginas/Inicio';
import RemediosGripe from '../Components/PaginasMenu/RemediosGripe';
import RemediosEstomago from '../Components/PaginasMenu/RemediosEstomago';
import RemediosGarganta from '../Components/PaginasMenu/RemediosGarganta';
import AliviarColicos from '../Components/PaginasMenu/AliviarColicos';
import AliviarEstreñimiento from '../Components/PaginasMenu/AliviarEstreñimiento';
import Jugos from '../Components/PaginasMenu/Jugos';
import PresioAlta from '../Components/PaginasMenu/PresioAlta';

function rutas () {
    return(
    <div>
        <Router>
            <Switch>
                <Link>
                <Route path='/' exact component= {Inicio}/>
                <Route path='/remediosgripe' exact component= {RemediosGripe}/> 
                <Route path='/remediosestomago' exact component= {RemediosEstomago}/>   
                <Route path='/remediosgarganta' exact component= {RemediosGarganta}/> 
                <Route path='/aliviarcolicos' exact component= {AliviarColicos}/>
                <Route path='/aliviestreñimiento' exact component= {AliviarEstreñimiento}/>
                <Route path='/jugosnatu' exact component= {Jugos}/>
                <Route path='/presion' exact component={PresioAlta}/> 
                </Link>        
            </Switch>
        </Router>
    </div>
    )
}
export default rutas;
