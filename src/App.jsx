import { Routes, Route } from "react-router-dom";
import "./styles/output.css";
import Dashboard from "./pages/Dashboard";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const { currentPage } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
