import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Contact from './component/Contact';
import Products from './component/Products';


function App() {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/products" element={<Products/>}></Route>

  </Routes>
  </>
  );
}

export default App;
