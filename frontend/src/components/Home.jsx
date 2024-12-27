import React, { useState } from 'react';
import axios from 'axios';
import ExerciseCard from './ExerciseCard';
import image from './image/banner.jpg';
const Home = () => {
  const [bodyPart, setBodyPart] = useState('');
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/exercises', {
        params: { bodyPart },
      });
      setExercises(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
    <div id="Home" className="home">
      <div className='home-left'>
        <h2 className='home-title'>Welcome to the Fitness App</h2>
        <p className='home-description'>Your ultimate guide to staying fit and healthy</p>
        <p className='home-description'><strong>---"Fitness is not a destination,</strong></p>
        <p className='home-description'><strong>it's a journey"</strong></p>
      </div>
      <div className='home-right'>
        <img
          src={image}
          alt="Fitness Banner"
          className="hero-image"
        />
      </div>
      
    </div>
    <div  className='list'>
      <div className='search-input'>
      <input
        type="text"
        placeholder="e.g., chest, arms, legs"
        value={bodyPart}
        onChange={(e) => setBodyPart(e.target.value)}
      />
      <button onClick={fetchExercises}>Search</button>
      </div>
      <div className="exercise-list">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;