"use client"

import Image from "next/image"

function calcDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  if (years === 0) return `${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`
  if (remainingMonths === 0) return `${years} yr${years !== 1 ? "s" : ""}`
  return `${years} yr${years !== 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`
}

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "FARMINSTA",
      type: "Full-time",
      duration: "Sep 2026 - Present",
      period: calcDuration("2026-09-02"),
      location: "Hyderabad, India",
      logo: "/images/fi.png",
      logoColor: "bg-green-100",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "FARMINSTA",
      type: "Full-time",
      duration: "Sep 2024 - Aug 2026",
      period: calcDuration("2024-09-01", "2026-08-31"),
      location: "Hyderabad, India",
      logo: "/images/fi.png",
      logoColor: "bg-green-100",
    },
    {
      id: 3,
      title: "Campus Business Manager",
      company: "PrepBytes",
      type: "Internship",
      duration: "Sep 2021 - Nov 2021",
      period: "3 mos",
      location: "Remote",
      logo: "/images/pb.jpg",
      logoColor: "bg-blue-100",
    },
    {
      id: 4,
      title: "Student Partner",
      company: "Internshala",
      type: "Internship",
      duration: "Sep 2021 - Oct 2021",
      period: "2 mos",
      location: "Remote",
      logo: "/images/is.jpg",
      logoColor: "bg-cyan-100",
    },
  ]

  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            <span className="border-b-4 border-blue-600 pb-2">Experience</span>
          </h2>
        </div>

        {/* Compact Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Experience Items */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={exp.id}>
                <div className="relative flex items-start gap-4">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center shadow-md">
                      <div className={``}>
                        <Image
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-base font-semibold text-blue-600">{exp.company}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium w-fit">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 text-xs">
                      <span className="font-medium">{exp.duration}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
