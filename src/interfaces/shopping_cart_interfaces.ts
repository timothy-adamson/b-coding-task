export interface BasketItem {
  id: string;
  quantity: number;
}

export interface ShoppingCartContextValue {
  basket: BasketItem[];
  updateBasket: (newBasket: BasketItem[]) => void;
  initialized: boolean;
}

export interface ShoppingCartHook {
  basket: BasketItem[];
  add: (id: string, quantity: number) => void;
  remove: (id: string, quantity: number) => void;
  empty: () => void;
}
