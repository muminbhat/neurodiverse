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
    <div className="bg-gray-900  dark:bg-gray-900 min-h-[30rem] md:max-h-[60rem] mt-[5rem] max-w-[100rem] md:mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 rounded-xl mx-5">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        className="text-center text-3xl md:text-6xl lg:text-9xl md:tracking-widest font-bold blur-load"
      >
        <span className="bg-gradient-to-br from-purple-400 to-blue-200 text-transparent bg-clip-text  text-gray-200">
          NEURODIVERSE
        </span>
      </motion.h1>
      <div className="flex items-center justify-center">
        <img src={hero} alt="hero" />
      </div>

      {/* Features Start */}
      <div className="relative lg:block items-center hidden bottom-80 left-10">
        {leftFeatures.map((feature) => (
          <div key={feature.id} className="mb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-4xl font-bold mb-2 animate-bounce"
            >
              {feature.text}
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              transition={{ duration: 1 }}
              className={`bg-gradient-to-r ${feature.color} h-1 `}
            />
          </div>
        ))}
      </div>

      <div className="relative bottom-[35rem] right-40 hidden md:block">
        {/* Your content for the right side */}
        {rightFeatures.map((feature) => (
          <div key={feature.id} className="mb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-4xl text-end font-bold mb-2 animate-bounce"
            >
              {feature.text}
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20%", right: 0 }} // Adjust right value as needed
              transition={{ duration: 1 }}
              className={`bg-gradient-to-l ${feature.color} h-1 absolute right-0`}
            />
          </div>
        ))}
      </div>
      {/* Features End */}

      <div className="flex flex-row md:justify-between sm:justify-center mt-5 md:-mt-96">
        <p className="text-gray-300 text-center max-w-sm md:text-start text-xl">
          Tiny Patients, Big Hearts: Your Trusted Partner in Pediatric Wellness
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 animate-pulse hidden md:block focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Book Consultation
        </button>
      </div>
      <div className="flex flex-row justify-center mt-8 md:hidden">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 animate-bounce  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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

export { Header, Services };
