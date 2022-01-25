import React, { useState } from "react"
import data from "../assets/teamData.json"
import "../styles/global.css"

export default function Team() {
  const { teamData } = data
  const [year, setYear] = useState(Object.keys(teamData).reverse()[0])

  return (
    <div className="min-h-90v w-full mt-5">
      <h1 className="section-heading text-gray-600">The Team</h1>

      <div className="flex justify-center items-center">
        <label
          htmlFor="year"
          className="block m-2 text-sm font-medium text-gray-900"
        >
          Select the year:{" "}
        </label>
        <select
          id="year"
          className="bg-gray-800 border border-gray-800 text-white text-sm rounded-lg block w-64 p-2.5"
        >
          {Object.keys(teamData)
            .reverse()
            .map((year, i) => (
              <option key={i} onClick={() => setYear(year)}>
                {year === "2018"
                  ? "Founders"
                  : year === "2019"
                  ? "CoFounders"
                  : year}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {teamData[year].map((member, i) => (
          <div key={i} className="px-14 flex-shrink-0 mt-5 mx-auto max-w-sm">
            <div className="relative flex flex-col items-center py-10">
              <img
                className="mb-3 w-40 h-40 rounded-full shadow-lg object-cover"
                src="./supriya.png"
                alt="team member picture"
              />
              <h3 className="m-2 text-xl font-medium text-gray-600">
                {member.name}
              </h3>
              <a
                className="top-44 absolute p-2.5 bg-white rounded-full"
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="#1E40AF"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
