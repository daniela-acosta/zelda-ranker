import { Route } from "react-router-dom";

// import "./App.css";
import Home from "./views/Home";
import GameDetail from "./views/GameDetail";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={GameDetail} />
    </div>
  );
}

export default App;
