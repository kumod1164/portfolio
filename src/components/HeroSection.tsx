"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const titles = ["Full Stack Developer", "Passionate Learner", "Tech Enthusiast"]
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(
    titles.findIndex(t => t === "Full Stack Developer") !== -1
      ? titles.findIndex(t => t === "Full Stack Developer")
      : 0
  )
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentTitle = titles[currentIndex]

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }
  }, [displayText, currentIndex, isTyping, titles])


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
        <div
          className="absolute top-32 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-10 h-10 bg-indigo-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-6">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <h1 className="text-xl md:text-2xl text-gray-600 font-light mb-2">👋 Hello, I'm</h1>
          </div>

          {/* Name with Gradient */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Kumod Kumar</span>
              <span> </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Sharma</span>
            </h4>
          </div>

          {/* Typing Effect */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 inline-block">
              <div className="text-xl md:text-3xl text-gray-800 font-semibold h-12 flex items-center justify-center min-w-[280px]">
                <span className="text-blue-600">{displayText}</span>
                <span className="animate-pulse ml-2 text-blue-600">|</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-3 justify-center items-center pt-6"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-base hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}



