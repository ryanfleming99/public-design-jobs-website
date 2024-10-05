import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FreelancePage from "./pages/FreelancePage";
import ProfilePage from "./pages/ProfilePage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freelance" element={<FreelancePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
