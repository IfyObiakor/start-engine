import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import SingleListing from "./pages/SingleListing";
import Login from "./pages/Login";
import About from "./pages/About";


function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SingleListing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
