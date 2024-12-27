import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/exercise/${id}`);
        setExercise(response.data);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
      }
    };

    fetchExerciseDetails();
  }, [id]);

  if (!exercise) {
    return <p>Loading exercise details...</p>;
  }

  return (
    <div className="exercise-details">
      <h2>{exercise.name}</h2>
      <img src={exercise.gifUrl} alt={exercise.name} />
      <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
      <p><strong>Target:</strong> {exercise.target}</p>
      <p><strong>Equipment:</strong> {exercise.equipment}</p><br/>
      <p><strong>Instructions: </strong><br/>
            <br/><strong>1.</strong> {exercise.instructions[0]}
            <br/><strong>2.</strong> {exercise.instructions[1]}
            <br/><strong>3.</strong> {exercise.instructions[2]}
            <br/><strong>4.</strong> {exercise.instructions[3]}
            <br/><strong>5.</strong> {exercise.instructions[4]}
            <br/>
            <br/>
      </p>
    </div>
  );
};

export default ExerciseDetails;