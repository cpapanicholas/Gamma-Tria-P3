import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";
import { useQuery } from '@apollo/client';
import { useUserContext } from "../../utils/UserContext";
import { useContext } from 'react';
import { QUERY_USER_WITH_WORKOUT_INFO } from '../../utils/queries';
import Auth from '../../utils/auth';

export default function MyPrograms({ post }) {
  const userInfo = Auth.getProfile();
  console.log(userInfo);
  const { loading, error, data } = useQuery(QUERY_USER_WITH_WORKOUT_INFO, {
    variables: { id: "656eaf3398df1d462af832d0" },
  });
  console.log(data);
  const programs = [];

  return (
    <div className="myPrograms-container">
      {programs.map((program) => (
        <ProgramCard key={program} program={program} />
      ))}
      <Footer />
    </div>
  );
}