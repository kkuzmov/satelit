import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import About from "./components/About";
import Staff from "./components/Staff";
import Story from "./components/Story";
import Trips from "./components/Trips";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/story' component={Story} />
        <Route path='/staff' component={Staff} />
        <Route path='/about' component={About} />
        <Route path='/trips' component={Trips} />
      </Switch>
    </div>
  );
}

export default App;
