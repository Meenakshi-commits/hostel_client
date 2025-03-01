import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { BookingProvider } from "./context/BookingContext";
import { NotificationProvider } from "./context/NotificationContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes"; // Corrected import path
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary

function App() {
  return (
    <Router>
      <AuthProvider>
        <RoomProvider>
          <BookingProvider>
            <NotificationProvider>
              <ErrorBoundary> {/* Wrap with ErrorBoundary */}
                <div className="flex h-screen">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Navbar />
                    <div className="p-6 flex-grow overflow-auto">
                      <AppRoutes /> {/* Uses the separate AppRoutes component */}
                    </div>
                    <Footer />
                  </div>
          </BookingProvider>
        </RoomProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
