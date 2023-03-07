import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useReducer} from "react";


const HomeScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "PRODUCTS_RECEIVED":
        return {
          ...state,
          loading: false,
          products:action.payload
        };
      case "ERROR":
        return {
          ...state,
          loading: false,
          err: action.payload,
        };
      default:
        return state;
    }
  };
  const [{ products, loading, err }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    err: "",
  });
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" });
    const fetchData = async () => {
      const response = await fetch("/api/products", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "PRODUCTS_RECEIVED", payload: data });
    };
    try {
      fetchData();
    } catch (e) {
      dispatch({ type: "ERROR", payload: e });
    }
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading....</div>
        ) : err ? (
          <div>{err}</div>
        ) : (
          products?.map((product, index) => (
            <div className="product" key={index}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.productName} />
              </Link>
              <div className="proudctInfo">
                <p>{product.productName}</p>
                {}
                <p>${product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
