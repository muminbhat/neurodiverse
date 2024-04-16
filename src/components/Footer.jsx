import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { currentApi } from '../keys/backend';

const swal = require("sweetalert2");

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Use errorMessage state for displaying errors
  const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const response = await axios.post(
  //       `${currentApi}api/appointment/newsletter/post/`,
  //       formData
  //     );
  //     if (response.status === 201) {
  //       console.log('Posted data:', response.data);
  //       setLoading(false);
  //       setErrorMessage(null); // Clear any previous errors
  //       setSubmitted(true)
  //       swal.fire({
  //         title: 'Added Successfully',
  //         icon: 'success',
  //         toast: true,
  //         timer: 6000,
  //         position: 'top-right',
  //         timerProgressBar: true,
  //         showConfirmButton: false,
  //       });
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       console.error('Error:', error.response.data);
  //       setErrorMessage('Failed to subscribe. Please try again.');
  //       setLoading(false);
  //       swal.fire({
  //         title: 'Failed to subscribe',
  //         icon: 'error',
  //         toast: true,
  //         timer: 5000,
  //         position: 'top-right',
  //         timerProgressBar: false,
  //         showCloseButton: true,
  //         showConfirmButton: false,
  //       });
  //     } else {
  //       console.error('Network Error:', error);
  //       setErrorMessage('Network error. Please try again later.');
  //       setLoading(false);
  //     }
  //   }
  // };

  const handleSubmit = () => {
    return;
  };

  const handleChange = () => {
    return;
  };
  return (
    <footer className="bg-gray-900 w-full">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link
              to="/"
              className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-label="Brand"
            >
              {/* <img src={logoNav} className="h-12 mr-3 mb-2" alt="JKDAILY LOGO" /> */}

              <span className="self-center text-lg font-bold whitespace-nowrap text-[#eeeeee]  dark:text-[#eeeeee] hidden md:inline logo">
                Neuro
                <span className="text-[#E76016]  dark:text-[#faa373] logo text-lg font-bold">
                  Diverse
                </span>
              </span>
            </Link>
          </div>
          {/* End Col */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Company</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  to={"/"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  to={"/about"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  About
                </Link>
              </p>
              <p>
                <Link
                  to={"/team"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Team
                </Link>
              </p>

              <p>
                <Link
                  to={"/media"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Media
                </Link>
              </p>

              <p>
                <Link
                  to={"/internship"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Internships
                </Link>
              </p>

              <p>
                <a
                  href="https://wa.me/9622727372"
                  target="blank"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Services</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  to={"/services"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Assessments and Diagnosis
                </Link>
              </p>
              <p>
                <Link
                  to={"/services"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Physiotherapy
                </Link>
              </p>
              <p>
                <Link
                  to={"/services"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Occupational Therapy
                </Link>
              </p>

              <p>
                <Link
                  to={"/services"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Speech Therapy
                </Link>
              </p>

              <p>
                <Link
                  to={"/services"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Special Education
                </Link>
              </p>

              <p>
                <Link
                  to={"/services"}
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  ADL Training
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Stay up to date</h4>
            {submitted ? (
              <div
                className="bg-teal-100 border mt-5 border-teal-200 text-sm text-teal-800 rounded-lg p-4 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500"
                role="alert"
              >
                <span className="font-bold">Success</span> Your Email has been
                successfully added!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* api/appointment/newsletter/post/ */}
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-black border-black-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 dark:bg-600 dark:hover:bg-primary-700"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  Latest updates and blogs
                </p>
              </form>
            )}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 NEURODIVERSE. All rights reserved. <br />
              <span className="mt-3 text-xs text-gray-400">
                Designed and Developed by
              </span>{" "}
              <a target="blank" href="https://muminbhat.com">
                <span className="text-md text-gray-100 underline italic">
                  Mumin Bhat
                </span>
              </a>
            </p>
          </div>
          {/* End Col */}
          {/* Social Brands */}
          <div>
            <a
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.facebook.com/profile.php?id=61550089741282&mibextid=ZbWKwL"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.instagram.com/neurodiverse2023?utm_source=qr&igsh=MTE0anFncHFtdGNuZw=="
              target="_blank"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>

            <a
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://youtube.com/@Neurodiverse-pv3pr?si=JJsbrGK0fr9p57wr"
              target="_blank"
            >
              <svg
               className="flex-shrink-0 w-4 h-4"
               xmlns="http://www.w3.org/2000/svg"
               width={16}
               height={16}
               fill="currentColor"
              viewBox="0 0 50 50"
            >
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg>
            </a>
          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
