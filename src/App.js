import ContextApi from './components/ContextApi'
import Counter from './components/Counter'
import List from './components/List'
import UseRef from './components/UseRef'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import Nav from './components/Nav'
import Person from './components/Person'
function App() {
  return (
    <>

    <Router>
    <Nav/>
      <Switch>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route exact path='/counter'>
      <Counter/>
      </Route>
      <Route exact path='/contextapi'>
      <ContextApi/>
      </Route>
      <Route path='/person'>
        <Person/>
      </Route>
      <Route exact path='*'>
      <Error/>
      </Route>
      </Switch>
     
    </Router>
    {/* <Counter/>
    <List/>
    <UseRef/> */}
    {/* <ContextApi/> */}
    </>
  );
}

export default App;
