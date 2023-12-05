import { HashRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { BlogPost } from "./BlogPost";
import { Menu } from "./Menu";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/profile" element={<ProfilePage />} />

          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
