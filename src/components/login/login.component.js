import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, withFormik } from 'formik';
import { bindActionCreators } from 'redux';
import loginUserAction from './login.actions'
import { connect } from 'react-redux';


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

const LoginPage = (props) => (
    <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => (props.loginUserAction(values))}
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

const mapDispatchToProps = dispatch => (bindActionCreators({loginUserAction}, dispatch))
export default connect(null, mapDispatchToProps)(LoginPage);
