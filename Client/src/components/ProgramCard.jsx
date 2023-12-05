import { Link } from "react-router-dom";

export default function ProgramCard ({ program }) {
  return (
    <Link to={`/program/${program.programId}/${program.workoutId}`} className='program-card'>
      <h2>{program.name}</h2>
      <p className='friend-username'>Desctription: {program.description}</p>
      <p>{program.duration}</p>
    </Link>
  );
}