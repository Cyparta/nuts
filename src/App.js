
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
