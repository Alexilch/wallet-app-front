import React from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from 'formik';
import {logIn} from '../../redux/auth/auth-operations'
import * as Yup from 'yup';
import icons from 'images/sprite.svg';

const LoginForm = () => {
    const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string('Enter your email')
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string('Enter your password')
        .min(6, 'Password must be at least 6 characters long')
        .max(12)
        .required('Password is required'),
    }),

      onSubmit: (values, { resetForm }) => {
          const { email, password } = values;
            dispatch(logIn(email, password));
          
      console.log('Form data:', values);
      resetForm();
    },
  });
  return (
    <>
      <svg width="40" height="40">
        <use href={`${icons}#wallet`}></use>
      </svg>
      <h1>Wallet</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}

              <button type="submit">Sign in</button>
              <NavLink to="/register">Sign up</NavLink>
   
      </form>
    </>
  );
};


export default LoginForm;
