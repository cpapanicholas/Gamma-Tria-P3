import React, { useState } from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import FileUpload from './Upload';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS_BY_USER } from '../../utils/queries';
import placeholderGif from '../assets/squat-weight-lifting.gif';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';

export default function CreatePost() {
  const [showMenu, setShowMenu] = useState(false);
  const [uploadedMediaUrl, setUploadedMediaUrl] = useState(placeholderGif);
  const [caption, setCaption] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [workoutName, setWorkoutName] = useState('');

  const profFromLocal = Auth.getProfile();
  const userInfo = profFromLocal.data;

  const [addPost, { error, data }] = useMutation(ADD_POST);

  const { loading: loadingFirst, data: dataFirst } = useQuery(QUERY_WORKOUTS_BY_USER, {
    variables: { userId: `${userInfo}` },
  });

  const handleMediaUpload = (url) => {
    setUploadedMediaUrl(url);
  };

  const handleFilterChange = async (newFilter) => {
    const selectedWorkoutObject = dataFirst.getWorkoutsByUserId.find((workout) => workout._id === newFilter);
    const { name: updatedWorkoutName } = selectedWorkoutObject || {};


    // Update state
    setWorkoutName(updatedWorkoutName);
    setSelectedWorkout(newFilter);
  };

  const handleCheckboxChange = () => {
    setVisibility((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Wait for the state to be updated
    await handleFilterChange(selectedWorkout);

    // Now, selectedWorkout and workoutName should be updated

    // Prepare the data to be submitted
    const postInput = {
      mediaUrl: uploadedMediaUrl,
      postText: caption,
      workoutId: selectedWorkout,
      workoutName: workoutName,
      visibility,
      userId: userInfo._id,
      username: userInfo.username
    };

    try {
      const { data } = await addPost({
        variables: {postInput: postInput}
      });
      window.location.assign('/home');
    } catch (e) {
      console.error(e);
      console.error("Mutation error:", error.message);
    }

    // Reset state after submission
    setUploadedMediaUrl(placeholderGif);
    setCaption('');
    setSelectedWorkout('');
    setVisibility(true);
  };

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {!loadingFirst ? (
        <div id='Pic-Card' className=' text-center  '>
          {uploadedMediaUrl && <img className='create-post-img' src={uploadedMediaUrl} alt="Uploaded Media" id='uploadedMedia' />}
          <div>
            <input type="text" name="" id="captionBox" placeholder='Provide Caption for Photo' value={caption} onChange={(e) => setCaption(e.target.value)} />
          </div>
          <div className="input-group">
            <label className="input-group-text" htmlFor="filterDropdown">
              Workout:
            </label>
            <select
              id="filterDropdown"
              value={selectedWorkout}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="form-control"
            >
              <option value="">Select Workout</option>
              {dataFirst.getWorkoutsByUserId.map((workout) => (
                <option key={workout._id} value={workout._id}>
                  {workout.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="publicCheckbox"
              checked={visibility}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="publicCheckbox">
              Public
            </label>
          </div>
          <FileUpload onMediaUpload={handleMediaUpload} />
          <button onClick={handleSubmit}>Submit Post</button>
        </div>
        
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}
