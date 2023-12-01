import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";

export default function MyPrograms ({ post }) {
  const programs = [
    {
      programId: 1,
      workoutId: 1,
    },
    {
      programId: 2,
      workoutId: 2,
    },
    {
      programId: 3,
      workoutId: 3,
    },
    {
      programId: 4,
      workoutId: 4,
    }
  ]
  return (
    <div className='myPrograms-container'>
      {programs.map((program) => <ProgramCard program={program}/>)}
      <Footer/>
    </div>
  );
}