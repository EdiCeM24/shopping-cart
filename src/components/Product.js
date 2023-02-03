/* eslint-disable react/jsx-no-comment-textnodes */
export default function Product(props) {
    const { product } = props; // here we de-construct product.
    return (
        <div className="card">
            <img className="small" src={product.img} alt={product.name} /> //the first element in a div is image.
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
               <button className="">Add To Cart</button>
            </div>
        </div>
    )
}