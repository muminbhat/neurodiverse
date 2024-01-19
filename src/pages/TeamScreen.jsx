import React from "react";

const TeamScreen = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden mt-20">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Developmental and Behavioral Pediatrics
              </p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-bold text-orange-600 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  <span> NEURODIVERSE </span>
                  <span className="text-blue-900">@Team</span>
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-gray-900">
                  Our teams are united by a shared commitment to championing
                  neurodiversity. Discover the unique strengths that each team
                  member brings, contributing to a workplace that thrives on
                  inclusivity and excellence.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="https://wa.me/9622727372"
                  target="blank"
                >
                  Book Appointment
                  <svg
                    className="flex-shrink-0 w-4 h-4"
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

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
                  Speech Therapist
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
            <div className="text-center">
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto object-cover"
                src="https://res.cloudinary.com/dxn2kt39b/image/upload/v1705598030/cdgoeptfbmsicwrqc75b.jpg"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  ISHRAT ASHRAF
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  CLINICAL DIETICIAN
                </p>
              </div>
            </div>
            <div className="text-center">
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto object-cover"
                src="https://res.cloudinary.com/dxn2kt39b/image/upload/v1705598031/tlsukfvk9qoknfcxrvqn.jpg"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Nusrat Shabir Aga
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Special Educator
                </p>
              </div>
            </div>
          </div>

          {/* End Grid */}
        </div>
        {/* End Team */}
      </>
    </>
  );
};

export default TeamScreen;
