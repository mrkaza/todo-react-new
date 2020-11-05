import Navbar from './modules/navbar/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoList from './views/TodoList';
import TodoDetails from './views/TodoDetails';
import Login from './views/Login';
import Register from './views/Register';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/todo/:id" component={TodoDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
