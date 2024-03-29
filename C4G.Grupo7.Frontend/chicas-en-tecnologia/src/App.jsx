import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../src/Components/SignUp-Component/SignUp';
import Inicio from './Components/Inicio'
import ListadoPostulantes from './Components/ListadoPostulantes/ListadoPostulantes'
import Perfil from './Components/perfil/index.jsx'


function App() {
  return (
    <BrowserRouter>
      
      <Switch>
          <Route exact path="/" render={proops => <Inicio {...proops} />} />
          <Route exact path="/postulante" render={proops => <SignUp {...proops} />} />
          <Route exact path="/postulados" render={proops => <ListadoPostulantes {...proops} />} />
          <Route exact path="/perfil/:id" render={proops => <Perfil {...proops}/>}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
