import  {Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Inicio from '../Paginas/Inicio';
import RemediosGripe from '../Components/PaginasMenu/RemediosGripe';
import RemediosEstomago from '../Components/PaginasMenu/RemediosEstomago';
import RemediosGarganta from '../Components/PaginasMenu/RemediosGarganta';
import AliviarColicos from '../Components/PaginasMenu/AliviarColicos';
import AliviarEstreñimiento from '../Components/PaginasMenu/AliviarEstreñimiento';

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
                </Link>        
            </Switch>
        </Router>
    </div>
    )
}
export default rutas;
