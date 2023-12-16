import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Repositories from "./pages/Repositories";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repositories" element={<Repositories />} />
    </Routes>
  </Router>
);

export default AppRoutes;
