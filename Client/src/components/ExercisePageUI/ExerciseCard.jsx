// exerciseCard.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export default function ExerciseCard({ 
    exercise,
    phase, 
    exerciseIndex, 
    showSets, 
    handleExerciseUpdate, 
    sets, 
    setSets,   
  }) {

  const [weights, setWeights] = useState(Array(exercise.length).fill(''));
  const [completedSets, setCompletedSets] = useState([]);
  const [allSetsCompleted, setAllSetsCompleted] = useState(false);
  
  const handleWeightChange = (setIndex, value) => {
    console.log(value);
    const newWeights = [...weights];
    newWeights[setIndex] = value;
    setWeights(newWeights);

    const newSets = [...sets]
    // newSets[setIndex] = {
    //   completed: newSets[setIndex].completed,
    //   reps: newSets[setIndex].reps,
    //   weight: value,
    // }
  }

  const handleSetComplete = async (setIndex) => {
    setCompletedSets((prevCompletedSets) => {
      if (prevCompletedSets.includes(setIndex)) {
        // Set is already completed, so remove it
        return prevCompletedSets.filter((index) => index !== setIndex);
      } else {
        // Set is incomplete, so mark it as complete
        return [...prevCompletedSets, setIndex];
      }
    });

    // const newSets = [...sets];
    // newSets[setIndex] = {
    //   completed: !newSets[setIndex].completed,
    //   reps: newSets[setIndex].reps,
    //   weight: newSets[setIndex].weight,
    // };

    // setSets(newSets);
    // exercise.sets = newSets;
  };

  useEffect(() => {
    if (completedSets.length === exercise.sets.length) {
      return setAllSetsCompleted(true)
    } else if (completedSets.length != exercise.sets.length) {
      return setAllSetsCompleted(false)
    }
  }, [completedSets]);

  // useEffect(() => {
  //   // Notify the parent component of the updates
  //   return onUpdate({ weights, completedSets, allSetsCompleted });
  // }, [completedSets, weights]);

  return (
    <>
        <div key={exerciseIndex} className="exercise">
          <div className='exercise-card-title'>
            <p>{phase + ')'}{exercise.exercise.name}</p>
          </div>
          {showSets && (
            <div className="exercise-table">
              <div className="table-row">
                <div className="table-header-sets">Sets</div>
                <div className="table-header-reps">Reps</div>
                <div className="table-header-weight">Weight (lbs)</div>
                <div className="table-header-check">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={allSetsCompleted ? 'completed-set' : ''}
                  />
                </div>
              </div>
                {Array.from({ length: exercise.sets.length }, (_, setIndex) => (
              <div className="table-row" key={setIndex}>
                  <React.Fragment key={setIndex}>
                    <div className="table-column-sets">{setIndex + 1}</div>
                    <div className="table-column-reps">{exercise.sets[setIndex].reps}</div>
                    <div className="table-column-weight">
                      <input
                        type="number"
                        placeholder={exercise.sets[setIndex].weight}
                        value={weights[setIndex]}
                        className='weight-input'
                        onChange={(e) => handleWeightChange(setIndex, e.target.value)}
                      />
                    </div>
                    <div className="table-column-check">
                      <button
                        onClick={() => handleSetComplete(setIndex)}
                        className={"set-checkmark-btn"}
                      >
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          className={`set-checkmark ${completedSets.includes(setIndex) ? 'completed-set' : ''}`}
                        />
                      </button>
                    </div>
                  </React.Fragment>
              </div>
                ))}
            </div>
            )}
        </div>

    </>
  );
}


