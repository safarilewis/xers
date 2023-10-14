import React, { useEffect, useRef } from "react";

const CloudinaryUploadWidget = ({ onImageUpload }) => {
  const cloudName = "xers"; // replace with your own cloud name
  const uploadPreset = "xers-def"; // replace with your own upload preset

  const widgetRef = useRef(null);

  useEffect(() => {
    // Initialize the Cloudinary Upload Widget
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // Retrieve the uploaded image URL
          const imageUrl = result.info.secure_url;

          // Call the onImageUpload callback with the image URL
          onImageUpload(imageUrl);
        }
      }
    );

    // Clean up the widget when the component unmounts
    return () => {
      if (widgetRef.current) {
        widgetRef.current.destroy();
      }
    };
  }, [onImageUpload]);

  const handleUploadClick = () => {
    if (widgetRef.current) {
      // Open the Cloudinary Upload Widget when the button is clicked
      widgetRef.current.open();
    }
  };

  return (
    <div>
      <button onClick={handleUploadClick} className="cloudinary-button">
        Upload
      </button>
    </div>
  );
};

export default CloudinaryUploadWidget;
