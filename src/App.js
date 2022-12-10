import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Services></Services>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
