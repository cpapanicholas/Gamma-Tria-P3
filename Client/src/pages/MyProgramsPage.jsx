import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";
import { useQuery } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import { useUserContext } from "../../utils/UserContext";
import { useContext } from 'react';

export default function MyPrograms ({ post }) {
  const userContext = useUserContext();
  // console.log(UserContext);
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
  console.log(userContext);
  return (
    <div className='myPrograms-container'>
      {programs.map((program) => <ProgramCard program={program}/>)}
      <Footer/>
    </div>
  );
}