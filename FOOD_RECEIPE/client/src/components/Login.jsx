import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import './Login.css'; 

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(3, 'Password must be at least 6 characters') 
        .required('Password is required'),
});

const Login = () => {
    const [error, setError] = useState(null); 
    const navigate = useNavigate(); 

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
                navigate('/meal'); // Redirect to the Meal component
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
        <div className="login-page">
            <div className="background-image"></div>
            <div className="overlay"></div> {/* Overlay for darkening effect */}
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit} // Handle form submission
                >
                    {({ isSubmitting }) => (
                        <Form className="login-form">
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="login-input"
                                />
                                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                            </div>
                            <div>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="login-input"
                                />
                                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                            </div>
                            <button type="submit" className="login-button" disabled={isSubmitting}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
                {error && <p className="login-error">{error}</p>} {/* Display error message */}
                <p className="login-register">
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className="login-register-link">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
