import React from "react"

export default function HallOfFameTableComponent({
  person: { name, handle, handleLink, highestRating, level },
}) {
  const codeforcescolors = {
    Pupil: "text-green-600",
    Master: "text-amber-500",
    Grandmaster: "text-red-500",
    Expert: "text-blue-700",
    Specialist: "text-[#66CDAA]",
    CandidateMaster: "text-fuchsia-600",
  }

  const codechefColors = {
    2: "#008000",
    3: "#0000ff",
    4: "#800080",
    5: "#FFA500",
    6: "#facc15",
    7: "#800000",
  }

  const codechefHandleColors = {
    2: "text-[#008000]",
    3: "text-[#0000ff]",
    4: "text-[#800080]",
    5: "text-[#FFA500]",
    6: "text-[#d7d11e]",
    7: "text-[#800000]",
  }

  return (
    <tr className="hover:bg-gray-200 bg-white">
      {name ? <td className="table-data">{name}</td> : null}

      {codeforcescolors[level] ? (
        <td className={`table-data font-semibold ${codeforcescolors[level]}`}>
          <a href={handleLink} target="_blank" rel="noopener noreferrer">
            {" "}
            {handle}{" "}
          </a>
        </td>
      ) : (
        <td
          className={`table-data ${codechefHandleColors[level]} font-semibold`}
        >
          <a href={handleLink} target="_blank" rel="noopener noreferrer">
            {handle}
          </a>
        </td>
      )}

      {highestRating ? <td className="table-data">{highestRating}</td> : null}

      {codeforcescolors[level] ? (
        <td className={`table-data font-semibold ${codeforcescolors[level]}`}>
          {level}
        </td>
      ) : (
        <td className="table-data flex flex-row">
          {level}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              fill={codechefColors[level]}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        </td>
      )}
    </tr>
  )
}
