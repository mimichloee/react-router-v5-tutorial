import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="menu">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeClassName="active">
              Posts
            </NavLink>
          </li>
        </ul>
      </header>
      <main className="contents">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
