import {
  AddIcon, WindowCloseIcon, ClearAllIcon, DeteleIcon
} from '@styles/components/Icons';
import React, {
  useCallback, useContext, useEffect, useState
} from 'react';
import { clearCart, deleteCart } from '../../utils/setActions';
import ProductsContext from '../../context/ProductContext';
import { Container } from './styles';

const Header: React.FC = () => {
  const {
    dispatch,
    state: { cart, total }
  } = useContext(ProductsContext);
  const [numberCart, setNumberCart] = useState(0);
  const [activeSide, setActiveSide] = useState('');
  const [totalValue, setTotalValue] = useState(0);

  const handleClearCart = useCallback(
    () => {
      dispatch(clearCart([]));
    },
    [dispatch]
  );

  const handleDeleteProduct = useCallback(
    (products) => {
      dispatch(deleteCart(products));
    },
    [dispatch]
  );

  useEffect(() => {
    setNumberCart(cart.length);
  }, [cart]);

  function handleSide() {
    setActiveSide('active');
  }
  function handleSideClose() {
    setActiveSide('');
  }

  useEffect(() => {
    if (total.length !== 0) {
      const totalProduct = total.reduce(
        (previousValue: any, currentValue: any) => currentValue.price + previousValue,
        0
      );
      setTotalValue(totalProduct);
    } else {
      setTotalValue(0);
    }
  }, [total]);

  return (
    <Container>
      <div className="headerTop">
        <div className="logo">
          <img src="./logo.png" alt="logo_photo" />
        </div>
      </div>
      <button className="cartIcon" type="button" onClick={handleSide}>
        <AddIcon />
        <div className="circle">
          <span>
            {numberCart}
          </span>
        </div>
      </button>
      <div className="sidebar">
        <div className={`sidebarCart ${activeSide}`}>
          <div className="header">
            <button type="button" onClick={handleSideClose}>
              <WindowCloseIcon />
            </button>
            <div className="totalValue">
              <span>Total:</span>
              <h1>
                $
                {totalValue}
              </h1>
            </div>
          </div>
          <div className="container">
            <h1>
              You have
              {' '}
              <span>
                {cart.length}
              </span>
              {' '}
              items in your Cart
            </h1>
          </div>
          <div className="cardsProducts">
            {cart.map((carts) => (
              <div key={carts.id} className="cardCart">
                <div className="thumbnail">
                  <img src={carts.image} alt="photoProduct" />
                </div>
                <div className="textCards">
                  <div className="column">
                    <span>{carts.marca}</span>
                    <h1>{carts.name}</h1>
                  </div>
                  <div className="tamanho">
                    <span>Tamanho</span>
                    <h1>{carts.tamanho}</h1>
                  </div>
                  <div className="price">
                    <span>Price</span>
                    <h1>
                      $
                      {carts.price}
                    </h1>
                  </div>
                  <div className="actionDel">
                    <button type="button" onClick={() => handleDeleteProduct(carts)}>
                      <DeteleIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="clearCart">
            <button type="button" onClick={handleClearCart}>
              <ClearAllIcon />
              Clear All
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
