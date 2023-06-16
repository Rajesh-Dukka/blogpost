import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Item from './components/Item';
import DetailItem from './components/DetailItem';
import Home from './components/Home';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post' element={<Item/>}/>
      <Route path='/post/:id' element={<DetailItem/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
