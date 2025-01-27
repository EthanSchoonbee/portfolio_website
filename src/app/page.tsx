/*
AUTHOR: Ethan Schoonbee
CREATED: 26-01-2025
UPDATED: 27-01-2025
 */

// load content in the client side
"use client";
import React from 'react';
import { useState, useEffect, useRef} from "react"
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
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
  FileHeart,
  Download,
} from "lucide-react"
import { aboutContent } from "@/content/about_strings"
import { skillsContent } from "@/content/skills_strings"

// lost of tabs and their icons for navbar
const tabs = [
  { name: "about", icon: FileText },
  { name: "skills", icon: Code },
  { name: "experience", icon: Briefcase },
  { name: "education", icon: GraduationCap },
  { name: "projects", icon: Award },
  { name: "resume", icon: FileHeart },
]

export default function IDEPortfolio() {
  const [activeTab, setActiveTab] = useState("about") // state for navbar active tabes
  const [isSocialsPopupOpen, setIsSocialsPopupOpen] = useState(false) // state for social link popup overlay
  const [isDarkMode, setIsDarkMode] = useState(false) // state for dark/light mode toggle
  const [isProfileOverlayOpen, setIsProfileOverlayOpen] = useState(false); // State for profile overlay
  const [currentOverlayIndex, setCurrentOverlayIndex] = useState(0); // state for the current costume overlay index

  const socialsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // handle overlay click out to minimize
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null; // explicitly case event target as node

      // close social links popup if clicked outside
      if (
          socialsRef.current &&
          target &&
          !socialsRef.current.contains(target) &&
          isSocialsPopupOpen
      ) {
        setIsSocialsPopupOpen(false);
      }

      // close profile picture overlay if clicked outside
      if (
          profileRef.current &&
          target &&
          !profileRef.current.contains(target) &&
          isProfileOverlayOpen
      ) {
        setIsProfileOverlayOpen(false);
        setCurrentOverlayIndex(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSocialsPopupOpen, isProfileOverlayOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  type ColorKey =
      | "twitter_color"
      | "linkedin_color"
      | "github_color"
      | "email_color";

  const colorVariants: Record<ColorKey, {light: string; dark: string}> = {
    twitter_color: {
      light: "text-gray-100 hover:text-blue-400",
      dark: "text-gray-900 hover:text-blue-400",
    },
    linkedin_color: {
      light: "text-gray-100 hover:text-indigo-600",
      dark: "text-gray-900 hover:text-indigo-600",
    },
    github_color: {
      light: "text-gray-100 hover:text-gray-600",
      dark: "text-gray-900 hover:text-gray-500",
    },
    email_color: {
      light: "text-gray-100 hover:text-red-500",
      dark: "text-gray-900 hover:text-red-500",
    },
  };

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  type SocialLink = {
    name: string;
    icon: any; // type error
    color: ColorKey;
    url: string;
  };

  const socialLinks: SocialLink[] = [
    { name: "GitHub", icon: Github, color: "github_color", url: "https://github.com/EthanSchoonbee" },
    { name: "LinkedIn", icon: Linkedin, color: "linkedin_color", url: "https://www.linkedin.com/in/ethanshoonbee" },
    { name: "Twitter", icon: Twitter, color: "twitter_color", url: "https://x.com/ethanshoonbee_" },
    { name: "Email", icon: Mail, color: "email_color", url: "mailto:schoonbeeethan@gmail.com" },
  ]

  // Array of overlay image URLs
  const costumeOverlays = [
    "/headshot_1.jpg", // original photo
    "/headshot_overlay_cowboy.jpg",
    "/headshot_overlay_sunglasses.jpg",
    "/headshot_overlay_princess.jpg",
  ];

  // navigate through costume overlays
  const handlePrevious = () => {
    setCurrentOverlayIndex((prev) =>
        prev === 0 ? costumeOverlays.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentOverlayIndex((prev) =>
        prev === costumeOverlays.length - 1 ? 0 : prev + 1
    );
  };

  return (
      <div
          className={`min-h-screen font-mono ${isDarkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-800"}`}
      >
        <div className="container mx-auto p-4">

          {/* Header Content */}
          <header className="mb-3">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-7 mt-4">
              <Image
                  src="/headshot_1.jpg?height=100&width=100"
                  alt="Ethan Shoonbee"
                  width={100}
                  height={100}
                  className={`rounded-full mix-blend-luminosity hover:mix-blend-normal cursor-pointer ${isDarkMode ? "border-green-500" : "border-green-400 "}`}
                  onClick={() => setIsProfileOverlayOpen(true)} // open image overlay on click
              />
              <div className="text-center md:text-left">
                <h1 className={`text-3xl font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Ethan Schoonbee
                </h1>
                <h2 className={`text-xl font-bold  ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Graduate Software Developer
                </h2>
                <div className="flex justify-center md:justify-start space-x-5 mt-2">
                  {socialLinks.map((link) => (
                      <button
                          key={link.name}
                          onClick={() => setIsSocialsPopupOpen(true)} // open socials overlay on click
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
                      onClick={() => setActiveTab(tab.name)} // set active tab in navbar on click
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
                  onClick={toggleDarkMode} // toggle dark and light modes on click
                  className={`px-3 py-2 mb-1 md:mb-0 rounded-t-lg flex items-center space-x-2 ${isDarkMode ? "text-gray-400  hover:bg-gray-700" :  "text-gray-600 hover:bg-gray-200"}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>
          </header>

          {/* Main Content */}
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
              {activeTab === "resume" && <Resume />}
            </code>
          </pre>
          </main>

          {/* Footer Content */}
          <footer
              className={`flex justify-center items-center p-4 mt-8 border-t 
              ${isDarkMode ? "border-gray-600" : "border-gray-200"}`}
          >
            <div className={`min-h-10`}>
              <span className={`flex items-center font-light text-sm space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <div>Created by</div>
                <a href={`https://localhost:3000`}>@EthanSchoonbee</a>
              </span>

            </div>
          </footer>

          {/* Profile Picture Overlay */}
          {isProfileOverlayOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div ref={profileRef} className="relative">
                  {/* Close Button */}
                  {/*
                  <button
                      onClick={() => setIsProfileOverlayOpen(false)} // Close overlay
                      className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-green-400 z-10"
                  >
                    &times;
                  </button>*/}

                  <div className="relative flex items-center justify-center">
                    {/* Left Chevron */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 text-white hover:text-green-400 z-10"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Profile Image */}
                    <Image
                        src={costumeOverlays[currentOverlayIndex]}
                        alt={`Profile Image ${currentOverlayIndex + 1}`}
                        width={window.innerWidth > 768 ? 400 : 300}
                        height={window.innerHeight > 768 ? 350 : 250}
                        className="rounded-full border-green-400"
                    />

                    {/* Right Chevron */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 text-white hover:text-green-400 z-10"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
          )}

          {/* Socials Link Overlay */}
          {isSocialsPopupOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div
                    ref={socialsRef}
                    className={`${isDarkMode ? "bg-white" : "bg-black"} p-3 rounded-lg w-96`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`${isDarkMode ?"text-green-600" : "text-green-500"} font-bold text-xl`}>Social Links</h3>
                    <button onClick={() => setIsSocialsPopupOpen(false)} className="text-3xl text-green-600 hover:text-gray-900">
                      &times;
                    </button>
                  </div>
                  <div className="space-y-2 items-center">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-2  ${colorVariants[link.color][isDarkMode ? "dark" : "light"]}`}
                        >
                          <link.icon className="w-5 h-5" />
                          <span className={`font-semibold text-xl`}>{link.name}</span>
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
  const { personalInfo, skills, languages, interests, certifications, volunteer } = aboutContent;

  return (
      <>
        <span className="text-blue-400">const</span> <span className="text-purple-500">about</span> = {"{"}
        <br />
        &nbsp;&nbsp;
        <User className="inline-block w-4 h-4 mr-2 text-gray-500" />
          name: <span className="text-green-500">{personalInfo.name}</span>,
        <br />
        &nbsp;&nbsp;
        <Briefcase className="inline-block w-4 h-4 mr-2 text-gray-500" />
          title: <span className="text-green-500">{personalInfo.title}</span>,
        <br />
        &nbsp;&nbsp;
        <FileText className="inline-block w-4 h-4 mr-2 text-gray-500" />
          summary:{" "}
        <span className="text-green-500">
          { personalInfo.summary}
        </span>
        ,
        <br />
        &nbsp;&nbsp;
        <Code className="inline-block w-4 h-4 mr-2 text-gray-500" />
        skills: [
          {skills.map((skill, index) => (
              <span key={index} className="text-green-500">
                  {skill}
                  {index < skills.length - 1 && ", "}
              </span>
        ))}],
        <br />
        &nbsp;&nbsp;
        <Globe className="inline-block w-4 h-4 mr-2 text-gray-500" />
          languages: [
          {languages.map((language, index) => (
              <span key={index} className="text-green-500">
                  {language}
                  {index < languages.length - 1 && ", "}
              </span>
          ))}],
        <br />
        &nbsp;&nbsp;
        <MapPin className="inline-block w-4 h-4 mr-2 text-gray-500" />
          location: <span className="text-green-500">San Francisco, CA</span>,
        <br />
        &nbsp;&nbsp;
          <Coffee className="inline-block w-4 h-4 mr-2 text-gray-500" />
          interests: [
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {interests.map((interest, index) => (
              <span key={index} className="text-green-500">
                  {interest}
                  {index < interests.length - 1 && ","}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
          ))}
          &nbsp;],
          <br />
          certifications: [
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {certifications.map((certification, index) => (
              <span key={index}>
                  {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-green-500">{certification.name}</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-orange-400">{certification.year}</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  {index < certifications.length - 1 && ","}
                  <br />
              </span>
          ))}
        &nbsp;&nbsp;],
          <br />
          volunteer: [
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {volunteer.map((entry, index) => (
              <span key={index}>
                  {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;organization: <span className="text-green-500">{entry.organization}</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-green-500">{entry.role}</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-orange-400">{entry.year}</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  {index < volunteer.length - 1 && ","}
                  <br />
              </span>
          ))}
          &nbsp;&nbsp;],

          <br />
        {"};"}
      </>
  )
}


function Skills() {
  return (
      <>
          <span className="text-blue-400">const</span> <span className="text-purple-500">skills</span> = {"["}
          {skillsContent.map((skill, index) => {
              const Icon = skill.icon;
              return (
                  <React.Fragment key={skill.name}>
                      <br />
                      &nbsp;&nbsp;{"{"} name: <span className="text-green-500">{skill.name}</span>,
                      level: <span className="text-orange-400">{skill.level}</span>,
                      icon: <Icon className={`inline w-5 h-5 ${skill.color}`} /> {"}"}
                      {index < skillsContent.length - 1 && ","}
                  </React.Fragment>
              );
          })}
          <br />
          {"];"}
      </>
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

function Resume() {
  const [isResumeOpen, setIsResumeOpen] = useState(true);

  const toggleResume = () => {
    setIsResumeOpen(!isResumeOpen);
  }

  return (
      <>
        <span className="text-blue-400 dark:text-blue-300">const</span>{" "}
        <span className="text-purple-500 dark:text-purple-400">resume</span> = {"{"}
        <br />
        &nbsp;&nbsp;name: <span className="text-green-500 dark:text-green-400">My latest resume as of </span>
        <span className="text-orange-400 italic">26-01-2025</span>
        ,
        <br />
        &nbsp;&nbsp;download:{" "}
        <span className="text-green-400 italic underline inline-flex items-center">
          <Download className="text-blue-500 w-4 h-4 mr-1" />
          <a href="/assets/documents/resume_latest.pdf" download className="hover:bg-green-200 ml-1">
            Click to download PDF
          </a>
        </span>,
        <br />
        &nbsp;&nbsp;view_resume:{" "}
        <span
            onClick={toggleResume}
            className="text-blue-500 italic underline inline-flex items-center">
          {isResumeOpen ? (
              <ChevronDown className="w-4 h-4" />
          ) : (
              <ChevronRight className="w-4 h-4" />
          )}
          <span className="text-green-400 ml-1 hover:bg-green-200 italic cursor-pointer underline">Click to {isResumeOpen ? "hide" : "show"} resume</span>
        </span>
        <br />

        <div className="mt-4">
          {isResumeOpen && (
              <div className="w-full flex flex-col items-center rounded-xl ">
                <Image
                    src="/resume_latest_page_1.jpg"
                    alt="Resume page 1"
                    width={800}
                    height={1100}
                    className="max-w-full mix-blend-luminosity rounded-t-xl h-auto"
                />
                <Image
                    src="/resume_latest_page_2.jpg"
                    alt="Resume page 2"
                    width={800}
                    height={1100}
                    className="max-w-full mix-blend-luminosity rounded-b-xl h-auto"
                />
              </div>
          )}
        </div>
        &nbsp;{"};"}
        <br />
      </>
  );
}
//__________________________________________________....oooOO0_END_OF_FILE_0OOooo....__________________________________________________