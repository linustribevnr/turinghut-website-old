import React from "react"
import contestsData from "../assets/archive.json"
import ArchiveComponent from "../components/archive-component"

export default function Archive() {
  const contests = contestsData.contests
  return (
    <div className="h-90v pt-5 ">
      <h1 className="text-4xl md:text-5xl p-3 m-5 my-18 text-center text-gray-600">
        Archive
      </h1>

      <div className="overflow-x-auto grid grid-cols-1 lg:grid-cols-1 lg:mx-20 mb-20  md:m-15 sm:m-10  m-0 ">
        <table className="table-auto border-collapse border">
          <thead>
            <tr>
              <th className="table-head">Contest Name</th>
              <th className="table-head">Year</th>
              <th className="table-head">Link</th>
            </tr>
          </thead>

          <tbody>
            {contests.map((contest, i) => (
              <ArchiveComponent contest={contest} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
