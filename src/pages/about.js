import React from "react"

export default function About() {
  return (
    <div className="mx-10 min-h-90v">
      <div className="m-6 mt-64 w-full flex flex-wrap items-center justify-evenly">
        <div className="m-6 p-6 max-w-xl text-center rounded-lg border shadow-3xl shadow-black bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white">About Us</h5>

          <p className="mb-3 font-normal text-gray-400">
            Act as platform of “unity” to promote the `cause` of Computer
            Science. Develop a sense of belongingness amongst the pupils in the
            `impact` being created by Computer Science and it's applied concepts
            while appreciating its inter-disciplinary nature and recognizing.
          </p>
        </div>
        {/* <div className="m-6 p-6 max-w-md text-center rounded-lg border shadow-3xl shadow-black bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white">Mission</h5>

          <p className="mb-3 font-normal text-gray-400">
            Act as platform of “unity” to promote the `cause` of Computer
            Science. Develop a sense of belongingness amongst the pupils in the
            `impact` being created by Computer Science and it's applied concepts
            while appreciating its inter-disciplinary nature and recognizing.
          </p>
        </div> */}
      </div>
    </div>
  )
}
