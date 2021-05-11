import { Route } from "react-router-dom";

// import "./App.css";
import Home from "./views/Home/Home";
import GameDetail from "./views/GameDetail/GameDetail";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    // <div className="App">
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={GameDetail} />
    </Layout>
    // </div>
  );
}

export default App;
