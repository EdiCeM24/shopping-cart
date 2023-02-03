import Product from './Product';

export default function Main(props) {
  const {products} = props;
    return ( <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
         {products.map((product) => (
                                  // this is product object     
          <Product key={product.id} product={product}></Product> // we rename products to product as we passed product.id with key. 
         ))}
      </div>
     </div>
    ); 
}