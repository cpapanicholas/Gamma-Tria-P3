import { BreakingChangeType } from "graphql";
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
  let workout = {};
  const { workoutId } = useParams();

  const { loading, err, res } = useQuery(QUERY_WORKOUT_BY_ID, {
    variables: { id: workoutId },
  }); 
  console.log(loading);
  console.log(res, workoutId);
  console.error(err)
  if (res) {
    workout = res
    console.log(workout);
  }

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
