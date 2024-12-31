import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Login from './components/header/Login';
import Product from './components/products/Product';
function App() {
  return (
    <div>
      <Login/>
      <Product/>
    </div>
  );
}

export default App;
