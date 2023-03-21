import { useDeferredValue, useEffect, useState, useTransition } from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import data from './data';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data; // deconstruct data
  const onAdd = (Product) => {
     const exist = cartItems.find((x) => x.id === Product.id);
     if (exist) {
       const newCartItems = cartItems.map((x) =>
       x.id === products.id ? {...exist, qty: exist.qty + 1} : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
     } else {
       const newCartItems = [...cartItems, {...products, qty: 1}];
       setCartItems(newCartItems);
       localStorage.setItem('cartItems', JSON.stringify(newCartItems));
     }  
    };
    const onRemove = (product) => {
     const exist = cartItems.find((x) => x.id === products.id);
     if (exist.qty === 1) {
       const newCartItems = cartItems.filter((x) => x.id !== Product.id);
       setCartItems(newCartItems);
       localStorage.setItem('cartItems', JSON.stringify(newCartItems));
     } else {
       const newCartItems = cartItems.map((x) =>
       x.id === product.id ? { ...exist, qty: exist.qty - 1} : x
       );
       setCartItems(newCartItems);
       localStorage.setItem('cartItems', JSON.stringify(newCartItems));
     }
  };

 const [isPending, startTransition] = useTransition();


  useEffect(() => {
    startTransition(() => {
      setCartItems(localStorage.getItem('cartItems') 
      ? JSON.parse(localStorage.getItem('cartItems'))
     : []
    );
    });
  },[]);

  const cartItemsCount = useDeferredValue(cartItems.length);

  return isPending ? ( 
    <div>Loading...</div>
  ) : ( 
    <div>
      <Header countCartItems={cartItemsCount} />
      <div class='row'>
        <Main 
           cartItems={cartItems} 
           onAdd={onAdd} 
           onRemove={onRemove} 
           products={products}/>
        <Basket cartItems={cartItems} 
           onAdd={onAdd} 
           onRemove={onRemove}  />
      </div>
     </div>
  );   
}

export default App;
