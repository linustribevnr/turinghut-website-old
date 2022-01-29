import React from "react"
import TImelines from "../assets/timelineData.json"

export default function timeline() {
  return (
    <div className="lg:px-64 md:px-20 sm:px-10 bg-teal-600">
      <h1 className="text-white text-5xl py-5 text-center">Timeline</h1>
      <div className="timeline">
        {TImelines.timelineData
          .sort((a, b) => b.year - a.year)
          .map((timeline, i) => (
            <div className="timeline-row" key={i}>
              <div className="timeline-time">{timeline.year}</div>
              <div className="timeline-content">
                <div class="w-11/12 rounded-lg shadow-md border-gray-700">
                  <img
                    class="rounded-t-lg pt-5"
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
    </div>
  )
}
