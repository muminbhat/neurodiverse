import React from 'react'
import { useParams } from 'react-router';
import testimonialData from '../data/testimonialData';

const TestimonialDetail = () => {
    const { slug } = useParams();
    console.log('Params:', useParams());
    const matchedTestimonial = testimonialData.find(testimonial => testimonial.slug === slug);

    if (!matchedTestimonial) {
        // Handle case where no matching testimonial is found
        return <div className='mt-40'>Testimonial not found</div>;
    }

    const { name, content, image } = matchedTestimonial;
    // Rest of your component logic

    //   


      return (
        <>
        {/* 
      Install the "flowbite-typography" NPM package to apply styles and format the article content: 
      
      URL: https://flowbite.com/docs/components/typography/ 
      */}
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased mt-28">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">


                <img
                  src={image}
                  alt=""
                  className='max-w-[25rem] rounded-xl'
                />
        
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white mt-10">
              {name}
                </h1>
              <p className='text-gray-700 dark:text-gray-300'>
{content}
              </p>
             
            </article>
          </div>
        </main>
        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
        >

        </aside>
        
        
      </>
      
      );
    };

export default TestimonialDetail