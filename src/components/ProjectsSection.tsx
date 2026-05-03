"use client"

import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState, useEffect, useCallback } from "react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "UPSC Practice Set",
      description:
        "A full-stack UPSC exam prep platform built with Next.js and MongoDB. Features **topic-wise practice tests** with UPSC-standard timing, a **smart question bank** with difficulty levels, **detailed analytics**, and an **admin panel** with bulk/PDF import. Includes **secure auth**, test history, and instant result analysis.",
      images: ["/images/practiceset1.png", "/images/practiceset2.png"],
      techStack: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
      githubUrl: "https://github.com/kumod1164/practice-set",
      liveUrl: "https://practice-set-bice.vercel.app/",
    },
    {
      id: 2,
      title: "Green Paradise",
      description:
        "Green Paradise is a fully functional e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.",
      images: ["/images/greenparadise.png"],
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/1ashutoshverma/Green-Paradise",
      liveUrl: "https://green-paradise-team.netlify.app/index.html",
    },
    {
      id: 3,
      title: "Alcazar",
      description:
        "Alcazar is a modern and user-friendly travel agency website that streamlines trip planning and booking. The platform features an intuitive interface and engaging design, providing users with a seamless travel experience from browsing destinations to finalizing reservations.",
      images: ["/images/alcazar.png"],
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Shubham10320/Travel-website",
      liveUrl: "https://alcazartravelling.netlify.app/html/index.html",
    },
    // {
    //   id: 4,
    //   title: "Oestin",
    //   description:
    //     "Welcome to Oestin, a modern and stylish Hotel & Resort website built with HTML, CSS, and JavaScript. This project seamlessly integrates various technologies to provide a smooth and secure user experience.",
    //   images: ["/images/oestin.png"],
    //   techStack: ["HTML", "CSS", "JavaScript"],
    //   githubUrl: "https://github.com/kumod1164/Oestin_CW",
    //   liveUrl: "https://64dcecef4c77132933378ad2--silver-piroshki-29b668.netlify.app/index.html",
    // },
  ]

  const getTechStackColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "html":
        return "bg-orange-500"
      case "css":
        return "bg-blue-500"
      case "javascript":
        return "bg-yellow-500"
      case "next.js":
        return "bg-black"
      case "mongodb":
        return "bg-green-600"
      case "nextauth":
        return "bg-purple-600"
      case "tailwind css":
        return "bg-cyan-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="border-b-4 border-blue-600 pb-2">My Projects</span>
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image / Carousel */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  {project.images.length > 1 ? (
                    <Carousel images={project.images} title={project.title} />
                  ) : (
                    <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl group">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTechStackColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description.split(/\*\*(.+?)\*\*/).map((part, i) =>
                      i % 2 === 1 ? <strong key={i} className="text-gray-800 font-semibold">{part}</strong> : part
                    )}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex items-center gap-3 px-6 py-3 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-gray-800 hover:bg-gray-700 cursor-pointer"
                    >
                      <Github size={20} />
                      GitHub
                    </button>
                    <button
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="cursor-pointer flex items-center gap-3 px-6 py-3 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-green-700 hover:bg-green-600"
                    >
                      <ExternalLink size={20} />
                      View Live
                    </button>
                  </div>
                </div>
              </div>

              {index !== projects.length - 1 && (
                <hr className="my-12 border-t-2 border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

// Carousel component for projects with multiple images
function Carousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl group bg-gray-100">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            fill
            className="object-contain"
          />
        </div>
      ))}

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer z-10"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
