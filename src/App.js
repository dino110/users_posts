import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <AllPosts />
    </div>
  );
}

export default App;
