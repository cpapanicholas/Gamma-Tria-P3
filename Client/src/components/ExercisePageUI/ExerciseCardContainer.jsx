import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import ExerciseCard from './ExerciseCard';

export default function ExerciseCardContainer({ exercise }) {
  const [showSets, setShowSets] = useState(false);

  const handleDropDownClick = () => {
    // Toggle the visibility of the table
    setShowSets((prevShowSets) => !prevShowSets);
  };

  return (
    <div className='exercise-container'>
      {exercise.exercises.map((exercise, index) => (
        <ExerciseCard key={exercise.name} exercise={exercise} index={index} showSets={showSets}/>
      ))}
      {showSets ? 
      <FontAwesomeIcon
        icon={faCaretDown} 
        onClick={() => handleDropDownClick(!showSets)}
        className='openSets-toggle'
        rotation={180}
        /> : 
      <FontAwesomeIcon
        icon={faCaretDown} 
        onClick={() => handleDropDownClick(!showSets)}
        className='openSets-toggle'
      /> }
    </div>
  );
}


