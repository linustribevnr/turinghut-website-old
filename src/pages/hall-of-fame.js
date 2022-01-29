import React from "react"
import data from "../assets/hall-of-fame.json"
import HallOfFameTableComponent from "../components/hall-of-fame-table-component"

export default function HallOfFame() {
  const codechefData = data.codechefRankers
  const codeforcesData = data.codeforcesRankers
  return (
    <div className=" min-h-90v">
      <h1 className="text-4xl md:text-5xl p-3 m-5 my-18 text-center text-gray-600">
        Hall of Fame
      </h1>

      {/* codeforces table */}

      <div className="grid grid-cols-1 lg:grid-cols-1 lg:mx-20 mx-5 overflow-x-auto ">
        <h2 className="font-semibold text-2xl md:text-3xl  text-primary my-5">
          CodeForces
        </h2>
        <table className=" table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Handle</th>
              <th className="table-head">Highest Rating</th>
              <th className="table-head">Level</th>
            </tr>
          </thead>

          <tbody>
            {codeforcesData.map((member, i) => (
              <HallOfFameTableComponent person={member} key={i} />
            ))}
          </tbody>
        </table>
      </div>

      {/* codechef table */}

      <div className="grid grid-cols-1 lg:grid-cols-1 lg:mx-20 mx-5 overflow-x-auto my-10">
        <h2 className="font-semibold text-2xl md:text-3xl text-primary my-5">
          CodeChef
        </h2>
        <table className="table-auto border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Handle</th>
              <th className="table-head">Highest Rating</th>
              <th className="table-head">Level</th>
            </tr>
          </thead>

          <tbody>
            {codechefData.map((member, i) => (
              <HallOfFameTableComponent person={member} key={i} />
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  )
}
