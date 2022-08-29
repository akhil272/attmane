import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" lg:px-36 p-10  space-y-10 h-full py-10">
      <h1 className="text-4xl font-medium">About us</h1>
      <div className="lg:flex  lg:space-x-32 justify-center items-center">
        <Image
          alt="about cover art"
          src="/images/About_Art_Cover.png"
          height={428}
          width={605}
        />
        <p className="text-2xl lg:w-1/3 font-bold">
          We believe in going beyond possibilities. Take your idea and upgrade
          it to a sold digital platform with the latest trends and business
          specifications
        </p>
      </div>
      <div>
        <p className="text-lg">
          At Attmane, we develop innovatively and create products and services
          that provide a business competitive advantage. Every business faces
          unique challenges and applying a generic solution never gonna provide
          the best results. We look for possibilities. Possibilities that lead
          to unique approaches that will help a business achieve the best
          optimization of available resources.
        </p>
      </div>
    </div>
  );
};

export default About;
