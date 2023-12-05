// ExerciseList.js

import React, { useEffect, useState } from 'react';
import { fetchExercises } from '../../../server/utils/api'; // Adjust the path
const muscleGroups = [
  'abdominals',
  'abductors',
  'adductors',
  'biceps',
  'calves',
  'chest',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'lower_back',
  'middle_back',
  'neck',
  'quadriceps',
  'traps',
  "triceps",]
const ExerciseList = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [exercises, setExercises] = useState([]);

  const onSelectMuscleGroup = async (selectedMuscleGroup) => {
    console.log(selectedMuscleGroup);



    try {
      const response = await fetchExercises(selectedMuscleGroup);
      console.log(response);
      // const filteredExercises = response.data.filter(
      //   (exercise) => exercise.muscle === selectedMuscleGroup
      // );
      setExercises(response);
      setSelectedMuscleGroup(selectedMuscleGroup);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch all exercises initially
    onSelectMuscleGroup('');
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="muscleGroup">Select Muscle Group:</label>
        <select id="muscleGroup" onChange={(e) => onSelectMuscleGroup(e.target.value)}>
          <option value="">Select...</option>
          {muscleGroups.map((muscle, index) => (
            <option key={index} value={muscle}>
              {muscle}
            </option>
          ))}
        </select>
      </div>

      {selectedMuscleGroup && (
        <div>
          <h2>Exercises for {selectedMuscleGroup}</h2>
          <ul>
            {exercises.map((exercise, index) => (
              <li key={index}>
                <strong>{exercise.name}</strong> - {exercise.instructions}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
