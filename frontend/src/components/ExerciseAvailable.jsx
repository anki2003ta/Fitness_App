import React, { useState } from 'react';
import './styles/ExerciseAvailable.css';
import image1 from './image/back.png';
import image2 from './image/arm-muscle.png';
import image3 from './image/bench-press.png';
import image4 from './image/run.png';
import image5 from './image/gym.png';
import image6 from './image/workout.png';
import image7 from './image/lower_leg.png';
import image8 from './image/muscle.png';
import image9 from './image/workout-machine.png';
import image10 from './image/runner.png';
const exercises = [
  {
    name: 'back',
    description: 'Back exercises strengthen back muscles, improving posture, reducing back pain, and increasing overall core strength.',
    image: image1,
  },
  {
    name: 'lower arms',
    description: 'Bicep exercises strengthen lower arm muscles, improving tone, flexibility, and overall arm strength.',
    image: image2,
  },
  {
    name: 'chest',
    description: 'Chest exercises strengthen pectoral muscles, improving muscle mass, posture, and overall upper body strength.',
    image: image3,
  },
  {
    name: 'waist',
    description: 'Waist exercises strengthen abdominal muscles, improving core stability, posture, and reducing waistline.',
    image: image4,
  },
  {
    name: 'shoulders',
    description: 'Shoulder exercises strengthen deltoid muscles, improving flexibility, posture, and overall upper body stability.',
    image: image5,
  },
  {
    name: 'neck',
    description: 'Neck exercises strengthen neck muscles, improving flexibility, posture, and reducing neck pain.',
    image: image6,
  },
  {
    name: 'lower legs',
    description: 'Lower leg exercises strengthen calf muscles, improving ankle stability, flexibility, and overall lower leg strength.',
    image: image7,
  },
  {
    name: 'upper arms',
    description: 'Upper arm exercises strengthen tricep muscles, improving muscle tone, flexibility, and overall arm strength.',
    image: image8,
  },
  {
    name: 'upper legs',
    description: 'Upper leg exercises strengthen thigh muscles, improving strength, flexibility, and overall lower body stability.',
    image: image9,
  },
  {
    name: 'cardio',
    description: 'Cardio exercises improve heart health, increase endurance, burn calories, and enhance overall physical fitness.',
    image: image10,
  },
  {
    name: 'sprint',
    description: 'Sprinting improves speed, agility, power, and cardiovascular endurance.',
    image: image4,
  },
  {
    name: 'muscle',
    description: 'Muscle exercises build strength, increase mass, enhance tone, and improve overall physical performance.',
    image: image8,
  },
  // Add more exercises here if needed
];

const ExercisesPerPage = 4; // Number of exercises to display per page

const ExerciseAvailable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(exercises.length / ExercisesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastExercise = currentPage * ExercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - ExercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <section id="exercises" className="exercise-available-section">
      <h2 className="section-title">Available Exercises</h2>

      {/* Exercise list with pagination */}
      <div className="exercise-list">
        {currentExercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            <h3 className="exercise-title">{exercise.name}</h3>
            <p className="exercise-description">{exercise.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default ExerciseAvailable;