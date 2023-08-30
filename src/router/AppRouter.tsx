import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ListPage, AboutPage, RegisterPage } from "../pages";
import Navigation from "../components/Navigation/Navigation";

function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
