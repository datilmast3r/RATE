import { Routes, Route } from 'react-router-dom';

import './App.css'
import TitlePage from './pages/TitlePage/TitlePage'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TitlePage/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App;
