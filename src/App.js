import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/favorites' exact element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
