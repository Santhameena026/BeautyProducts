import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Signup from './Signup';
import Aboutus from './Aboutus';
import Contact from './Contact';
function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Aboutus/>
    <Products/>
    <Signup/>
    <Contact/>
    </div>
    );
}

export default App;
