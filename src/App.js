import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import Header from "./components/Header";
import AllPosts from "./components/AllPosts";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/" element={<Navigate to="/posts" />} />
      </Routes>
    </Router>
  );
}

export default App;
