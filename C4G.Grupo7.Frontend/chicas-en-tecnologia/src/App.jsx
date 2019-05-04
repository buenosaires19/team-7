import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../src/Components/SignUp-Component/SignUp';
import Inicio from './Components/Inicio'


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" render={proops => <Inicio {...proops} />} />
          <Route exact path="/postulante" render={proops => <SignUp {...proops} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
