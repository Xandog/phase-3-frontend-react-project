import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './Navbar';
import Home from "./Home";
import Menu from "./Menu";
import Create from "./Create"


function App() {
  //setting up state for page and sandwich data
  const [pageState, setPageState] = useState("/");
  const [sandwiches, setSandwiches] = useState([]);

  //bringing in the sandwich data for use
  useEffect(() => {
    fetch("http://localhost:9292/sandwiches")
      .then((r) => r.json())
      .then((sandwiches) => setSandwiches(sandwiches));
  }, []);

  console.log(sandwiches);

  //creating a new js variable to hold only the sandwich name string from the sandwich data
  const displayedSandwiches = sandwiches.map(sandwich => sandwich.name);

  console.log(displayedSandwiches);

  //passing in displayedSandwiches into our Menu component for rendering
  return (
    <div className="App">
      <header>wassup playa</header>
      <NavBar onChangePage={setPageState} />
        <Switch>
          <Route path="/menu">
            <Menu sandwiches={displayedSandwiches} />
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
