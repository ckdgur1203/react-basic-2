import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="Hello" element={<h1>Hello!</h1>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Details />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
