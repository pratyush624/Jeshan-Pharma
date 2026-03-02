import ComingSoonImage from '../assets/ComingSoon.webp';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <img 
          src={ComingSoonImage} 
          alt="Coming Soon" 
          className="coming-soon-image"
        />
        <h1 className="coming-soon-title">Coming Soon</h1>
        <p className="coming-soon-description">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;