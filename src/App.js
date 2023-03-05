import "./App.css";
import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product, index) => (
            <div className="product" key={index}>
              <a href={"/product/"+ product.slug}>
                <img src={product.image} alt={product.productName} />
              </a>

              <div className="proudctInfo">
                <p>{product.productName}</p>
                <p>${product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
