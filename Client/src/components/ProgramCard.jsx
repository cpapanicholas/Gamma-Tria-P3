import { Link } from "react-router-dom";

export default function ProgramCard ({ program }) {
  return (
    <Link to={`/program/${program.programId}/${program.workoutId}`} className='program-card'>
      <p className='friend-username'>Program {program.programId}</p>
    </Link>
  );
}