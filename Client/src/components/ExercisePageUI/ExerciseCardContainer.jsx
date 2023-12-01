import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import ExerciseCard from './ExerciseCard';

export default function ExerciseCardContainer({ exercise }) {
  const [weights, setWeights] = useState(Array(exercise.exercises.length).fill(''));
  const [completedSets, setCompletedSets] = useState([]);
  const allSets = completedSets.length === exercise.sets;
  const [allSetsCompleted, setAllSetsCompleted] = useState(false)

  const handleWeightChange = (index, value) => {
    const newWeights = [...weights];
    newWeights[index] = value;
    setWeights(newWeights);
  };

  const handleSetComplete = (setIndex) => {
    setCompletedSets((prevCompletedSets) => {
      if (prevCompletedSets.includes(setIndex)) {
        // Set is already completed, so remove it
        return prevCompletedSets.filter((index) => index !== setIndex);
      } else {
        // Set is incomplete, so mark it as complete
        return [...prevCompletedSets, setIndex];
      }
    });
  };

  useEffect(() => {
    if (completedSets.length === 5) {
      return setAllSetsCompleted(true)
    } else if (completedSets.length != 5) {
      return setAllSetsCompleted(false)
    }
  }, [completedSets]);

  return (
    <>
      {exercise.exercises.map((exercise, index) => (
        <ExerciseCard key={exercise.name} exercise={exercise} index={index}/>
      ))}
    </>
  );
}


