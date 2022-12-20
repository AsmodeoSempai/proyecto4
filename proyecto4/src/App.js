import { Navbar } from './components/Nav/nav.jsx';
import { Header } from './components/Header/header.jsx';
import {Footer} from './components/Footer/footer.jsx';
import './App.css';

function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
        <Header />
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
