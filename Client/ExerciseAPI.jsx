// ExerciseList.js

import React, { useEffect, useState } from 'react';
import { fetchExercises } from '../api'; // Adjust the path

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchExercises();
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <div>
          <div>
      <label htmlFor="muscleGroup">Select Muscle Group:</label>
      <select id="muscleGroup" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select...</option>
        {muscleGroups.map((muscle, index) => (
          <option key={index} value={muscle}>
            {muscle}
          </option>
        ))}
      </select>
    </div>

    </div>
  );
};

export default ExerciseList;
