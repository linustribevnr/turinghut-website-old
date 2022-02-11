import React from "react"

export default function About() {
  return (
    <div className="px-4">
      <h1 className="text-4xl md:text-5xl p-3 m-5 my-18 text-center text-gray-600">
        About Us
      </h1>

      <div className="w-full flex-col flex-wrap items-center justify-evenly h-100">
        <div className="my-7 mx-auto p-4 max-w-lg rounded-lg border shadow-3xl shadow-black bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white text-center">
            Vision
          </h5>

          <p className="font-normal text-gray-400">
            Act as platform of “unity” to promote the `cause` of Computer
            Science. Develop a sense of belongingness amongst the pupils in the
            `impact` being created by Computer Science and it’s applied concepts
            while appreciating its inter-disciplinary nature and recognizing the
            unique art of developing solutions through mathematical models
            evolving in scale to the emerging problems of the world today. And
            help explore knowledge, simulate study and research of and seek
            opportunities in Computer Science, with special regard given to
            Programming, as its members pave way for their career into the
            future.
          </p>
        </div>

        <div className="my-7 mx-auto p-4 max-w-lg rounded-lg border shadow-3xl shadow-black bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white text-center">
            Mission
          </h5>

          <p className="font-normal text-gray-400">
            The club shall work towards promoting the greater cause of Computer
            Science in the community by Orienting freshmen to the nature of
            Computer Science, organizing events, Creating awareness about the
            opportunities to expand their knowledge and showcase their skills.
            Uniting people with motivated interest to foster a culture of
            learning in the community with regards to Computer Science.
            Organizing Programming events at various tiers as deemed necessary
            on a continuous basis for all its members while training them in the
            underlying concepts, best coding practices and ethics; with an
            ultimate goal of promoting Competitive Programming under the motto
            `Programming as a Sport` and `The Art of Programming`.
          </p>
        </div>
      </div>
    </div>
  )
}
