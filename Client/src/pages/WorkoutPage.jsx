import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";

export default function WorkoutPage (props) {
  const workout = [
    {
      programId: 1,
      workoutId: 1,
    }
  ]
  return (
    <div className='myPrograms-container'>
      {programs.map((program) => <ProgramCard program={program}/>)}
      <Footer/>
    </div>
  );
}