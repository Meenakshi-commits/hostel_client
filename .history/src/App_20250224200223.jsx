import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, Dashboard, HostelDetails, ContactUs, Login, Signup } from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hostel-details" element={<HostelDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;



