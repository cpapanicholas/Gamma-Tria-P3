// workoutPage.jsx
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";
import { useMutation } from '@apollo/client';
import ExerciseCardContainer from "../components/ExercisePageUI/ExerciseCardContainer";

import { UPDATE_WORKOUT } from '../../utils/mutations'
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUT_BY_ID } from '../../utils/queries';
import { useParams } from 'react-router-dom';

export default function WorkoutPage (props) {
  const [updateWorkout, { error, data }] = useMutation(UPDATE_WORKOUT);

  const { workoutId } = useParams();
  const { loading: loadingFirst, error: errorFirst, data: dataFirst } = useQuery(QUERY_WORKOUT_BY_ID, {variables: { id: workoutId },}); 
 
  let exerciseGroups; 
  if (dataFirst) {
    exerciseGroups = dataFirst.getWorkoutById.workout
  }
  
  const updateExerciseGroups = (updatedExerciseGroup, exerciseGroupIndex) => {
    exerciseGroups[exerciseGroupIndex] = updatedExerciseGroup
    console.log(updatedExerciseGroup);
  }

  const handleCompleteWorkout = () => {
    // update workout mutation will happen here
  }

  return (
    <div className='myPrograms-container'>
    {loadingFirst && <p>Loading...</p>}
    {errorFirst && <p>Error: {errorFirst.message}</p>}
    {dataFirst && (
      <>
        {dataFirst.getWorkoutById.workout.map((exerciseGroup, index) => (
          <ExerciseCardContainer
            key={index}
            exerciseGroupIndex={index} 
            exerciseGroup={exerciseGroup} 
            updateExerciseGroups={updateExerciseGroups}
          />
        ))}
        <button className="btn btn-primary mx-4" onClick={handleCompleteWorkout}>
          Complete Workout
        </button>
      </>
    )}
    <Footer />
  </div>
  );
}