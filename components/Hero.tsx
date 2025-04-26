import Marquee from "./Marquee";

// components/Hero.tsx
const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="lg:text-7xl md:text-5xl text-4xl font-semibold">
        {" "}
        Make your websites look <br /> 10x Awesome{" "}
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        Pre-built components crafted for performance and consistency.
      </p>
      <div className="flex justify-center mt-10">
        <button className=" transform hover:scale-110 transition duration-300 p-4 m-2 bg-black text-white rounded-2xl text-md cursor-pointer">
          Browse Components
        </button>
        <button className="transform hover:scale-110 transition duration-300 p-4 m-2 mx-4 text-gray-800 border border-gray-300 rounded-2xl text-md cursor-pointer">
          Custom Components
        </button>
      </div>
      <Marquee />
    </section>
  );
};

export default Hero;
