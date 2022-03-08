import React from "react"

export default function About() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl p-3 m-5 my-18 text-center text-gray-600">
        About Us
      </h1>
      <div className="w-full flex-col flex-wrap items-center justify-evenly h-100">
        <div className="flex-about items-center justify-center">
          <div className="w-72 flex justify-center">
            <img src="./vision.png" alt="vision" />
          </div>
          <blockquote className="mx-5 font-normal text-gray-400 max-w-2xl">
            <p>
              <img src="./left-quote.png" className="inline mx-2" />
              Act as platform of “unity” to promote the `cause` of Computer
              Science. Develop a sense of belongingness amongst the pupils in
              the `impact` being created by Computer Science and it’s applied
              concepts while appreciating its inter-disciplinary nature and
              recognizing the unique art of developing solutions through
              mathematical models evolving in scale to the emerging problems of
              the world today. And help explore knowledge, simulate study and
              research of and seek opportunities in Computer Science, with
              special regard given to Programming, as its members pave way for
              their career into the future.
              <img src="./right-quote.png" className="inline mx-2" />
            </p>
          </blockquote>
        </div>

        <div className="flex-about-reverse items-center justify-center my-10">
          <blockquote className="mx-5 quote font-normal text-gray-400 max-w-2xl">
            <p>
              <img src="./left-quote.png" className="inline mx-2" />
              The club shall work towards promoting the greater cause of
              Computer Science in the community by Orienting freshmen to the
              nature of Computer Science, organizing events, Creating awareness
              about the opportunities to expand their knowledge and showcase
              their skills. Uniting people with motivated interest to foster a
              culture of learning in the community with regards to Computer
              Science. Organizing Programming events at various tiers as deemed
              necessary on a continuous basis for all its members while training
              them in the underlying concepts, best coding practices and ethics;
              with an ultimate goal of promoting Competitive Programming under
              the motto `Programming as a Sport` and `The Art of Programming`.
              <img src="./right-quote.png" className="inline mx-2" />
            </p>
          </blockquote>
          <div className="w-72 mx-2 flex justify-center">
            <img src="./mission.png" alt="mission" />
          </div>
        </div>
      </div>
    </div>
  )
}
