import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { BookingProvider } from "./context/BookingContext";
import { NotificationProvider } from "./context/NotificationContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes"; // Import the new routes file

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
        <BookingProvider>
          <NotificationProvider>
            <Router>
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar />
                  <div className="p-6 flex-grow overflow-auto">
                    <AppRoutes /> {/* Uses the separate AppRoutes component */}
                  </div>
                  <Footer />
                </div>
              </div>
            </Router>
          </NotificationProvider>
        </BookingProvider>
      </RoomProvider>
    </AuthProvider>
  );
}

export default App;
