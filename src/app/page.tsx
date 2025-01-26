/*
AUTHOR: Ethan Schoonbee
CREATED: 26-01-2025
UPDATED: 26-01-2025
 */

"use client"; // Add this directive at the top

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Sun,
  Moon,
} from "lucide-react"


const tabs = [
  { name: "about", icon: FileText },
  { name: "skills", icon: Code },
  { name: "experience", icon: Briefcase },
  { name: "education", icon: GraduationCap },
  { name: "projects", icon: Award },
]

export default function IDEPortfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/ethanshoonbee" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ethanshoonbee" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/ethanshoonbee" },
    { name: "Email", icon: Mail, url: "mailto:ethan.shoonbee@example.com" },
  ]

  return (
      <div
          className={`min-h-screen font-mono ${isDarkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-800"}`}
      >
        <div className="container mx-auto p-4">
          <header className="mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-4">
              <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Ethan Shoonbee"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-gray-200 dark:border-gray-700"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">Ethan Shoonbee</h1>
                <h2 className="text-xl font-bold text-gray-500 dark:text-gray-400">Graduate Software Developer</h2>
                <div className="flex justify-center md:justify-start space-x-4 mt-2">
                  {socialLinks.map((link) => (
                      <button
                          key={link.name}
                          onClick={() => setIsPopupOpen(true)}
                          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <link.icon className="w-6 h-6" />
                      </button>
                  ))}
                </div>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-start space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-t-lg">
              {tabs.map((tab) => (
                  <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`px-3 py-2 mb-1 md:mb-0 rounded-t-lg flex items-center space-x-2 ${
                          activeTab === tab.name
                              ? "bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-t-2 border-blue-600 dark:border-blue-400"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="hidden md:inline">{tab.name}.js</span>
                  </button>
              ))}
              <button
                  onClick={toggleDarkMode}
                  className="px-3 py-2 mb-1 md:mb-0 rounded-t-lg flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>
          </header>

          <main
              className={`p-4 rounded-b-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} shadow`}
          >
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>
              {activeTab === "about" && <About />}
              {activeTab === "skills" && <Skills />}
              {activeTab === "experience" && <Experience />}
              {activeTab === "education" && <Education />}
              {activeTab === "projects" && <Projects />}
            </code>
          </pre>
          </main>

          {isPopupOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-black p-6 rounded-lg w-96">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-green-500 text-lg">Social Links</h3>
                    <button onClick={() => setIsPopupOpen(false)} className="text-green-500 hover:text-green-400">
                      &times;
                    </button>
                  </div>
                  <div className="space-y-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-green-500 hover:text-green-400"
                        >
                          <link.icon className="w-5 h-5" />
                          <span>{link.name}</span>
                        </a>
                    ))}
                  </div>
                </div>
              </div>
          )}
        </div>
      </div>
  )
}

//TODO
function About() {
  return (
      <div>About</div>
  )
}

//TODO
function Skills() {
  return (
      <div>Skills</div>
  )
}

function Experience() {
  return (
      <div>Experience</div>
  )
}

//TODO
function Education() {
  return (
      <div>Education</div>
  )
}

//TODO
function Projects() {
  return (
      <div>Projects</div>
  )
}
//__________________________________________________....oooOO0_END_OF_FILE_0OOooo....__________________________________________________