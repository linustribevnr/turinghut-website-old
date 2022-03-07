import React, { useState } from "react"
import TImelines from "../assets/timelineData.json"

export default function Timeline() {
  const timelineData = TImelines.timelineData.sort((a, b) => b.year - a.year)
  const [timeline, setTimeline] = useState(timelineData.slice(0, 4))
  const [readTImeline, setReadTimeline] = useState(true)

  const toggleReadMore = () => {
    readTImeline
      ? setTimeline(timelineData)
      : setTimeline(timelineData.slice(0, 4))
    setReadTimeline(!readTImeline)
  }

  return (
    <div className="lg:px-64 md:px-20 sm:px-10 bg-teal-600 pb-2">
      <h1 className="text-white text-5xl py-5 text-center">Timeline</h1>
      <div className="timeline">
        {timeline.map((timeline, i) => (
          <div className="timeline-row" key={i}>
            <div className="timeline-time">{timeline.year}</div>
            <div className="timeline-content">
              <div className="w-11/12 rounded-lg shadow-md border-gray-700">
                <img
                  className="rounded-t-lg pt-5 object-cover"
                  src={
                    timeline.image === ""
                      ? "https://flowbite.com/docs/images/blog/image-1.jpg"
                      : timeline.image
                  }
                  alt=""
                />
                <div className="text-center pt-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {timeline.title}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {timelineData.length > 4 ? (
        <div className="flex justify-center pb-5">
          {readTImeline ? (
            <button
              className="px-4 py-2 font-semibold text-sm bg-black text-white rounded-none shadow-sm"
              onClick={toggleReadMore}
            >
              Show More
            </button>
          ) : (
            <button
              className="px-4 py-2 font-semibold text-sm bg-black text-white rounded-none shadow-sm"
              onClick={toggleReadMore}
            >
              Show Less
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
