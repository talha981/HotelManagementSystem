import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function Login() {
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    if (values.email === 'Customer' && values.password === '1234') {
      login(values.email); // Pass email as the username
      setError('');
      setShowSuccess(true); // Show the success card

      setTimeout(() => {
        setShowSuccess(false); // Hide the success card after 4 seconds
        navigate('/booking'); // Redirect to booking page
      }, 4000); // 4 seconds timeout
    } else {
      setError('Invalid credentials');
    }
    setSubmitting(false);
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed top-28 right-4 p-4 bg-gray-200 text-green-700 rounded-lg shadow-lg border border-green-300 overflow-hidden">
          <p>Logged in successfully!</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 animate-line" />
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
