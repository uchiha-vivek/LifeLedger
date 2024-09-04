import { FC } from "react";
import videoBg from '../assets/video.mp4';
import Button from "../components/button/landing-page-button";
const LandingPage: FC = () => {
  return (
    <div className="relative w-full h-screen">
        <div
        className="absolute top-4 left-4 text-black text-lg sm:text-xl  md:text-2xl font-bold "
        >
         LifeLedger
        </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Blockchain Powered Blood Donation
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-5">
          Transparency you can trust !
        </p>
         <div className="mt-5" >
         <Button/>
         </div>
      </div>
    </div>
  );
};

export default LandingPage;
