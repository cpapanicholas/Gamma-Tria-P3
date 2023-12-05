import { Link } from "react-router-dom";

export default function WorkoutCard ({ workout }) {
  return (
    <Link to={`/workout/${workout._id}`} className='program-card'>
      <h2>{workout.name}</h2>
      <p className='friend-username'>Desctription: {workout.description}</p>
      <p>{workout.duration}</p>
    </Link>
  );
}