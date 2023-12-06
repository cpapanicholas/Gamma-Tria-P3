import { useState, useEffect, useRef } from 'react';

const FileUpload = ({ onMediaUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: import.meta.env.VITE_CLOUDNAME,
      uploadPreset: import.meta.env.VITE_CLOUDKEY,
    }, function(error, result) {
      if (result.info.files) {
        const url = result.info.files[0].uploadInfo.secure_url;
        onMediaUpload(url); // Pass the URL to the parent component
      }
    });
  }, [onMediaUpload]);

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
    </div>
  );
};

export default FileUpload;
