import React, { useReducer } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Initial state for useReducer
const initialState = {
  name: '',
  email: '',
  check_in_date: '',
  check_out_date: '',
  room: '',
  special_requirements: '',
};

// Reducer function to handle state updates
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(14, 'Name should be less than 10 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  check_in_date: Yup.date()
    .required('Check-in date is required')
    .typeError('Invalid date'),
  check_out_date: Yup.date()
    .required('Check-out date is required')
    .typeError('Invalid date')
    .min(Yup.ref('check_in_date'), 'Check-out date cannot be before check-in date'),
  room: Yup.string()
    .required('Room type is required'),
  special_requirements: Yup.string(),
});

const Booking = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (values) => {
    console.log('Customer Details:', values);
    
  };

  return (
    <div className="bg-gray-100">
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.royalsuitehotel.com/wp-content/uploads/2019/02/Royal-Suite-208.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Booking</h1>
          <p className="text-xl md:text-2xl mb-8">Reserve your stay with us</p>
        </div>
      </header>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Book Your Stay</h2>

            <Formik
              initialValues={state}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, handleChange, values }) => (
                <Form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue('name', e.target.value);
                        dispatch({ type: 'SET_FIELD_VALUE', field: 'name', value: e.target.value });
                      }}
                      value={values.name}
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue('email', e.target.value);
                        dispatch({ type: 'SET_FIELD_VALUE', field: 'email', value: e.target.value });
                      }}
                      value={values.email}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="check_in_date">Check-in Date</label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="check_in_date"
                      type="date"
                      name="check_in_date"
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue('check_in_date', e.target.value);
                        dispatch({ type: 'SET_FIELD_VALUE', field: 'check_in_date', value: e.target.value });
                      }}
                      value={values.check_in_date}
                    />
                    <ErrorMessage name="check_in_date" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="check_out_date">Check-out Date</label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="check_out_date"
                      type="date"
                      name="check_out_date"
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue('check_out_date', e.target.value);
                        dispatch({ type: 'SET_FIELD_VALUE', field: 'check_out_date', value: e.target.value });
                      }}
                      value={values.check_out_date}
                    />
                    <ErrorMessage name="check_out_date" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="room">Room Type</label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="room"
                      as="select"
                      name="room"
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue('room', e.target.value);
                        dispatch({ type: 'SET_FIELD_VALUE', field: 'room', value: e.target.value });
                      }}
                      value={values.room}
                    >
                      <option value="">Select Room</option>
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Executive Suite">Executive Suite</option>
                      <option value="Royal Suite">Royal Suite</option>
                    </Field>
                    <ErrorMessage name="room" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="special_requirements">Special Requests</label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="special_requirements"
                      name="special_requirements"
                      as="textarea"
                      rows="4"
                      placeholder="Any special requests?"
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue('special_requirements', e.target.value);
                        dispatch({ type: 'SET_FIELD_VALUE', field: 'special_requirements', value: e.target.value });
                      }}
                      value={values.special_requirements}
                    />
                    <ErrorMessage name="special_requirements" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
