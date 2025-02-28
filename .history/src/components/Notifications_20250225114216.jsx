import Navbar from "./Navbar";
import Footer from "./Footer";

function Notifications() {
  const notifications = [
    { id: 1, message: "Maintenance request for Room 205 is approved." },
    { id: 2, message: "Your payment for January is due." },
  ];

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-5">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <ul className="mt-3">
          {notifications.map((note) => (
            <li key={note.id} className="p-3 border-b">{note.message}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Notifications; 
