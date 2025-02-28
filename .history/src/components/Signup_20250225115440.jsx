import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("Date of Birth is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <Formik
          initialValues={{ username: "", email: "", phone: "", gender: "", dob: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Signup Data:", values);
            setTimeout(() => setSubmitting(false), 2000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>

              <p className="mt-3 text-center text-gray-600">
                Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
