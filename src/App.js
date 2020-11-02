import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import Favorites from './screens/favorites';
import Detail from './screens/detail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route  exact path="/" component={Home}></Route>
          <Route  path="/home" component={Home}></Route>
          <Route  path="/favorites" component={Favorites}></Route>
          <Route  path="/detail/:id" component={Detail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
