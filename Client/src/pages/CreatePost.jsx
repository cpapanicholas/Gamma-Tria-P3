import Header from '../components/Header/index';
import { useState } from 'react';
import Footer from '../components/Footer/index';
import FileUpload from './Upload'; // Import the renamed Upload component
import { useUserContext } from "../../utils/UserContext";
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS_BY_USER } from '../../utils/queries';

export default function CreatePost() {
  const [showMenu, setShowMenu] = useState(false);
  const [uploadedMediaUrl, setUploadedMediaUrl] = useState(''); // State to manage the uploaded URL
  const { workoutId } = useParams();
  const userInfo = Auth.getProfile();

  const { loading: loadingFirst, data: dataFirst } = useQuery(QUERY_WORKOUTS_BY_USER, {
    variables: { userId: `${userInfo}` },
  });

  const handleMediaUpload = (url) => {
    setUploadedMediaUrl(url); // Update the state with the uploaded URL
  };

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {!loadingFirst ? (
        <div className='psomething'>
          {/* Display the uploaded media */}
          {uploadedMediaUrl && <img src={uploadedMediaUrl} alt="Uploaded Media" id='uploadedMedia' />}
          {/* Caption */}
          <div>
            <input type="text" name="" id="captionBox" placeholder='Provide Caption for Photo' />
          </div>
          {/* Workout dropdown */}
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {dataFirst.getWorkoutsByUserId.map((workout) => (
              <Dropdown.Item key={workout._id} value={workout._id}>
                {workout.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          {/* Upload File */}
          <FileUpload onMediaUpload={handleMediaUpload} />
          {/* Submit */}
          <button>Submit Post</button>
        </div>
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}
