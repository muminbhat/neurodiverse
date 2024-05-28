import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import serviceData from "../data/serviceData";
import heroSliderData from "../data/heroSliderData";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import testimonialData from "../data/testimonialData";

const Header = () => {
  return (
    <div className="max-w-[85rem] w-full overflow-x-hidden overflow-y-hidden px-4 py-6 sm:px-6 mt-10 lg:py-14 mx-auto rounded">
      <div className="flex text-center items-center justify-center py-10">
        <h1 className=" font-bold text-orange-700 dark:text-orange-600">
          <span className="text-xl md:text-7xl">NEURODIVERSE</span> <br />{" "}
          <span className="text-sm md:text-3xl text-orange-500 dark:text-orange-300">
            Centre for Developmental and Behavioral Pediatrics
          </span>
        </h1>
      </div>
      <Swiper
        effect="coverflow"
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          740: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {/* Grid */}
        <div>
          {heroSliderData.map((ad, index) => (
            <div key={index}>
              <SwiperSlide>
                <Link to={"/services/" + ad.slug}>
                  <div className="aspect-w-16 aspect-h-10 relative">
                    <img
                      className="w-full object-cover rounded-xl max-h-[35rem]"
                      src={ad.image}
                      alt="advertisements"
                    />
                    <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                    <div className="absolute bottom-10 left-20 lg:bottom-20 lg:left-36">
                      <h2 className="text-white font-bold text-2xl lg:text-7xl w-40">
                        {ad.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
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
              <Link
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to={"services/" + service.slug}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={service.image}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-orange-600 dark:text-gray-300 dark:group-hover:text-white">
                    {service.name}
                  </h3>
                </div>
              </Link>
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
      <div className="max-w-[65rem] px-4  sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Stats */}
          <div>
            <h4 className="text-lg text-center sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Inclusive Programs
            </h4>
            <p className="mt-2 sm:mt-3 text-center text-4xl sm:text-6xl font-bold text-[#E75F14]">
              20+
            </p>
            <p className="mt-1  text-center text-gray-500">
              Inclusive Programs
            </p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg text-center sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Research Initiatives
            </h4>
            <p className="mt-2 sm:mt-3 text-center text-4xl sm:text-6xl font-bold text-[#E75F14]">
              07+
            </p>
            <p className="mt-1 text-center text-gray-500">
              neurodiversity and pediatric care
            </p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg text-center sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Happy Clients
            </h4>
            <p className="mt-2 text-center sm:mt-3 text-4xl sm:text-6xl font-bold text-[#E75F14]">
              98.2%
            </p>
            <p className="mt-1 text-center text-gray-500">this year alone</p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg text-center sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Training Programs
            </h4>
            <p className="mt-2 text-center sm:mt-3 text-4xl sm:text-6xl font-bold text-[#E75F14]">
              11+
            </p>
            <p className="mt-1 text-center text-gray-500">this year alone</p>
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
                UZMA SAIMI
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                SPEECH THERAPIST
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
                SENIOR SPEECH AND LANGUAGE PATHOLOGIST
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
                NUSRAT SHABIR AGA
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                SPECIAL EDUCATOR
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto object-cover"
              src="/assets/drseeratBashir.jpeg"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                DR SEERAT BAHAR
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                PHYSIOTHERAPIST
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto object-cover"
              src="/assets/shaziaSpeciaEducator.jpeg"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                SYED SHAZIA
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              SPECIAL EDUCATOR
              </p>
            </div>
           
          </div>
          <div className="text-center">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto object-cover"
              src="/assets/InshaAzizSpeechTherapist.jpeg"
              alt="Image Description"
            />
           <div className="mt-2 sm:mt-4">
<h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
  INSHA AZIZ
</h3>
<p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
SPEECH THERAPIST
</p>
</div>
           
          </div>
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
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-800/30 dark:text-orange-500">
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
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-800/30 dark:text-orange-500">
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
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-800/30 dark:text-orange-500">
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

const Testimonials = () => {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Testimonials
          </h2>
        </div>
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Card */}
          {testimonialData.map((testimony, index) => (
            <div key={index}>
              <Link
                className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to={"testimonial/" + testimony.slug}
              >
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover"
                    src={testimony.image}
                    alt="Image Description"
                  />
                </div>
                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    {/* Avatar */}
                    <div className="flex items-center">
                      <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">
                          {testimony.by}
                        </h4>
                      </div>
                    </div>
                    {/* End Avatar */}
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 z-10">
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                      {testimony.title.slice(0, 80) + "..."}
                    </h3>
                    <p className="mt-2 text-white/[.8]">
                      Click to read more...
                    </p>
                  </div>
                </div>
              </Link>
              {/* End Card */}
            </div>
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
};

const Appoint = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden pb-20 before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element-dark.svg')]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
              href="https://wa.me/9622727372"
              target="blank"
            >
              Book Your Appointment Now
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-orange-600 ps-2 dark:text-orange-500">
                  Appoint
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 text-orange-600"
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
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Unlocking Potential Nurturing Future
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your Trusted Partner in Developmental and Behavioral Pediatrics
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-orange-600 to-violet-600 hover:from-violet-600 hover:to-orange-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://wa.me/9622727372"
              target="blank"
            >
              Book Appointment
            </a>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export { Header, Services, Team, Features, Score, Testimonials, Appoint };
