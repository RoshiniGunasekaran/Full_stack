import React, { useState, useEffect } from 'react';
import './ContestPage.css'; 
const ContestPage = () => {
    const [liveContests, setLiveContests] = useState([]);

    useEffect(() => {
        fetch('/api/contest/live')
            .then(response => response.json())
            .then(data => setLiveContests(data));
    }, []);

    return (
        <div className="contest-container">
            <h1 className="contest-title">Taste With Goodness Contest - 2024</h1>
            <p className="contest-intro">
                Calling all passionate home cooks! Are you ready to showcase your culinary skills and win exciting prizes? 
                Nutreatlife, your one-stop shop for healthy and delicious food, is thrilled to announce its first-ever 
                "Taste with Goodness" Recipe Contest!
            </p>

            {/* Contest Details */}
            <h2>Theme:</h2>
            <p>Create a dish that embodies the essence of "Tasty with Goodness": <strong>deliciousness, health, and sustainability</strong>, featuring at least <strong>one Nutreatlife product (excluding collaborated products)</strong>.</p>

            <h2>Eligibility:</h2>
            <ul>
                <li>Open to residents of India Mainland and Islands above 10 years old. (Kids below 18 may require parental consent)</li>
                <li>Individuals and teams (up to 2 members) are welcome to participate.</li>
            </ul>

            <h2>Submission Guidelines:</h2>
            <ul>
                <li>Submit your original recipe online through our dedicated form by <strong>May 15th, 2024</strong>: <a href="https://forms.gle/Dww8Mq3g4HTHTxez5" target="_blank" rel="noopener noreferrer">Link Here</a></li>
                <li>Video submissions are strongly encouraged; photos are also accepted.</li>
            </ul>

            <h2>Proof of Purchase:</h2>
            <ul>
                <li>To be eligible, participants must have purchased at least one Nutreatlife product from our official website (between March 15th, 2024 and May 10th, 2024)</li>
                <li>For photo submissions: Include a picture of the purchased Nutreatlife product next to the final plated dish (packaging visible).</li>
                <li>For video submissions: Upload through the Google form link provided.</li>
            </ul>

            <h2>Judging Criteria:</h2>
            <h3>Presentation (40%)</h3>
            <ul>
                <li>Visual Appeal: Mouthwatering and aesthetically pleasing.</li>
                <li>Creativity: Showcasing a unique approach or presentation.</li>
                <li>Video/Photo Quality: Clear, well-lit, and engaging. Bonus points for incorporating Nutreatlife products in a visually interesting way.</li>
                <li>Clear Recipe Demonstration: Viewers should be able to easily follow along with your recipe through the video or photos.</li>
            </ul>

            <h3>Health & Functionality (40%)</h3>
            <ul>
                <li>Use of Healthy Ingredients: Fresh, nutritious ingredients.</li>
                <li>Nutritional Value: A well-balanced combination of nutrients.</li>
                <li>Alignment with Nutreatlife's "Goodness" Concept: Your recipe embodies Nutreatlife's commitment to healthy and wholesome eating.</li>
            </ul>

            <h3>Use of Nutreatlife Products (20%)</h3>
            <ul>
                <li>Integration: Seamless incorporation of at least one Nutreatlife product into your recipe.</li>
                <li>Creative Use: Showcasing Nutreatlife products in a novel and innovative way.</li>
                <li>Versatility: Using Nutreatlife products in unexpected ways.</li>
            </ul>

            <h2>Prizes:</h2>
            <ul>
                <li><strong>Grand Prize:</strong> ₹10,000 cash prize and a feature on Nutreatlife's website and social media channels.</li>
                <li><strong>2 Runner-ups:</strong> Goodness hampers worth ₹2,500 each and a feature on Nutreatlife's social media channels.</li>
            </ul>

            <h2>Terms & Conditions:</h2>
            <p>By submitting your recipe, you grant Nutreatlife the right to use your recipe, video/photos, and name for promotional purposes with proper attribution. All entries must be original creations and not infringe on any third-party intellectual property rights.</p>

            <h2>Ready to share your culinary masterpiece?</h2>
            <p>Click here to submit your recipe today and be a part of the "Cook with Goodness" experience! <a href="https://forms.gle/Dww8Mq3g4HTHTxez5" target="_blank" rel="noopener noreferrer">Link Here</a></p>

            <p>We can't wait to see your delicious and healthy creations!</p>

            <p>Any queries? Contact us at <strong>cookwithgoodness@gmail.com</strong> or WhatsApp +91 98486 04589 / +91 92430 24633</p>
        </div>
    );
};

export default ContestPage;
