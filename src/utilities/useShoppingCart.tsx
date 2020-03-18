import React, { useContext } from "react";
import {
  ShoppingCartHook,
  ShoppingCartContextValue,
  BasketItem
} from "../interfaces/shopping_cart_interfaces";
import { useEffect, useState } from "react";

// Using react context and local storage to preserve state between pages and components

const ShoppingCartContext = React.createContext<ShoppingCartContextValue>({
  basket: [],
  updateBasket: newBasket => {
    throw new Error("Shopping Cart was not yet initialized");
  },
  initialized: false
});

export const ShoppingCartContextProvider: React.FC = ({ children }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [initialized, setInitialized] = useState(false);

  const updateBasket = (newBasket: BasketItem[]) => {
    setBasket(newBasket);
  };

  useEffect(() => {
    const savedBasket = localStorage.getItem("bombinate-coding-task");

    if (savedBasket) setBasket(JSON.parse(savedBasket));
    setInitialized(true);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        basket,
        updateBasket,
        initialized
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Shopping cart Hook exposes functionality to view, add, remove, empty basket without exposing context directly
// Local storage is checked and updated on changes and shopping card is maintained as a context singleton instance

export const useShoppingCart: () => ShoppingCartHook = () => {
  const { basket, updateBasket, initialized } = useContext(ShoppingCartContext);

  useEffect(() => {
    if (initialized) {
      const newBasket = JSON.stringify(basket);

      localStorage.setItem("bombinate-coding-task", newBasket);
    }
  }, [basket, initialized]);

  const add = (id: string, quantity = 1) => {
    const basketItem = basket.find(item => item.id === id);

    if (basketItem) {
      const newBasket = basket.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
      updateBasket(newBasket);
    } else {
      updateBasket([...basket, { id, quantity }]);
    }
  };

  const remove = (id: string, quantity = 1) => {
    const basketItem = basket.find(item => item.id === id);

    if (basketItem) {
      const newBasket =
        basketItem.quantity - quantity > 0
          ? basket.map(item =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - quantity
                  }
                : item
            )
          : basket.filter(item => item.id !== id);
      updateBasket(newBasket);
    } else throw new Error("Cannot remove item not already in shopping cart");
  };

  const empty = () => {
    updateBasket([]);
  };

  return {
    basket,
    add,
    remove,
    empty
  };
};
