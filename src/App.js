import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
