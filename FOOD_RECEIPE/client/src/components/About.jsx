import React from "react";
import "./About.css";

const AboutUs = () => {
  const topics = [
    {
      title: "Our Mission",
      image: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Use relative URL (public folder)
      text: "Our mission is to provide the best services to our customers. We focus on quality and customer satisfaction above all. We aim to deliver delicious meals that bring joy to every table.",
      additionalContent: "We are constantly innovating to ensure that our customers have access to the freshest, healthiest, and most enjoyable meals."
    },
    {
      title: "Our Vision",
      image: "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Use relative URL (public folder)
      text: "Our vision is to become the leading company in our industry, bringing innovative solutions to our clients and making a positive impact. We aspire to lead in quality and sustainability.",
      additionalContent: "Our vision includes expanding our presence globally and contributing to healthier food systems."
    },
    {
      title: "Our Values",
      image: "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600", // Use relative URL (public folder)
      text: "We believe in integrity, transparency, and accountability in everything we do. Our core values are what guide our work and decision-making. We are committed to excellence.",
      additionalContent: "Our values also include respect for the environment and a commitment to promoting ethical practices across all of our operations."
    },
  ];

  return (
    <div className="about-us">
      <h1 className="page-title">About Us</h1>
      {topics.map((topic, index) => (
        <div className="about-topic" key={index}>
          <div className="text">
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
            <p>{topic.additionalContent}</p>
          </div>
          <div className="image">
            <img src={topic.image} alt={topic.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
