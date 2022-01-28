import React from "react"

export default function ArchiveComponent({
  contest: { contestName, year, link },
}) {
  return (
    <tr className="hover:bg-white bg-cyan-200">
      {contestName ? (
        <td className="table-data font-bold">{contestName}</td>
      ) : null}

      {year ? <td className="table-data">{year}</td> : null}

      {link ? (
        <td className="table-data underline">
          <a href={link}>{link}</a>
        </td>
      ) : null}
    </tr>
  )
}
