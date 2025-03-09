// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa'; 


// const BackIcon = () => {
//   const navigate = useNavigate();

//   // Function to handle going back
//   const handleGoBack = () => {
//     navigate(-1); // Go back to the previous page
//   };

//   return (
//     <div
//       style={{
//         position: 'fixed', // Fixed position to keep it visible across the website
//         top: '20px',
//         left: '20px',
//         cursor: 'pointer',
//         zIndex: 1000, // Ensure it appears above other content
//       }}
//       onClick={handleGoBack}
//     >
//       <FaArrowLeft size={24} color="#007BFF" /> {/* Back icon */}
//     </div>
//   );
// };

// export default BackIcon;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import a back icon from react-icons

const BackIcon = ({ excludeRoutes = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle going back
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Check if the current route is in the excludeRoutes array
  if (excludeRoutes.includes(location.pathname)) {
    return null; // Don't render the back icon on excluded routes
  }

  return (
    <div
      style={{
        position: 'fixed', // Fixed position to keep it visible across the website
        top: '20px',
        left: '20px',
        cursor: 'pointer',
        zIndex: 1000, // Ensure it appears above other content
      }}
      onClick={handleGoBack}
    >
      <FaArrowLeft size={24} color="#007BFF" /> {/* Back icon */}
    </div>
  );
};

export default BackIcon;