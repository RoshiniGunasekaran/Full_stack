import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Login.css';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const Login = () => {
    const [error, setError] = useState(null);

    const handleSubmit = async (values, { setSubmitting }) => {
        const { email, password } = values;

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log('Login successful');
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-2-wrapper">
                <h2 className="logo text-center">Logo</h2>
                <h2 className="text-center mb-4">Sign Into Your Account</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-3 form-box">
                                <Field
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <Field
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Your Password"
                                />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                                <a href="forget-3.html" className="text-decoration-none float-end">Forget Password</a>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                    <Field type="checkbox" className="form-check-input" id="rememberMe" />

                                    
                                    
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3" disabled={isSubmitting}>Login</button>
                            <div className="social-login mb-3 type--A">
                                <button className="btn btn-outline-secondary mb-3"><i className="fa-brands fa-google text-danger"></i> Sign With Google</button>
                                <button className="btn btn-outline-secondary mb-3"><i className="fa-brands fa-facebook-f text-primary"></i> Sign With Facebook</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {/* Use Link instead of a regular <a> to navigate to the Register page */}
                <p className="text-center register-test mt-3">
                    Don't have an account? 
                    <Link to="/register" className="text-decoration-none">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
