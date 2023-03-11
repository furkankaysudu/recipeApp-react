import './App.css';
import "./components/header/Header"
import Header from './components/header/Header';
import Navbar from './components/nabar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Home/>
    </div>
  );
}

export default App;
