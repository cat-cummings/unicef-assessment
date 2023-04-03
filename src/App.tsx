import { Routes, Route } from 'react-router-dom'
import ShoppingList from './Components/ShoppingList';
import Header from './Components/Header'
import Cart from './Components/Cart';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<ShoppingList />} />
        <Route path ='/cart' element={<Cart />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
