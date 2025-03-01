import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { BookingProvider } from "./context/BookingContext";
import { NotificationProvider } from "./context/NotificationContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <RoomProvider>
          <BookingProvider>
            <NotificationProvider>
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col ml-64"> {/* Add margin-left to avoid overlap */}
                  <Navbar />
                  <div className="p-6 flex-grow overflow-auto">
                    <AppRoutes /> {/* Uses the separate AppRoutes component */}
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
