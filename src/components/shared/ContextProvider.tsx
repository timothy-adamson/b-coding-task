import React from "react";
import { ShoppingCartContextProvider } from "../../utilities/useShoppingCart";

// ContextProvider wraps page-level components to allow access to context on the same level
// This enables accessing shopping cart data to the PageLayout HOC

const ContextProvider = (Component: React.ComponentType) => {
  const ComponentWithContext: React.FC = ({ children }) => (
    <ShoppingCartContextProvider>
      <Component>{children}</Component>
    </ShoppingCartContextProvider>
  );

  return ComponentWithContext;
};

export default ContextProvider;
