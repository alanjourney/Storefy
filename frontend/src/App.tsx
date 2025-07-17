import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
