import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../src/Components/SignUp-Component/SignUp';
import Inicio from '../src/Components/Inicio'
import Root from '../src/Components/Menu/Root'


function App() {
  return (
    <BrowserRouter>
      <Root>
      <Switch>
          <Route exact path="/postulante" render={proops => <SignUp {...proops} />} />
          <Route exact path="/" render={proops => <Inicio {...proops} />} />
      </Switch>
      </Root>
    </BrowserRouter>
  );
}

export default App;
