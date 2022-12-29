import { Navbar } from './components/Nav/nav.jsx';
import {Footer} from './components/Footer/footer.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Contacto} from './components/Contacto/contacto';
import {Menu} from './components/Menu/menu.jsx';
import { QuienesSomos } from './components/Quienes Somos/quienessomos.jsx';
import { Header } from './components/Header/header.jsx';
import './components/servicios/firebase'


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
