import React from 'react';
import data from '../assets/contactData.json';

export default function Contact() {
  const {contactDetails, socialMedia} = data;

  return (
    <div className='h-90v flex  mx-auto items-end'>
      <div className="h-85v mt-auto w-full p-3 bg-footer rounded-t-3xl border-footer border-t-4 text-white">
        <h1 className='text-3xl font-semibold p-3 md:pl-9 m-3 text-center md:text-left'>Contact Us</h1>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-8/12'>
            {contactDetails.map((d) => (
              <div key={d.title} className='flex justify-center items-center my-5'>
                <div className='w-2/6'>
                  <svg className="h-9 md:h-10 pr-6 md:pr-12 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {d.svg.map((s) => (
                      <path key={s} strokeWidth="2" d={s}></path>
                    ))}
                  </svg>            
                </div>
                <div className='w-4/6'>
                  <h1 className='text-lg font-semibold'>{d.title}</h1>
                  <p className='text-sm md:text-base max-w-md'>{d.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div  className='w-8/12 mx-auto md:w-3/12 md:mt-auto md:mr-auto'>
            <h2 className='text-center md:text-left text-lg font-semibold m-5'>Follow Us</h2>
            <div className='flex justify-evenly items-center'>
              {socialMedia.map((d) => (
                <a key={d.link} href={d.link} target="_blank" rel="noopener noreferrer">
                  <div className='border-2 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 rounded-full'>
                    <svg className="h-5 m-2" fill="white" stroke="currentColor" viewBox="0 0 256 250">
                      {d.svg.map((s) => (
                        <path key={s} d={s}></path>
                      ))}
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className='mt-8 md:mt-32 text-center'>Developed by <em className='font-semibold'>Linus Tribe</em></p>
      </div>
    </div>
  );
}
