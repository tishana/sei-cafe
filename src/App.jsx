import './App.css';
import { useState } from 'react';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from './pages/AuthPage/AuthPage';
import NavBar from './components/NavBar';
// Add the following import
import { Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null); // set up our state
  return (
    <main className="App">
      { user ? 
      <>
      <NavBar />
      <Routes>
        <Route path="orders" element={<OrderHistoryPage />} />
        <Route path="orders/new" element={<NewOrderPage />} />
      </Routes>
      </>
      :
      <AuthPage />
    }
    </main>
  );
}

export default App;
