import Navbar from "Components/Navbar/Navbar";
import Layout from "Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
