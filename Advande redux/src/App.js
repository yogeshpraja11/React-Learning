import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
 
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);

  useEffect(()=>{
    const response=
  },[cart]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    
  );
}

export default App;