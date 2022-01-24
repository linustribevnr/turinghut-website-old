import React from "react"

export default function ArchiveComponent({
  contest: { contestName, year, link },
}) {
  return (
    <tr>
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
