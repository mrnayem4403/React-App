import About from './pages/About';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navber from './component/Navber';
import Footer from './component/Footer';
import '../src/style/App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Navber/>
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/menu' exact component={Menu}></Route>
      <Route path='/about' exact component={About}></Route>
      <Route path='/contact' exact component={Contact}></Route>
    </Switch>
    <Footer/>     
    </Router>
    </div>
  );
}
export default App;
