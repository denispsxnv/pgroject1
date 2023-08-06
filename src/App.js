

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/register' element={ <RegisterPage/>}/>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
