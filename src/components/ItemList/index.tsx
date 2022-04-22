import { AddIcon } from '@styles/components/Icons';
import { Title } from '@styles/components/Title';
import React, {
  useCallback, useContext
} from 'react';
import { addCart } from '../../utils/setActions';
import ProductsContext from '../../context/ProductContext';
import { Container } from './style';

const ItemList: React.FC = () => {
  const {
    dispatch,
    state: {
      products
    }
  } = useContext(ProductsContext);

  const onAddToCart = useCallback(
    (product) => {
      dispatch(addCart(product));
      console.log(product);
    },
    [dispatch]
  );

  return (
    <Container>
      <Title>Add on Cart with Reducer</Title>
      <div className="center">
        <div className="Allcards">
          {products.map((product) => (
            <div key={product.id} className="Cards">
              <div className="image">
                <img src={product.image} alt="photo_of_products" />
              </div>
              <span>{product.marca}</span>
              <h1>{product.name}</h1>
              <div className="line">
                <div className="column">
                  <span>Size</span>
                  <h1>{product.tamanho}</h1>
                </div>
                <div className="column">
                  <span>Price</span>
                  <h1>
                    $
                    {product.price}
                  </h1>
                </div>
              </div>
              <button type="button" className="add" onClick={() => onAddToCart(product)}>
                <AddIcon />
              </button>
            </div>
          ))}
        </div>
      </div>

    </Container>
  );
};

export default ItemList;
