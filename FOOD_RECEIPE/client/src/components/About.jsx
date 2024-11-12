import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Welcome to Foodie AI!</h1>
      </div>
      <div className="about-content">
        <div className="section">
          <div>
            <h3>What is Foodie AI?</h3>
            <p>
              At Foodie AI, we aim to bring technology and delicious food together! Using advanced AI technology, our platform helps you identify the food in front of you just by uploading a picture. Whether it's your favorite dish from a restaurant or a home-cooked meal, our AI will analyze the image and provide you with a list of possible recipes that you can try at home.
            </p>
          </div>
          <div className="image-container">
            <img src="https://via.placeholder.com/1200x600?text=Food+Identification+AI" alt="Food Identification" className="dynamic-image" />
          </div>
        </div>

        <div className="section">
          <div>
            <h3>Food Identification</h3>
            <p>
              Our AI can help you identify any dish with just a photo! Whether you're at a restaurant or cooking at home, simply upload an image, and we'll suggest recipes based on the food in the picture. It’s like having a personal chef right in your pocket!
            </p>
          </div>
          <div className="image-container">
            <img src="https://via.placeholder.com/1200x600?text=Food+Identification" alt="Food Identification" className="dynamic-image" />
          </div>
        </div>

        <div className="section">
          <div>
            <h3>Curated Recipes</h3>
            <p>
              Access a vast collection of recipes from around the world, tailored to your taste and dietary preferences.
            </p>
          </div>
          <div className="image-container">
            <img src="https://via.placeholder.com/1200x600?text=Curated+Recipes" alt="Curated Recipes" className="dynamic-image" />
          </div>
        </div>

        <div className="section">
          <div>
            <h3>Contest Page</h3>
            <p>
              Participate in our monthly "Recipe Master" contest and stand a chance to win exciting prizes. Show off your culinary skills to the world!
            </p>
          </div>
          <div className="image-container">
            <img src="https://via.placeholder.com/1200x600?text=Recipe+Contest" alt="Recipe Contest" className="dynamic-image" />
          </div>
        </div>

        <div className="section">
          <div>
            <h3>User Contributions</h3>
            <p>
              Add your own recipes and share them with the Foodie AI community. Let others enjoy your delicious creations and become a part of our growing community.
            </p>
          </div>
          <div className="image-container">
            <img src="https://via.placeholder.com/1200x600?text=User+Contributions" alt="User Contributions" className="dynamic-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
