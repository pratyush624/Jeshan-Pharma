import bannerImage from '../../assets/banner.svg';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Jeshan Pharma" className="banner-image" />
    </section>
  );
};

export default Banner;
