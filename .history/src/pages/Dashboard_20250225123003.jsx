import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-5">
        <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
        <p>Manage rooms, residents, billing, and more.</p>
      </main>
      <Footer />
    </div>
  );
}
