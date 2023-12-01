import { BreakingChangeType } from "graphql";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";
import ExerciseCardContainer from "../components/ExercisePageUI/ExerciseCardContainer";

export default function WorkoutPage (props) {
  const workout = [
    {
      phase: 'A',
      exercises: [
        {
          name: 'bench',
          type: 'strength',
          muscle: 'chest',
          equipment: 'barbell',
          difficulty: 'beginner',
          instructions: 'dont suck',
          sets: 5,
          reps: 5,
        },
        {
          name: 'pull-up',
          type: 'strength',
          muscle: 'back',
          equipment: 'pull-up bar',
          difficulty: 'beginner',
          instructions: 'dont suck',
          sets: 3,
          reps: 5,
        },
      ],
    },
    {
      phase: 'B',
      exercises: [
        {
          name: 'squat',
          type: 'strength',
          muscle: 'legs',
          equipment: 'barbell',
          difficulty: 'beginner',
          instructions: 'keep your back straight',
          sets: 4,
          reps: 8,
        },
        {
          name: 'overhead press',
          type: 'strength',
          muscle: 'shoulders',
          equipment: 'dumbbells',
          difficulty: 'beginner',
          instructions: 'engage your core',
          sets: 4,
          reps: 8,
        },
      ],
    },
  ];
  
  
  return (
    <div className='myPrograms-container'>
      {workout.map((phase) => (
        <ExerciseCardContainer key={phase.phase} exercise={phase} />
      ))}
    </div>
  );
}
