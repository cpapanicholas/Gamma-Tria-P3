import { BreakingChangeType } from "graphql";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";
import { useMutation } from '@apollo/client';
import ExerciseCardContainer from "../components/ExercisePageUI/ExerciseCardContainer";
import { UPDATE_WORKOUT } from '../../utils/mutations'

export default function WorkoutPage (props) {
  const [updateWorkout, { error, data }] = useMutation(UPDATE_WORKOUT);
  
  const workout = {
    _Id: 1,
    name: 'test',
    workout: [
      {
        phase: 'A',
        exercises: [
          {
            exercise: {
              name: 'bench',
              type: 'strength',
              muscle: 'chest',
              equipment: 'barbell',
              difficulty: 'beginner',
              instructions: 'dont suck',
              },
            sets: [
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 7, weight: 0 },
            ],
          },
          {
            exercise: {
              name: 'pull-up',
              type: 'strength',
              muscle: 'back',
              equipment: 'pull-up bar',
              difficulty: 'beginner',
              instructions: 'dont suck',
            },
            sets: [
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
            ],
          },
        ],
      },
      {
        phase: 'B',
        exercises: [
          {
            exercise: {
              name: 'squat',
              type: 'strength',
              muscle: 'legs',
              equipment: 'barbell',
              difficulty: 'beginner',
              instructions: 'keep your back straight',
            },
            sets: [
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 5, weight: 0 },
              { reps: 7, weight: 0 },
            ],
          },
          {
            exercise: {
              name: 'overhead press',
              type: 'strength',
              muscle: 'shoulders',
              equipment: 'dumbbells',
              difficulty: 'beginner',
              instructions: 'engage your core',
            },
            sets: [
              { reps: 8, weight: 0 },
              { reps: 8, weight: 0 },
              { reps: 8, weight: 0 },
              { reps: 8, weight: 0 },
            ],
          },
        ],
      },
    ]
  };

  const handleCompleteWorkout = async () => {
    // Assuming workoutId is the ID of the workout you want to update

    const workoutId = workout._Id; // replace with your actual workoutId

    await updateWorkout({
      variables: {
        workoutId,
        updatedWorkout: workout, // replace with your updated workout
      },
    });
  };

  

  return (
    <div className='myPrograms-container'>
      {workout.workout.map((phase) => (

        <ExerciseCardContainer key={phase.phase} exercise={phase} />
        
      ))}
      <button
        className="btn btn-primary mx-4"
        onClick={handleCompleteWorkout}
      >Complete Workout</button>
      <Footer/>
    </div>
  );
}
