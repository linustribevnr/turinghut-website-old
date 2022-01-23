import React from "react"

export default function HallOfFameTableComponent({
  person: { name, handle, handleLink, highestRating, level },
}) {
  const colors = {
    Pupil: "text-green-600",
    Master: "text-amber-400",
    Grandmaster: "text-red-500",
    Expert: "text-blue-700",
    Specialist: "text-[#66CDAA]",
    CandidateMaster: "text-fuchsia-600",
  }

  const codechefColors = {
    2: "#008000",
    3: "blue",
    4: "purple",
    5: "yellow",
    6: "#FFA500",
    7: "#800000",
  }

  const codechefColors2 = {
    2: "text-[#008000]",
    3: "text-blue-500",
    4: "text-purple-600",
    5: "text-yellow-300",
    6: "text-[#FFA500]",
    7: "text-[#800000]",
  }
  return (
    <tr>
      {name ? (
        <td className="px-1 py-0 sm:px-5 sm:py-1 border border-white border-slate-100 text-center text-white">
          {name}
        </td>
      ) : null}

      {colors[level] ? (
        <td
          className={`sm:px-5 sm:py-1 border border-white border-slate-100 text-center font-semibold ${colors[level]}`}
        >
          <a href={handleLink}> {handle} </a>
        </td>
      ) : (
        <td
          className={`sm:px-5 sm:py-1 border border-white border-slate-100 text-center font-semibold ${codechefColors2[level]}`}
        >
          <a href={handleLink}>{handle}</a>
        </td>
      )}

      {highestRating ? (
        <td className="sm:px-5 sm:py-1 border border-white border-slate-100 text-center text-white">
          {highestRating}
        </td>
      ) : null}

      {colors[level] ? (
        <td
          className={`sm:px-3 sm:py-1 md:px-5 md:py-1 border border-white border-slate-100 text-center font-semibold ${colors[level]}`}
        >
          {level}
        </td>
      ) : (
        <td className="sm:px-5 sm:py-1 border border-white border-slate-100 text-center text-white flex flex-row">
          {level}
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              fill={codechefColors[level]}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        </td>
      )}
    </tr>
  )
}
