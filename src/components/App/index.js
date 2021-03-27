import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

/*
const App = () => (
  <React.Fragment>  
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
*/

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          y
          <Route exact path="/">
            <React.Fragment>
              <main>
                <Filter />
                <Shelf />
              </main>
              <FloatCart />
            </React.Fragment>
          </Route>
          <Route exact path="/panel">
            <Filter />
            <FloatCart />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
