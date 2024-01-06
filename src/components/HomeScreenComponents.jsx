import React from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import hero from "../assets/hero.png";
import serviceData from "../data/serviceData";

const Header = () => {
  const leftFeatures = [
    {
      id: 1,
      text: "Assessments and Diagnosis",
      color: "from-purple-600 to-blue-500",
    },
    { id: 2, text: "Physiotherapy", color: "from-yellow-400 to-red-500" },
    {
      id: 3,
      text: "Occupational Therapy",
      color: "from-green-400 to-gray-500",
    },
    { id: 4, text: "Speech Therapy", color: "from-blue-400 to-pink-500" },
  ];

  const rightFeatures = [
    { id: 1, text: "Special Education", color: "from-teal-400 to-blue-500" },
    { id: 2, text: "ADL Training", color: "from-yellow-400 to-red-500" },
    {
      id: 3,
      text: "Art Therapy",
      color: "from-green-400 to-gray-500",
    },
  ];

  return (
    <div className="bg-teal-700  dark:bg-gray-900 min-h-[30rem] md:max-h-[60rem] mt-[5rem] max-w-[100rem] md:mx-auto  lg:px-8 pt-24 pb-10 rounded-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        className="text-center text-3xl md:text-6xl lg:text-9xl md:tracking-widest font-bold blur-load"
      >
        <span className="bg-gradient-to-br from-teal-100 animate-pulse to-teal-600 text-transparent bg-clip-text  text-gray-200">
          NEURODIVERSE
        </span>
      </motion.h1>
      <div className="flex items-center justify-center">
        <img src={hero} alt="hero" />
      </div>

      {/* Features Start */}
      <div className="relative lg:block items-center hidden bottom-80 left-5">
        {leftFeatures.map((feature) => (
          <div key={feature.id} className="mb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-teal-100 text-3xl font-bold mb-2 "
            >
              {feature.text}
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              transition={{ duration: 5 }}
              className={`bg-gradient-to-r ${feature.color} h-1 `}
            />
          </div>
        ))}
      </div>

      <div className="relative bottom-[35rem] right-20 hidden lg:block">
        {/* Your content for the right side */}
        {rightFeatures.map((feature) => (
          <div key={feature.id} className="mb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-teal-100 text-3xl text-end font-bold mb-2 "
            >
              {feature.text}
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20%", right: 0 }} // Adjust right value as needed
              transition={{ duration: 5 }}
              className={`bg-gradient-to-l ${feature.color} h-1 absolute right-0`}
            />
          </div>
        ))}
      </div>
      {/* Features End */}

      <div className="flex flex-row lg:justify-between justify-center mt-5 lg:-mt-96">
        <p className="text-gray-300 text-center max-w-sm lg:text-start text-xl">
          Tiny Patients, Big Hearts: Your Trusted Partner in Pediatric Wellness
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hidden lg:block focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 animate-bounce"
        >
          Book Consultation
        </button>
      </div>
      <div className="flex flex-row justify-center mt-8 lg:hidden">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 animate-bounce font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Services
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Where Little Smiles Spark Big Dreams - Exceptional Pediatric Care
            for Bright Beginnings.
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          {/* Card */}
          {serviceData.map((service, index) => (
            <div key={service.id}>
              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={service.image}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    {service.name}
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
            </div>
          ))}

          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
};

const Score = () => {
  return (
    <>
      {/* Features */}
      <div className="max-w-[65rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Inclusive Programs
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-teal-600">
              20+
            </p>
            <p className="mt-1 text-gray-500">Inclusive Programs</p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Research Initiatives
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-teal-600">
              07+
            </p>
            <p className="mt-1 text-gray-500">
              neurodiversity and pediatric care
            </p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Happy Clients
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-teal-600">
              98.2%
            </p>
            <p className="mt-1 text-gray-500">this year alone</p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Training Programs
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-teal-600">
              11+
            </p>
            <p className="mt-1 text-gray-500">this year alone</p>
          </div>
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
};

const Team = () => {
  return (
    <>
      {/* Team */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Team
          </h2>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 object-cover sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src={
                "https://res.cloudinary.com/dxn2kt39b/image/upload/v1704532825/p1s7rpfjf3yhqmnssokg.jpg"
              }
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                DR UMAR NAZIR
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                DIRECTOR NEURODIVERSE
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto object-cover"
              src="https://res.cloudinary.com/dxn2kt39b/image/upload/v1704536050/vzj12drgqe9mzlm4v6un.jpg"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Muqadus Fayaz
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Physiotherapist
              </p>
            </div>
          </div>
          
          {/* End Col */}
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-cover mx-auto"
              src="https://res.cloudinary.com/dxn2kt39b/image/upload/v1704532822/jujpj8rxbomv4sczpmlc.jpg"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              MR MUZAMIL MAJID
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Senior Paediatric Rehabilitation Therapist
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 object-cover sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://res.cloudinary.com/dxn2kt39b/image/upload/v1704532822/rdi89ojpufuepngts046.jpg"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Uzma Saimi
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Speech Therapis
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto object-cover"
              src="https://res.cloudinary.com/dxn2kt39b/image/upload/v1704532823/sirgkpgtjthdnmt5xps2.jpg"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              MANISHA GAURAV
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Senior Speech and Language Pathologist 
              </p>
            </div>
          </div>
         
         
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Team */}
    </>
  );
};

const Features = () => {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            {/* Grid */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-4">
                <img
                  className="rounded-xl"
                  src={
                    "https://res.cloudinary.com/dxn2kt39b/image/upload/v1704527138/nvuav6smeufmzg2qozuc.jpg"
                  }
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src={
                    "https://res.cloudinary.com/dxn2kt39b/image/upload/v1704527135/iaduvqtmjpj4repwzc3d.jpg"
                  }
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="col-span-5">
                <img
                  className="rounded-xl"
                  src={
                    "https://res.cloudinary.com/dxn2kt39b/image/upload/v1704527139/umcx4nq23scdajgagbmu.jpg"
                  }
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  Why Choose Neurodiverse
                </h2>
                <p className="text-gray-500">
                  Compassionate care, tailored treatments, and a team dedicated
                  to empowering everyone's unique journey
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Experienced </span> Caring Team
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    Tailored Treatment Plans
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    Holistic Approach <span className="font-bold">to Care</span>
                  </span>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
};

export { Header, Services, Team, Features, Score };
