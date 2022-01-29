import './App.css';
import {productsData} from "./data"

function App() {
  return (
    <div>
      {productsData.map(product => {
        return (
          <p>{product.name}</p>
        )
      })}
    </div>
  );
}

export default App;
