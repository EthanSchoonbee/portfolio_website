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
  User,
  MapPin,
  Globe,
  Coffee,
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
    { name: "GitHub", icon: Github, url: "https://github.com/EthanSchoonbee" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ethanshoonbee" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/ethanshoonbee_" },
    { name: "Email", icon: Mail, url: "mailto:schoonbeeethan@gmail.com" },
  ]

  return (
      <div
          className={`min-h-screen font-mono ${isDarkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-800"}`}
      >
        <div className="container mx-auto p-4">
          <header className="mb-3">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-7 mt-4">
              <Image
                  src="/headshot_1.jpg?height=100&width=100"
                  alt="Ethan Shoonbee"
                  width={100}
                  height={100}
                  className={`rounded-full mix-blend-luminosity hover:mix-blend-normal cursor-pointer ${isDarkMode ? "border-green-500" : "border-green-400 "}`}
              />
              <div className="text-center md:text-left">
                <h1 className={`text-3xl font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Ethan Shoonbee</h1>
                <h2 className={`text-xl font-bold  ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Graduate Software Developer</h2>
                <div className="flex justify-center md:justify-start space-x-5 mt-2">
                  {socialLinks.map((link) => (
                      <button
                          key={link.name}
                          onClick={() => setIsPopupOpen(true)}
                          className={`${isDarkMode ? "text-gray-600 hover:text-green-400" : "text-gray-700 hover:text-green-400"}`}
                      >
                        <link.icon className="w-6 h-6" />
                      </button>
                  ))}
                </div>
              </div>
            </div>
            <nav className={`flex flex-wrap justify-center md:justify-start space-x-1 p-1 rounded-t-lg 
                            ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              {tabs.map((tab) => (
                  <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`px-3 py-2 mb-1 md:mb-0 rounded-t-lg flex items-center space-x-2 ${
                          activeTab === tab.name
                              ? ` border-t-2 ${isDarkMode ? "bg-gray-900 text-blue-400 border-blue-400" : "bg-white text-blue-600 border-blue-600"}`
                              : `${isDarkMode ?"text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"}`
                      }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="hidden md:inline">{tab.name}.js</span>
                  </button>
              ))}
              <button
                  onClick={toggleDarkMode}
                  className={`px-3 py-2 mb-1 md:mb-0 rounded-t-lg flex items-center space-x-2 ${isDarkMode ? "text-gray-400  hover:bg-gray-700" :  "text-gray-600 hover:bg-gray-200"}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>
          </header>

          <main
              className={`p-4 rounded-b-lg border ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"} shadow`}
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

          <footer>
            <div className={`min-h-10`}></div>
          </footer>

          {isPopupOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-black p-3 rounded-lg w-96">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-green-500 text-lg">Social Links</h3>
                    <button onClick={() => setIsPopupOpen(false)} className="text-2xl text-green-500 hover:text-green-400">
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

function About() {
  return (
      <>
        <span className="text-blue-400">const</span> <span className="text-purple-500">about</span> = {"{"}
        <br />
        &nbsp;&nbsp;
        <User className="inline-block w-4 h-4 mr-2 text-gray-500" />
        name: <span className="text-green-500">Ethan Shoonbee</span>,
        <br />
        &nbsp;&nbsp;
        <Briefcase className="inline-block w-4 h-4 mr-2 text-gray-500" />
        title: <span className="text-green-500">Graduate Software Developer</span>,
        <br />
        &nbsp;&nbsp;
        <FileText className="inline-block w-4 h-4 mr-2 text-gray-500" />
        summary:{" "}
        <span className="text-green-500">
        A passionate and driven graduate software developer with a strong foundation in modern web technologies. Eager
        to apply my skills and knowledge to real-world projects and contribute to innovative solutions.
      </span>
        ,
        <br />
        &nbsp;&nbsp;
        <Code className="inline-block w-4 h-4 mr-2 text-gray-500" />
        skills: [<span className="text-green-500">JavaScript</span>, <span className="text-green-500">React</span>,{" "}
        <span className="text-green-500">Node.js</span>, <span className="text-green-500">Python</span>],
        <br />
        &nbsp;&nbsp;
        <Globe className="inline-block w-4 h-4 mr-2 text-gray-500" />
        languages: [<span className="text-green-500">English (Native)</span>,{" "}
        <span className="text-green-500">Spanish (Intermediate)</span>],
        <br />
        &nbsp;&nbsp;
        <MapPin className="inline-block w-4 h-4 mr-2 text-gray-500" />
        location: <span className="text-green-500">San Francisco, CA</span>,
        <br />
        &nbsp;&nbsp;
        <Coffee className="inline-block w-4 h-4 mr-2 text-gray-500" />
        interests: [
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">Open Source Contribution</span>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">Artificial Intelligence</span>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">Cloud Computing</span>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">Blockchain Technology</span>
        <br />
        &nbsp;&nbsp;],
        <br />
        &nbsp;&nbsp;certifications: [
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
        <span className="text-green-500">AWS Certified Developer - Associate</span>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-orange-400">2023</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
        <span className="text-green-500">Google Cloud Certified - Associate Cloud Engineer</span>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-orange-400">2022</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
        <br />
        &nbsp;&nbsp;],
        <br />
        &nbsp;&nbsp;volunteer: [
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;organization: <span className="text-green-500">Code for San Francisco</span>
        ,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-green-500">Volunteer Developer</span>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-orange-400">2023</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
        <br />
        &nbsp;&nbsp;]
        <br />
        {"};"}
      </>
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