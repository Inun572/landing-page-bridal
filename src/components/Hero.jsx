import banner from '../assets/banner.jpg';
import { PiArrowRightBold } from 'react-icons/pi';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-content w-full justify-start text-left">
        <div className="max-w-md">
          <h3 className="mb-2 text-2xl font-semibold">
            Love Story in Every Look
          </h3>
          <h1 className="mb-5 text-5xl font-bold">
            Crafting Your Bridal Radiance
          </h1>
          <p className="mb-5">
            Connects makeup to the sentimental aspect of the
            wedding.
          </p>
          <button className="btn btn-primary">
            Unlock your dream{' '}
            <span>
              <PiArrowRightBold />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
