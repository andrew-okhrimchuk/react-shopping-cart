import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PanelPage from "./pages/panel/PanelPage";
import PanelProductsPage from "./pages/panel/PanelProductsPage";
import PanelProductPage from "./pages/panel/PanelProductPage";
import PanelProductForm from "./pages/panel/PanelProductForm";
import PanelLoginForm from "./pages/panel/PanelLoginForm";
import ProductPage from "./pages/products/ProductPage";
import Test from "./pages/Test";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>y
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact  path="/panel" > <PanelPage/> </Route>
          <Route exact  path="/panel/product" > <PanelProductsPage/> </Route>
          <Route exact  path="/panel/product/form/:id" > <PanelProductForm/> </Route>
          <Route   path="/panel/product/:product" > <PanelProductPage/> </Route>
          <Route   path="/product/:product"> <ProductPage/> </Route>
          <Route exact  path="/panel/login" > <PanelLoginForm/> </Route>
          <Route exact  path="/test" > <Test/> </Route>
        </Switch>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
