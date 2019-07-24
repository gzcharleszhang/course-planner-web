import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    email: '',
    password: '' 
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email"),
    password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
});

const Login = () => (
    <Formik
    initialValues = {initialValues}
    validationSchema={LoginSchema}
    render={({ errors, touched }) => (
        <Form>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
            <ErrorMessage name="email" component="div" className="invalid-feedback" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
            <ErrorMessage name="password" component="div" className="invalid-feedback" />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">Login</button>
            <button type="button" className="btn btn-secondary">Signup</button>
        </div>
    </Form>
    )} />
);


export default Login;
