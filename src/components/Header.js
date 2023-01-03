export default function Header() {
    return <div className="block center row">
        <div>
            <a href="#/">
              <h2>Shopping Cart</h2>
            </a>
        </div>
        <div>
            <a href="#/cart">Cart</a> <a href="#/signin">Sign In</a>
        </div>
    </div>;
}