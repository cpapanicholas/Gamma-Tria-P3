import Header from '../components/Header/index'
import { useState, useEffect  } from 'react';
import HomeMenu from '../components/HomeMenu';
import Feed from '../components/Feed';
import Footer from '../components/Footer/index'
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUserContext } from "../../utils/UserContext";
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_POSTS } from '../../utils/queries';

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  const userInfo = Auth.getProfile();

  const { loading, error, data } = useQuery(QUERY_ALL_POSTS); 
  console.log(data);
  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? (
        <HomeMenu />
      ) : (
        <>
          {loading ? (
            // Render a loading indicator while data is being fetched
            <p>Loading...</p>
          ) : error ? (
            // Render an error message if there's an error
            <p>Error: {error.message}</p>
          ) : data && data.getAllPosts && data.getAllPosts.length > 0 ? (
            // Render the Feed component if there are posts
            <Feed posts={data.getAllPosts} />
          ) : (
            // Render something else if there are no posts
            <p>No posts available.</p>
          )}
        </>
      )}
      <Footer />
    </>
  );
}