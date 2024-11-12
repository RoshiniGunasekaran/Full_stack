import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Ensure this file includes your updated CSS

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setErrorMessage('All fields are required.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Handle successful registration here (e.g., redirect to login page)
                console.log('Registration successful');
            } else {
                setErrorMessage(data.message || 'Registration failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="row">
                {/* Left Blank Side */}
                <div className="col-lg-6"></div>

                {/* Right Side Form */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="form-2-wrapper">
                        <div className="logo text-center">
                            <h2>Logo</h2>
                        </div>
                        <h2 className="text-center mb-4">Create Your Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 form-box">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3 form-box">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="register-btn w-100 mb-3">
                                Register
                            </button>
                            <div className="social-login mb-3 type--A">
                                <h5 className="text-center mb-3"></h5>
                                <button className="social-login-button google-btn w-100 mb-3">
                                    <i className="fa-brands fa-google text-danger"></i> Register with Google
                                </button>
                                <button className="social-login-button facebook-btn w-100 mb-3">
                                    <i className="fa-brands fa-facebook-f text-primary"></i> Register with Facebook
                                </button>
                            </div>
                        </form>

                        {/* Login Link */}
                        <p className="text-center mt-3">
                            Already have an account?{' '}
                            <Link to="/login" className="text-decoration-none">
                                Login here
                            </Link>
                        </p>

                        {errorMessage && <p className="text-center text-danger">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
