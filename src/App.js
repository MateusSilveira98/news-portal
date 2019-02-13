import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Home  from './pages/Home';
class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
