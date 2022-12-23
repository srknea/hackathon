import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Add/>
        <Routes>
  
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
