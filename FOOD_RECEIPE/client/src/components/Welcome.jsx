import React from 'react';
import Navbar from '../components/Navbar';
import Image from '../assets/welcome1.png'; // Welcome image
import FoodImage1 from '../assets/food1.jpg'; // Food image 1
import FoodImage2 from '../assets/food2.jpg'; // Food image 2
import FoodImage3 from '../assets/food1.jpg'; // Food image 3
import { useNavigate } from 'react-router-dom';
import './Footer.css'; // Import Footer CSS
import './Welcome.css'; // Import Welcome Page CSS

const Welcome = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className="welcome-page">
            <Navbar />
            <div className="content_welcome">
                <h1>Welcome to Food Identification AI</h1>
                <p>
                    Our AI-powered food identification system helps you identify various food items with ease.
                    Using cutting-edge computer vision and machine learning, we can classify foods accurately and
                    provide nutritional information, preparation tips, and more.
                </p>
                <button className="button_welcome" onClick={handleClick}>
                    Explore Me
                </button>
            </div>
            <div className="image_welcome">
                <img src={Image} alt="Welcome" />
            </div>

            {/* New Trending Foods Section */}
            <div className="trending-foods">
                <h2>Top Three Trending Foods</h2>
                <p>Discover the top trending dishes that everyone is talking about this season!</p>
                <div className="food-items">
                    <div className="food-item">
                        <img src={FoodImage1} alt="Food 1" />
                        <h3>Food Name 1</h3>
                        <p>Brief description about this food, its ingredients, and why it's trending.</p>
                    </div>
                    <div className="food-item">
                        <img src={FoodImage2} alt="Food 2" />
                        <h3>Food Name 2</h3>
                        <p>Brief description about this food, its ingredients, and why it's trending.</p>
                    </div>
                    <div className="food-item">
                        <img src={FoodImage3} alt="Food 3" />
                        <h3>Food Name 3</h3>
                        <p>Brief description about this food, its ingredients, and why it's trending.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-item">
                        <h3>Person 1</h3>
                        <p>Email: <a href="mailto:person1@example.com">person1@example.com</a></p>
                        <p>GitHub: <a href="https://github.com/person1" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/person1" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                    </div>
                    <div className="footer-item">
                        <h3>Person 2</h3>
                        <p>Email: <a href="mailto:person2@example.com">person2@example.com</a></p>
                        <p>GitHub: <a href="https://github.com/person2" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/person2" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                    </div>
                    <div className="footer-item">
                        <h3>Person 3</h3>
                        <p>Email: <a href="mailto:person3@example.com">person3@example.com</a></p>
                        <p>GitHub: <a href="https://github.com/person3" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/person3" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Welcome;
