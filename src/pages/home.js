import React from 'react';

export default function Home() {
  return (
    <div>
         <div class="flex flex-wrap justify-evenly items-center h-90v p-5  bg-secondary text-white">
            <div class="text-center text-xl sm:text-2xl max-w-xl">
                <p>We are a group of people working together for the improvement of programming culture in VNRVJIET.</p>
            </div>
            <div class="w-64">
                <img src="./logo.png" alt="Turing Hut Logo"/>
            </div> 
        </div>
    </div>
  );
}
