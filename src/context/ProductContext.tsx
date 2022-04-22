import React, {
  createContext, useEffect, useMemo, useReducer
} from 'react';
import * as uuid from 'uuid';
import { iProducts, ObjProduct } from '../interfaces/iProducts';
import {
  addCart, clearCart, deleteCart, getProducts, setProducts
} from '../utils/setActions';
import dataProducts from '../mock/productMock';

const initialState: any = {
  total: [] as ObjProduct[],
  cart: [] as ObjProduct[],
  products: [] as ObjProduct[]
};

const ProductsContext = createContext<iProducts>({} as iProducts);

export const ProductProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer((
    value: typeof initialState,
    action: {
      payload: ObjProduct[],
      type: string
    }
  ) => {
    switch (action.type) {
      case getProducts.type: {
        return value;
      }
      case setProducts.type: {
        const newValue = {
          ...value,
          products: action.payload
        };
        return newValue;
      }
      case addCart.type: {
        const cartsWithNewID = [
          {
            id: uuid.v4(),
            name: (action.payload as unknown as ObjProduct).name,
            category: (action.payload as unknown as ObjProduct).category,
            marca: (action.payload as unknown as ObjProduct).marca,
            tamanho: (action.payload as unknown as ObjProduct).tamanho,
            image: (action.payload as unknown as ObjProduct).image,
            price: (action.payload as unknown as ObjProduct).price
          }
        ];

        value.cart.forEach((product: ObjProduct) => {
          const productNewId = {
            id: uuid.v4(),
            name: product.name,
            category: product.category,
            marca: product.marca,
            tamanho: product.tamanho,
            image: product.image,
            price: product.price
          };
          cartsWithNewID.push(productNewId);
        });

        const newValue = {
          ...value,
          cart: cartsWithNewID,
          total: cartsWithNewID
        };
        console.log(newValue);
        return newValue;
      }
      case clearCart.type: {
        const newValue = {
          ...value,
          cart: [],
          total: []
        };
        return newValue;
      }
      case deleteCart.type: {
        const productId = (action.payload as unknown as ObjProduct).id;
        const deletedCart = value.cart.filter((product: any) => product.id !== productId);
        const newState = {
          ...value,
          cart: [...deletedCart],
          total: [...deletedCart]
        };
        return newState;
      }
      default: throw new Error();
    }
  }, initialState);

  useEffect(() => {
    if (dataProducts.products.length !== 0) {
      dispatch(setProducts(dataProducts.products));
    }
  }, []);

  const contextValues = useMemo(() => ({ state, dispatch }), [dispatch, state]);
  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
