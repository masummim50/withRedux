import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPage from "./components/NewPage";
import ProductDetails from "./components/ProductDetails";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`/product/:id`}>
          <ProductDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
