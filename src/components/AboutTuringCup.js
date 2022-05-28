import React from "react"

export default function AboutTuringCup() {
  return (
    <div className="pt-14 bg-secondary h-100v">
      <div className="text-white">
        <div className="text-4xl md:text-5xl p-3 text-center text-white">
          <h1 className="p-2">Turing Cup</h1>
          <h1 className="px-2 py-4">One Team, One Dream</h1>
        </div>
        <div className="flex-about-reverse items-center justify-center bg-secondary pt-6">
          <div className="text-xl sm:text-xl max-w-2xl">
            <h1 className="text-2xl md:text-3xl">What is Turing Cup?</h1>
            <p className="mx-6 pt-3">
              Turing cup is the National level coding contest of Turing Hut in
              which teams compete with each other beyond borders and grow more
              skills as a programmer.
            </p>
            <h1 className="text-2xl md:text-3xl pt-5">Eligibility :</h1>
            <p className="mx-5 pt-3">
              Students from all years, pursuing a full-time degree in any
              branch.
            </p>
          </div>

          <div className="w-72 h-72 mx-5 flex justify-center ">
            <img
              className="shadow-lg  bg-body rounded "
              src={`../turingcup/turingcup.jpg`}
              alt="Turing Cup"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
