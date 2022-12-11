import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
