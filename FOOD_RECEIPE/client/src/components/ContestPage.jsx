import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
            <div className="login-container">
                <h1 className="title">Log In</h1>
                <p className="desc">Login to your account to upload or download pictures, videos, or music</p>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="input-container">
                                <Field type="email" name="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                            </div>
                            <div className="input-container">
                                <Field type="password" name="password" placeholder="Password" />
                                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                            </div>
                            <div className="account-controls">
                                <button type="submit" disabled={isSubmitting}>Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {error && <div className="login-error">{error}</div>}
            </div>
            <div className="placeholder-banner">
                <img src="https://img.freepik.com/free-vector/abstract-flat-design-background_23-2148450082.jpg?size=626&ext=jpg&ga=GA1.1.1286474015.1708934801&semt=sph" alt="" className="banner" />
            </div>
        </div>
    );
};

export default Login;
