import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

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
                // Reset form fields after successful registration
                setName('');
                setEmail('');
                setPassword('');
                navigate('/welcome'); // Redirect to the Welcome page on successful registration
            } else {
                setErrorMessage(data.message || 'Registration failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="register-background">
            <div className="register-overlay" />
            <div className="register-container">
                <h2 className="register-title">Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        className="register-input"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className="register-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="register-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className={`register-button ${name && email && password ? 'active' : ''}`}
                        type="submit"
                        disabled={!name || !email || !password}
                    >
                        Register
                    </button>
                </form>
                {errorMessage && <p className="register-error">{errorMessage}</p>}
                <p className="register-login">
                    Already have an account?{' '}
                    <Link to="/login" className="register-login-link">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
