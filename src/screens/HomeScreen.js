import data from "../data";
import "../App.css";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product, index) => (
          <div className="product" key={index}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.productName} />
            </Link>

            <div className="proudctInfo">
              <p>{product.productName}</p>
              <p>${product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
