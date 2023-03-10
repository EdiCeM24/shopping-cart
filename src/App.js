import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

function App() {
  const { products } = data; // deconstuct data
  return ( 
    <div className=''>
      <Header />
      <div class='row'>
        <Main products={products}/>
        <Basket />
      </div>
     </div>
  );   
}

export default App;
