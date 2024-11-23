import React from 'react';
import './LoadingIndicator.css'; // Импортируем стили

const LoadingIndicator = () => {
    return (
        <div className="loader">Loading...</div>
    );
};

export default LoadingIndicator;

// // npm install @lottiefiles/dotlottie-react
// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const LoadingIndicator = () => {
//   return (
//     <div className="loader">Loading...
//     <DotLottieReact
//       src="./LoadingIndicator/animation.lottie"
//       loop
//       autoplay
//     />
//     </div>
//   );
// };
// export default LoadingIndicator;