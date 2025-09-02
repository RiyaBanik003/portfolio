import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Riya</span>
        👋
        <br />
        A Software Engineer from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="mx-5 flex flex-col items-center text-center 
  max-w-md bg-[#2b77e7] text-white rounded-xl  shadow-[6px_6px_0px_#1d4ed8] 
  py-6 px-4 gap-4">

  <p className="text-base sm:text-lg font-medium">
   Building strong skills through <br /> projects and consistent learning
  </p>

  <Link
    to="/about"
    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#2b77e7] font-medium shadow-md hover:bg-gray-100 transition"
  >
    Learn more
    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  </Link>
</div>

    );
  }

  if (currentStage === 3) {
    return (
    <div className="mx-5 flex flex-col items-center text-center 
  max-w-md bg-[#2b77e7] text-white rounded-xl  shadow-[6px_6px_0px_#1d4ed8] 
  py-6 px-4 gap-4">

  <p className="text-base sm:text-lg font-medium">
    Worked with many companies and picked up <br /> many skills along the way
  </p>

  <Link 
    to="/projects" 
    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#2b77e7] font-medium shadow-md hover:bg-gray-100 transition"
  >
    Learn more
    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  </Link>
</div>



    );
  }

  if (currentStage === 4) {
    return (
      <div className="mx-5 flex flex-col items-center text-center 
  max-w-md bg-[#2b77e7] text-white rounded-xl  shadow-[6px_6px_0px_#1d4ed8] 
  py-6 px-4 gap-4">

  <p className="text-base sm:text-lg font-medium">
    Open to internships and full-time roles. <br /> Let’s discuss how I can add value to your team.
  </p>

  <Link 
    to="/contact" 
className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#2b77e7] font-medium shadow-md hover:bg-gray-100 transition"
  >
    Learn more
    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  </Link>
</div>
    );
  }

  return null;
};

export default HomeInfo;