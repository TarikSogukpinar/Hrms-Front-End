import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
     
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <Container className=""></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
