import React from 'react'

function roadmap() {

 return (

  <div className='h-300v sm:h-300v md:h-300v lg:h-150v xl:h-100v bg-secondary items-center '>
    {/*header*/}
    <div className='font-sans text-2xl tracking-wide font-bold text-center text-white pt-8 sm:pt-12 md:pt-12'>
        ROADMAP
    </div>
    {/*container*/}
    <div className='container mx-auto grid lg:grid-cols-11 xl-grid-cols-11 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-0 p-12'>
        {/*round-1*/}
        <div className='rounded-md bg-white text-center p-5 col-span-3 mb-3'>
            {/*header*/}
            <div className='header bg-teal-100 p-4'>
                <div className = 'font-sans font-bold text-teal-600 text-xl'>Round-1</div>
                <div className='font-semibold'>Online Qualification Round</div>
            </div>
            {/*details*/}
            <div className='details p-2'>     
                <p><b>Date :</b> 12/03/2022 -Saturday</p>
                <p><b>Location :</b> Online</p>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className = "xl-col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 col-span-3 w-10 sm:rotate-90 md-span-90 xl:rotate-0 lg:rotate-0 rotate-90 m-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        {/*round-2*/}
        <div className='rounded-md bg-white text-center p-5 col-span-3 mb-3'>
            {/*header*/}
            <div className='header bg-teal-100 p-6'>
                <div className='font-sans font-bold text-teal-600 text-xl'>Round-2</div>
                <div className='font-semibold'>Onsite Semi-Finals</div>
            </div>
            {/*details*/}
            <div className='details p-2'>
                <p><b>Date :</b> 19/03/2022 -Saturday</p>
                <p><b>Location :</b> Onsite, at VNRVJIET campus</p>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className = "xl-col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 col-span-3 w-10 sm:rotate-90 md-span-90 xl:rotate-0 lg:rotate-0 rotate-90 m-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        {/*round-3*/}
        <div className='card rounded-md border-black shadow-lg bg-white text-center p-5 col-span-3 mb-3'>
            {/*header*/}
            <div className='header bg-teal-100 p-6'>
                <div className='font-sans font-bold text-teal-600 text-xl'>Round-3</div>
                <div className='font-semibold' >Onsite Finals</div>
            </div>
            {/*details*/}
            <div className='details p-2'>
                <p><b>Date :</b> 19/03/2022 -Saturday</p>
                <p><b>Location : </b>Onsite, at VNRVJIET campus</p>
            </div>
        </div>
    </div>
  </div>
 )
}
export default roadmap