import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {

  return (
    <div className='font-[Poppins] text-[#535353]'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;
