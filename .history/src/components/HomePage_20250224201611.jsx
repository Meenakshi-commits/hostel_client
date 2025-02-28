import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-black bg-opacity-50">
      <div className="text-white text-2xl font-bold"> 
        <img src="/logo.png" alt="Hostel Logo" className="h-12" />
      </div>
      <ul className="flex space-x-6 text-white text-lg">
        <li><Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
        <li><Link to="/hostel-details" className="hover:text-yellow-300">Hostel Details</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
      </ul>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 text-white border border-white rounded hover:bg-yellow-500">Login</Link>
        <Link to="/signup" className="px-4 py-2 text-white border border-white rounded hover:bg-green-500">Sign Up</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-50 p-4 flex justify-center space-x-6 text-white text-xl">
      <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
      <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
      <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
      <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
      <a href="#" className="hover:text-red-500"><FaYoutube /></a>
    </footer>
  );
}

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date().required("Date of Birth is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export function Signup() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <Formik
          initialValues={{ username: "", email: "", phone: "", gender: "", dob: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
              <Field type="text" name="username" placeholder="Username" className="w-full p-2 border rounded mb-2" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              <Field type="email" name="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              <Field type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded mb-2" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              <Field as="select" name="gender" className="w-full p-2 border rounded mb-2">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
              <Field type="date" name="dob" className="w-full p-2 border rounded mb-2" />
              <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
              <Field type="password" name="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              <button type="submit" disabled={isSubmitting} className="w-full bg-green-500 text-white p-2 rounded">
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}

export function Login() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email format").required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <Field type="email" name="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              <Field type="password" name="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-2 rounded">
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}



export default HomePage;

