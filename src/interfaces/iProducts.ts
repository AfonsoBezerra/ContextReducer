import React from 'react';

export interface ObjProduct {
  id: number,
  category: string,
  marca: string,
  name: string,
  image: string,
  tamanho: number,
  price: number
}

export interface iProducts {
  state: {
    total: ObjProduct[],
    products: ObjProduct[],
    cart: ObjProduct[],
  },
  dispatch: React.Dispatch<{ payload: ObjProduct[]; type: string; }>
}
