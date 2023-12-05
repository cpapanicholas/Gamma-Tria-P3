import { useState,useEffect, useRef } from 'react';

const FileUpload = () => {
  let url = '';
  const [media, setMedia] = useState('')
  const cloudinaryRef= useRef()
  const widgetRef= useRef()
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dcihxuwle',
      uploadPreset: 'ap3smpbe'
    }, function(error, result) {
      if (result.info.files) {
        console.log(result.info.files[0].uploadInfo.secure_url)
        url = result.info.files[0].uploadInfo.secure_url
        setMedia(url)
      }
    })
  }, [])

  return (
    <div>
      <video width="800" height="800"  loop autoPlay muted>
        <source src="https://res.cloudinary.com/dcihxuwle/video/upload/v1701724774/u3mrvbo9ozjjssxeclgk.mp4" type="video/mp4"/>
      </video>
      
      <button onClick={() => widgetRef.current.open()}>Upload</button>
    </div>

  );
};

export default FileUpload;
