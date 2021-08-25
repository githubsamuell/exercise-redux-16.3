import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from'./pages/Login';
import NewUser from './pages/NewUser';
import RegisteredUsers from './pages/RegisteredUsers';

function Router() {
  return (
    <BrowserRouter>
      <div style={{width: '100vw', display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/new">Cadastrar</Link>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={RegisteredUsers} />
        <Route path="/new" component={NewUser} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;