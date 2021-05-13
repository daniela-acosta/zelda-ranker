import { Route, Switch } from "react-router-dom";

// import "./App.css";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import About from "./views/About/About";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    // <div className="App">
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
    // </div>
  );
}

export default App;
