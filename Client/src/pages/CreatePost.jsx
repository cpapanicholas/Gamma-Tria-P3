import React, { useState } from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import FileUpload from './Upload';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS_BY_USER } from '../../utils/queries';
import placeholderGif from '../assets/squat-weight-lifting.gif';

export default function CreatePost() {
  const [showMenu, setShowMenu] = useState(false);
  const [uploadedMediaUrl, setUploadedMediaUrl] = useState(placeholderGif);
  const [caption, setCaption] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState(''); // Ensure it is defined
  
  const { workoutId } = useParams();
  const userInfo = Auth.getProfile();

  const { loading: loadingFirst, data: dataFirst } = useQuery(QUERY_WORKOUTS_BY_USER, {
    variables: { userId: `${userInfo}` },
  });

  const handleMediaUpload = (url) => {
    setUploadedMediaUrl(url);
  };

  const handleFilterChange = (newFilter) => {
    setSelectedWorkout(newFilter);
  };

  const handleSubmit = () => {
    // Ensure that selectedWorkout is defined here
    console.log('Selected Workout:', selectedWorkout);

    // Prepare the data to be submitted
    const postData = {
      mediaUrl: uploadedMediaUrl,
      caption: caption,
      workoutId: selectedWorkout,
      userId: userInfo._id,
    };

    // Submit the data to your backend or handle it as needed
    console.log('Submitted data:', postData);
    console.log(userInfo)

    // Optionally, you can reset the form fields after submission
    setUploadedMediaUrl(placeholderGif);
    setCaption('');
    setSelectedWorkout('');
  };

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {!loadingFirst ? (
        <div className='psomething'>
          {uploadedMediaUrl && <img src={uploadedMediaUrl} alt="Uploaded Media" id='uploadedMedia' />}
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
