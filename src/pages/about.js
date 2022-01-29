import React from "react"

export default function About() {
  return (
    <div className="mx-4">
      <h1 className="text-4xl md:text-5xl p-3 m-5 my-18 text-center text-gray-600">
        About Us
      </h1>

      {/* <div className="m-6 mx-auto p-4 max-w-xl rounded-lg border shadow-3xl shadow-black bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white text-center">About Us</h5>

          <p className="mb-3 font-normal text-gray-400">
            Act as platform of “unity” to promote the `cause` of Computer
            Science. Develop a sense of belongingness amongst the pupils in the
            `impact` being created by Computer Science and it's applied concepts
            while appreciating its inter-disciplinary nature and recognizing.
          </p>
        </div> */}
      <div className="w-full flex-col flex-wrap items-center justify-evenly h-100">
        <div className="my-7 mx-auto p-4 max-w-lg rounded-lg border shadow-3xl shadow-black bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white text-center">
            Vision
          </h5>

          <p className="font-normal text-gray-400">
            Act as platform of “unity” to promote the `cause` of Computer
            Science. Develop a sense of belongingness amongst the pupils in the
            `impact` being created by Computer Science and it's applied concepts
            while appreciating its inter-disciplinary nature and recognizing.
          </p>
        </div>

        <div className="my-7 mx-auto p-4 max-w-lg rounded-lg border shadow-3xl shadow-black bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white text-center">
            Mission
          </h5>

          <p className="font-normal text-gray-400">
            Act as platform of “unity” to promote the `cause` of Computer
            Science. Develop a sense of belongingness amongst the pupils in the
            `impact` being created by Computer Science and it's applied concepts
            while appreciating its inter-disciplinary nature and recognizing.
          </p>
        </div>
      </div>
    </div>
  )
}
