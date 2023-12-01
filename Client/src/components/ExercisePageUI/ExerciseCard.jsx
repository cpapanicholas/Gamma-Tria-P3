import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export default function ExerciseCard({ exercise, index }) {
  const [weights, setWeights] = useState(Array(exercise.length).fill(''));
  const [completedSets, setCompletedSets] = useState([]);
  const [allSetsCompleted, setAllSetsCompleted] = useState(false);
  const [showSets, setShowSets] = useState(false);

  const handleWeightChange = (setIndex, value) => {
    const newWeights = [...weights];
    newWeights[setIndex] = value;
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
    if (completedSets.length === exercise.sets) {
      return setAllSetsCompleted(true)
    } else if (completedSets.length != exercise.sets) {
      return setAllSetsCompleted(false)
    }
  }, [completedSets]);

  const handleDropDownClick = () => {
    // Toggle the visibility of the table
    setShowSets((prevShowSets) => !prevShowSets);
  };

  return (
    <>
        <div key={index} className="exercise-card">
          <div className='exercise-card-title'>
            <p>{exercise.name}</p>
            
            <FontAwesomeIcon
              icon={faCaretDown} 
              onClick={() => handleDropDownClick(!showSets, index)}
            />
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
                {Array.from({ length: exercise.sets }, (_, setIndex) => (
              <div className="table-row">
                  <React.Fragment key={setIndex}>
                    <div className="table-column-sets">{setIndex + 1}</div>
                    <div className="table-column-reps">{exercise.reps}</div>
                    <div className="table-column-weight">
                      <input
                        type="number"
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


