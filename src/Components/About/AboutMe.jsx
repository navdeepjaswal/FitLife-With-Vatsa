import React from 'react';
import { User, Mail, MapPin, Calendar, Award } from 'lucide-react';

const AboutMe = ({
  name,
  title,
  description,
  email,
  location,
  experience,
  achievements,
  imageUrl
}) => {
  return (
    <div className="about-me">
      <div className="image-container">
        <div className="image-wrapper">
          <img alt={`${name} portrait`} />
        </div>
      </div>

      <div className="content">
        <div className="title">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>

        <p className="description">{description}</p>

        <div className="info-grid">
          <div className="info-item">
            <Mail className="icon" />
            <span>{email}</span>
          </div>
          <div className="info-item">
            <MapPin className="icon" />
            <span>{location}</span>
          </div>
          <div className="info-item">
            <Calendar className="icon" />
            <span>{experience}</span>
          </div>
          <div className="info-item">
            <User className="icon" />
            <span>Full-time Available</span>
          </div>
        </div>

        <div className="achievements">
          <h3>Achievements</h3>
          <div className="achievement-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <Award className="icon" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;