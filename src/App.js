import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import About from "./components/About";
import Staff from "./components/Staff";
import Story from "./components/Story";
import {Albums} from "./components/Albums";
import Photos from "./components/Photos";
import { Route, Switch } from "react-router-dom";
import GreeceEXPERIMENTAL from "./components/GreeceEXPERIMENTAL";

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/story' component={Story} />
        <Route path='/staff' component={Staff} />
        <Route path='/about' component={About} />
        <Route path='/albums' component={Albums} />
        <Route path='/photos' component={Photos} />
        <Route path='/greece' component={GreeceEXPERIMENTAL} />
      </Switch>
    </div>
  );
}

export default App;
