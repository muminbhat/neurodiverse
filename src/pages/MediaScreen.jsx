import React from 'react'
import mediaData from '../data/mediaData'
import serviceData from '../data/serviceData'

const MediaScreen = () => {
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
                <span className="text-blue-900">@Media</span>
              </h1>
            </div>
            {/* End Title */}
            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-900">
              Dive into the world of Neuro Diverse through our media coverage. Stay updated on our latest initiatives, success stories, and insightful discussions. From featured articles to interviews and multimedia content, this page serves as a window into the impactful work we do.
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

    <div className="md:max-w-7xl md:mx-auto mb-10">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
    {mediaData.map((media, index)=> (
      <div key={index}>
    <div className="space-y-2">
      <img
        className="w-full sm:size-80 object-cover"
        src={media.image}
        alt="Image Description"
      />
    </div>
  
    {/*  */}
    </div>
  ))}
  </div>
</div>

  </>

  )
}

export default MediaScreen