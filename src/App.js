import { Route, Switch } from "react-router-dom";

// import "./App.css";
import Home from "./views/Home/Home";
import GameDetail from "./views/GameDetail/GameDetail";
import NotFound from "./views/NotFound/NotFound";
import About from "./views/About/About";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    // <div className="App">
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/:id" component={GameDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
    // </div>
  );
}

export default App;
