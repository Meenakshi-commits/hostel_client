import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { BookingProvider } from "./context/BookingContext";
import { NotificationProvider } from "./context/NotificationContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Payments from "../pages/Payments";
import Billing from "../pages/Billing";
import Maintenance from "../pages/Maintenance";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import HostelDetails from "./pages/HostelDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <RoomProvider>
          <BookingProvider>
            <NotificationProvider>
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar />
                  <div className="p-6 flex-grow overflow-auto">
                    <Switch>
                      <Route path="/login" component={Login} />
                      <Route path="/unauthorized" component={Unauthorized} />
                      <ProtectedRoute path="/dashboard" component={Dashboard} roles={["admin", "user"]} />
                      <ProtectedRoute path="/payments" component={Payments} roles={["admin", "user"]} />
                      <ProtectedRoute path="/billing" component={Billing} roles={["admin"]} />
                      <ProtectedRoute path="/maintenance" component={Maintenance} roles={["admin", "maintenance"]} />
                      <ProtectedRoute path="/hostel-details" component={HostelDetails} roles={["admin", "resident"]} />
                      <AppRoutes /> {/* Uses the separate AppRoutes component */}
                    </Switch>
                  </div>
                  <Footer />
                </div>
              </div>
            </NotificationProvider>
          </BookingProvider>
        </RoomProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
