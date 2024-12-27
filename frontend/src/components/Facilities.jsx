import React from 'react';
import './styles/Facilities.css'; // Import the CSS file for styling

const facilitiesData = [
  {
    icon: 'https://img.icons8.com/ios-filled/100/4caf50/dumbbell.png',
    title: 'Personalized Workouts',
    description: 'Get tailored workout plans to achieve your fitness goals effectively.',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/100/ff5722/food.png',
    title: 'Diet Plans',
    description: 'Healthy and balanced diet suggestions for a fitter you.',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/100/3f51b5/calculator.png',
    title: 'Health Tracking',
    description: 'Monitor your progress with advanced health metrics and stats.',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/100/673ab7/sleep.png',
    title: 'Mindfulness Tips',
    description: 'Improve mental well-being with mindfulness and meditation advice.',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/100/ff9800/running.png',
    title: 'Activity Tracking',
    description: 'Track your running, cycling, and other physical activities effortlessly.',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/100/ff9800/exercise.png',
    title: 'Plan WorkOut',
    description: 'Plan WorkOut For Different categories of People.',
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="facilities-section">
      <h2 className="section-title">Our Facilities</h2>
      <div className="facilities-container">
        {facilitiesData.map((facility, index) => (
          <div key={index} className="facility-card">
            <img src={facility.icon} alt={facility.title} className="facility-icon" />
            <h3 className="facility-title">{facility.title}</h3>
            <p className="facility-description">{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;