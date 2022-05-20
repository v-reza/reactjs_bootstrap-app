import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
