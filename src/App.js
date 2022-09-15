import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import Header from "./components/Header";
import AllPosts from "./components/AllPosts";
import PostPage from "./components/PostPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/" element={<Navigate to="/posts" />} />
      </Routes>
    </Router>
  );
}

export default App;

/* 
<Routes>
        <Route path="/home" element={<AllPosts />} />
        <Route path="/" element={<AllPosts />} />
      </Routes>
*/
