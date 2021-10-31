import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './Navbar';
import Home from "./Home";
import Menu from "./Menu";
import Create from "./Create"


function App() {
  const [pageState, setPageState] = useState("/")


  return (
    <div className="App">
      <header>wassup playa</header>
      <NavBar onChangePage={setPageState} />
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
