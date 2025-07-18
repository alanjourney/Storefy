import Navbar from "widgets/Navbar";
import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
