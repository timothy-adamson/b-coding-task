import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import PageLayout from "./components/shared/PageLayout";
import ViewAllProducts from "./pages/ViewAllProducts";
import ContextProvider from "./components/shared/ContextProvider";
import ViewProduct from "./pages/ViewProduct";
import ShoppingCart from "./pages/ShoppingCart";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Route path="/" exact component={ViewAllProducts}></Route>
        <Route path="/products/:id" exact component={ViewProduct}></Route>
        <Route path="/cart" exact component={ShoppingCart}></Route>
        <Redirect to="/"></Redirect>
      </PageLayout>
    </BrowserRouter>
  );
};

export default ContextProvider(App);
