import React from "react"
import data from "../assets/hall-of-fame.json"
import HallOfFameTableComponent from "../components/hall-of-fame-table-component"
const codechefData = data.codechefRankers
const codeforcesData = data.codeforcesRankers

export default function HallOfFame() {
  return (
    <div className=" h-90v ">
      <h1 className="text-center font-bold text-3xl mt-5 ">Hall of fame</h1>

      {/* codeforces table */}

      <div className=" grid grid-cols-1 lg:grid-cols-1 lg:mx-20 mb-20  md:m-15 sm:m-10  mx-5 overflow-x-auto ">
        <h2 className="font-bold text-3xl text-primary">CodeForces</h2>
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
              <HallOfFameTableComponent person={member} />
            ))}
          </tbody>
        </table>
      </div>

      {/* codechef table */}

      <div className=" grid grid-cols-1 lg:grid-cols-1 lg:m-20 md:m-15 sm:m-10 mx-5 overflow-x-auto  ">
        <h2 className="font-bold text-3xl text-primary">CodeChef</h2>
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
              <HallOfFameTableComponent person={member} />
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  )
}
