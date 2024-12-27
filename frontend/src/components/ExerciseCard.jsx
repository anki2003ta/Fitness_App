import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} />
      <h3>{exercise.name}</h3>
      <p>Target: {exercise.target}</p>
      <Link to={`/exercise/${exercise.id}`}>
        <button className="details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default ExerciseCard;