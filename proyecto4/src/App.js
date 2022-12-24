import { Navbar } from './components/Nav/nav.jsx';
import { Header } from './components/Header/header.jsx';
import {Footer} from './components/Footer/footer.jsx';
import {Contacto} from './components/Contacto/contacto.jsx';
import {Menu} from './components/Menu/menu.jsx';
import { QuienesSomos } from './components/Quienes Somos/quienessomos.jsx';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Header />}/> 
            <Route path='/menu' element={<Menu/>}/> 
            <Route path='/contacto' element={<Contacto/>}/> 
            <Route path='/quienessomos' element={<QuienesSomos/>}/> 
          </Routes>
        <Footer/>
      </Router>    
    </div>
    </>
  );
}

export default App;
