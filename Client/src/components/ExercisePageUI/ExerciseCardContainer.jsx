// exerciseCardContainer.jsx
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ExerciseCard from './ExerciseCard';

export default function ExerciseCardContainer({ exerciseGroup, updateExerciseGroups, exerciseGroupIndex }) {
  const [showSets, setShowSets] = useState(false);
  const [thisExerciseGroup, setExerciseGroups] = useState(exerciseGroup)
  const [sets, setSets] = useState([])

  // console.log(thisExerciseGroup);
  

  // Toggle the visibility of the sets and reps
  const handleDropDownClick = () => {
    setShowSets((prevShowSets) => !prevShowSets);
  };

  const handleExerciseUpdate = (index, updatedData) => {
    // Update the workout object with the new data for the specific exercise
    
    const updatedExerciseGroup = ''
    updateExerciseGroups(updatedExerciseGroup, exerciseIndex)
    console.log(index, updatedData);
  };

  // useEffect(() => {
  //   if (completedSets.length === exercise.sets) {
  //     return setAllSetsCompleted(true)
  //   } else if (completedSets.length != exercise.sets) {
  //     return setAllSetsCompleted(false)
  //   }
  // }, [sets]);

  return (
    <div className='exercise-container'>
      {thisExerciseGroup.exercises.map((exercise, exerciseIndex) => (
        <ExerciseCard
          key={exerciseIndex}
          exercise={exercise}
          phase={thisExerciseGroup.phase}
          exerciseIndex={exerciseIndex}
          showSets={showSets}
          handleExerciseUpdate={handleExerciseUpdate}
          sets={sets}
          setSets={setSets}
        />
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


