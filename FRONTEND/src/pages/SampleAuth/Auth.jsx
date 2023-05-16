import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      userName: '',
      number: '',
      email: '',
      password: '',
      confirmpass: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      lastname: Yup.string().required('Last Name is required'),
      userName: Yup.string().required('Username is required'),
      number: Yup.number().required('Number is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmpass: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      
      console.log(values);
    },
  });

  return (
    <div className="Auth">
      <div className="col-md-6 col-lg-5 a-left">
        {/* ... */}
      </div>
      {/* right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={formik.handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="infoInput"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error-message">{formik.errors.name}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              {...formik.getFieldProps('lastname')}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <div className="error-message">{formik.errors.lastname}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              {...formik.getFieldProps('userName')}
            />
            {formik.touched.userName && formik.errors.userName && (
              <div className="error-message">{formik.errors.userName}</div>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Number"
              className="infoInput"
              {...formik.getFieldProps('number')}
            />
            {formik.touched.number && formik.errors.number && (
              <div className="error-message">{formik.errors.number}</div>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="infoInput"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="infoInput"
              {...formik.getFieldProps('confirmpass')}
            />
            {formik.touched.confirmpass && formik.touched.confirmpass && formik.errors.confirmpass && (
              <div className="error-message">{formik.errors.confirmpass}</div>
            )}
          </div>
          <div>
            <button
              className="button infoButton"
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

