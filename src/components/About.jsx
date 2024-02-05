import makeup1 from '../assets/makeup1.jpg';
import wedding2 from '../assets/wedding2.jpg';

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-dvh md:min-h-screen py-4 md:py-8">
      <div className="w-2/3 h-full relative -z-10">
        <img
          src={wedding2}
          alt=""
          className="min-h-2/3 md:h-2/3 absolute top-8 scale-75 -rotate-12 -translate-x-16"
        />
        <img
          src={makeup1}
          alt=""
          className="min-h-2/3 md:h-2/3 absolute top-8 scale-75 rotate-12 translate-x-16"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center md:items-start">
        <h2>About Us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit obcaecati officiis
          sequi delectus incidunt ab doloribus, consequatur
          error corporis tempore, dolores tenetur.
          Voluptatem repellendus, illum dolorum ipsum
          tenetur consequuntur ducimus id totam amet
          distinctio, atque accusamus quod provident facilis
          asperiores.
        </p>
      </div>
    </section>
  );
};

export default About;
