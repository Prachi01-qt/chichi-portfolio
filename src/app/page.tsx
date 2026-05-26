"use client";

import { useState } from "react";

import DesktopIcon from "./components/DesktopIcon";
import Window from "./components/Window";
import Wave from "react-wavify";
import Image from "next/image";
import useSound from "use-sound";


export default function Home() {

  const [showAbout, setShowAbout] = useState(false);

  const [showProjects, setShowProjects] = useState(false);

  const [showContact, setShowContact] = useState(false);

  const [showLinks, setShowLinks] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [activeWindow, setActiveWindow] = useState(1);

  const [showPhysics, setShowPhysics] = useState(false);

  const [showPortfolioProject, setShowPortfolioProject] = useState(false);

  const [showTodoProject, setShowTodoProject] = useState(false);

  const [showResume, setShowResume] = useState(false);
  
  const [musicPlaying, setMusicPlaying] = useState(false);

  const [playOtter, { stop }] = useSound(
  "/sounds/otter-music.mp3",
  {
    volume: 0.5,
    loop: true,
  }
);

  return (
    <main
      className={`relative flex min-h-screen items-center justify-center overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-[#111111]"
          : "bg-[#ffffff]"
      }`}
    >

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute left-5 top-6 z-50 text-4xl transition hover:scale-110"
      >
        <div
          className="transition-all duration-500 hover:scale-110 hover:rotate-12"
        >

          <Image
            src={darkMode ? "/ui/moon.webp" : "/ui/sun.webp"}
            alt="theme toggle"
            width={39}
            height={39}
            key={darkMode ? "moon" : "sun"}
            className="animate-[spin_0.5s_ease]"
            priority
          />

        </div>
      </button>

      {/* Animated Waves */}
      <div className="absolute bottom-0 h-[50vh] w-full overflow-hidden">

        <svg className="absolute h-0 w-0">

          <defs>

            <linearGradient
              id={darkMode ? "waveDark" : "waveLight"}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >

              {darkMode ? (
                <>
                  <stop offset="0%" stopColor="#316182" />
                  <stop offset="100%" stopColor="#0c3256" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#c7e4ff" />
                  <stop offset="100%" stopColor="#a0d2ff" />
                </>
              )}

            </linearGradient>

          </defs>

        </svg>

        <Wave
          fill={`url(#${darkMode ? "waveDark" : "waveLight"})`}
          paused={false}

          options={{
            height: 150,
            amplitude: 10,
            speed: 0.35,
            points: 5,
          }}

          className="absolute bottom-0 h-full w-full"
        />

      </div>

      {/* Floating Decorations */}
      {/* Floating Star */}
      <div className="absolute left-1/5 top-9">

        <Image
          src="/decorations/star.png"
          alt="star"
          width={130}
          height={130}
          className="select-none"
          priority
        />
      </div>

      {/* Floating Otter */}
      <div className="absolute bottom-6 right-8">

        <button
          onClick={() => {

            if (musicPlaying) {

              stop();

              setMusicPlaying(false);

            } else {

              playOtter();

              setMusicPlaying(true);

            }

          }}

          className="transition hover:scale-110 active:scale-95"
        >

          <Image
            src="/decorations/otter.png"
            alt="otter"
            width={150}
            height={150}
            className="select-none animate-[float_4s_ease-in-out_infinite]"
            priority
          />

        </button>

      </div>


      {/* Main Window */}
      <div
        className={`relative z-10 mt-20 w-[800px] overflow-hidden rounded-[7px] border-2 shadow-2xl transition-all duration-500 ${
          darkMode
            ? "border-white bg-[#102347]"
            : "border-gray-400 bg-[#f8f8f8]"
        }`}
      >

        {/* Title Bar */}
        <div
          className={`rounded-t-[5px] px-6 py-3 text-xl text-white transition-colors duration-500 ${
            darkMode
              ? "bg-black"
              : "bg-[#3e3e3e]"
          }`}
        >
          home
        </div>

        {/* Content */}
        <div className="flex flex-col items-center px-10 pt-24 pb-20">

          <h1
            className={`text-7xl font-bold tracking-tight transition-colors duration-500 ${
              darkMode
                ? "text-white"
                : "text-[#4a4a4a]"
            }`}
          >
            hi! i’m{" "}
            <span
              className={`transition-colors duration-500 ${
                darkMode
                  ? "text-cyan-100"
                  : "text-[#f5a623]"
              }`}
            >
              kazu
            </span>
          </h1>

          <p
            className={`mt-7 text-2xl font-light tracking-wide transition-colors duration-500 ${
              darkMode
                ? "text-gray-200"
                : "text-[#5f5f5f]"
            }`}
          >
            developer, designer & creator
          </p>

          {/* Icons */}
          <div className="mt-12 flex gap-10 text-center">

            <DesktopIcon
              icon="/icons/about.png"
              label="about"
              darkMode={darkMode}
              onClick={() => {
                setShowAbout(true);
                setActiveWindow(1);
              }}
            />
            <DesktopIcon
              icon="/icons/links.png"
              label="links"
              darkMode={darkMode}
              onClick={() => {
                setShowLinks(true);
                setActiveWindow(4);
              }}
            />

            <DesktopIcon
              icon="/icons/projects.png"
              label="projects"
              darkMode={darkMode}
              onClick={() => {
                setShowProjects(true);
                setActiveWindow(2);
              }}
            />

            <DesktopIcon
              icon="/icons/resume.png"
              label="resume"
              darkMode={darkMode}
              onClick={() => {
                setShowResume(true);
                setActiveWindow(5);
              }}
            />

            <DesktopIcon
              icon="/icons/contact.png"
              label="contact"
              darkMode={darkMode}
              onClick={() => {
                setShowContact(true);
                setActiveWindow(3);
              }}
            />

          </div>
        </div>
      </div>

      {/* About Window */}
      {showAbout && (
        <Window
          title="about me"
          x="26%"
          y="18%"
          onClose={() => setShowAbout(false)}
          darkMode={darkMode}
          zIndex={activeWindow === 1 ? 50 : 20}
          onFocus={() => setActiveWindow(1)}
        >

          <div className="flex items-start gap-8">

            <Image
              src="/about/avatar.jpg"
              alt="avatar"
              width={140}
              height={140}
              className="rounded-full border-2 border-gray-300"
            />

            <div>

              <h2
                className={`text-5xl font-light ${
                  darkMode
                    ? "text-cyan-100"
                    : "text-[#f5a623]"
                }`}
              >
                Tejan
              </h2>

              <p
                className={`mt-2 text-xl ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                Student, Developer, Designer
              </p>

              <p
                className={`mt-6 max-w-[420px] text-lg leading-relaxed ${
                  darkMode
                    ? "text-gray-200"
                    : "text-gray-700"
                }`}
              >
                i love building interactive
                experiences, front-end design,
                DSA related brainstorming, and creative projects.
              </p>

            </div>

          </div>

          <div
            className={`mt-10 border-t pt-8 ${
              darkMode
                ? "border-white/10"
                : "border-gray-300"
            }`}
          >

            <ul
              className={`space-y-4 text-lg ${
                darkMode
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >

              <li>
                • creating apps and websites with a lil bit of me 
              </li>

              <li>
                • building fun side projects
              </li>

              <li>
                • experimenting with UI design
              </li>

              <li>
                • learning new technologies
              </li>

            </ul>

          </div>

        </Window>
      )}

            {/* Links Window */}
      {showLinks && (
        <Window
          title="links"
          x="30%"
          y="20%"
          onClose={() => setShowLinks(false)}
          darkMode={darkMode}
          zIndex={activeWindow === 4 ? 50 : 20}
          onFocus={() => setActiveWindow(4)}
        >

          <div className="grid grid-cols-3 gap-8">

            <a
              href="https://github.com/Tejan03"
              target="_blank"
              className="flex flex-col items-center transition hover:scale-110"
            >

              <Image
                src="/links/github.png"
                alt="github"
                width={64}
                height={64}
              />

              <p
                className={`mt-3 text-lg ${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                github
              </p>

            </a>

            <a
              href="https://www.youtube.com/@tejan9171"
              target="_blank"
              className="flex flex-col items-center transition hover:scale-110"
            >

              <Image
                src="/links/youtube.png"
                alt="youtube"
                width={64}
                height={64}
              />

              <p
                className={`mt-3 text-lg ${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                youtube
              </p>

            </a>

            <a
              href="https://x.com/Itz_tenji"
              target="_blank"
              className="flex flex-col items-center transition hover:scale-110"
            >

              <Image
                src="/links/twitter.png"
                alt="twitter"
                width={64}
                height={64}
              />

              <p
                className={`mt-3 text-lg ${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                twitter
              </p>

            </a>

            <a
              href="https://www.linkedin.com/in/tejan-raj-8153632ab/"
              target="_blank"
              className="flex flex-col items-center transition hover:scale-110"
            >

              <Image
                src="/links/linkedin.png"
                alt="linkedin"
                width={64}
                height={64}
              />

              <p
                className={`mt-3 text-lg ${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                linkedin
              </p>

            </a>

            <a
              href="https://www.instagram.com/kazu0.3/"
              target="_blank"
              className="flex flex-col items-center transition hover:scale-110"
            >

              <Image
                src="/links/instagram.png"
                alt="instagram"
                width={64}
                height={64}
              />

              <p
                className={`mt-3 text-lg ${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                instagram
              </p>

            </a>

          </div>

        </Window>
      )}

      {/* Projects Window */}
      {showProjects && (
        <Window
          title="projects"
          x="38%"
          y="24%"
          onClose={() => setShowProjects(false)}
          darkMode={darkMode}
          zIndex={activeWindow === 2 ? 50 : 20}
          onFocus={() => setActiveWindow(2)}
        >

          <div className="space-y-4">

            {/* Physics */}
            <button
              onClick={() => setShowPhysics(true)}
              className={`flex w-full items-center justify-between border px-6 py-5 text-left font-mono text-[22px] transition ${
                darkMode
                  ? "border-[#2f4f6b] bg-[#1b3550] text-white hover:bg-[#244267]"
                  : "border-[#e5dcc2] bg-[#f4ecd2] text-[#3d3d3d] hover:bg-[#efe4bc]"
              }`}
            >

              <span>
                2D Physics Simulator
              </span>

              <span className="text-[28px]">
                ›
              </span>

            </button>

            {/* Portfolio */}
            <button
              onClick={() => setShowPortfolioProject(true)}
              className={`flex w-full items-center justify-between border px-6 py-5 text-left font-mono text-[22px] transition ${
                darkMode
                  ? "border-[#2f4f6b] bg-[#1b3550] text-white hover:bg-[#244267]"
                  : "border-[#e5dcc2] bg-[#f4ecd2] text-[#3d3d3d] hover:bg-[#efe4bc]"
              }`}
            >

              <span>
                Retro Portfolio Website
              </span>

              <span className="text-[28px]">
                ›
              </span>

            </button>

            {/* Todo */}
            <button
              onClick={() => setShowTodoProject(true)}
              className={`flex w-full items-center justify-between border px-6 py-5 text-left font-mono text-[22px] transition ${
                darkMode
                  ? "border-[#2f4f6b] bg-[#1b3550] text-white hover:bg-[#244267]"
                  : "border-[#e5dcc2] bg-[#f4ecd2] text-[#3d3d3d] hover:bg-[#efe4bc]"
              }`}
            >

              <span>
                To-Do App with Jetpack Compose
              </span>

              <span className="text-[28px]">
                ›
              </span>

            </button>

          </div>

        </Window>
      )}
      
      {/* Contact Window */}
      {showContact && (
        <Window
          title="contact"
          x="40%"
          y="10%"
          onClose={() => setShowContact(false)}
          darkMode={darkMode}
          zIndex={activeWindow === 4 ? 50 : 20}
          onFocus={() => setActiveWindow(4)}
        >

          <div className="flex flex-col items-center text-center">

            {/* Title */}
            <h2
              className={`font-mono text-5xl font-bold ${
                darkMode
                  ? "text-white"
                  : "text-[#3d3d3d]"
              }`}
            >
              let’s connect~
            </h2>

            {/* Description */}
            <p
              className={`mt-6 max-w-[500px] text-xl leading-relaxed ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              feel free to reach out for
              collaborations, projects,
              or even just to say hi :)
            </p>

            {/* Illustration */}
            <img
              src="/decorations/contact-otter.webp"
              alt="contact illustration"
              className="mt-3 w-[200px] animate-float"
            />

            {/* Email */}
            <p
              className={`mt-3 text-2xl ${
                darkMode
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              email me at:
            </p>

            <a
              href="mailto:tejanraj003@gmail.com"
              className="mt-2 text-2xl text-[#f59e0b] underline"
            >
              tejanraj003@gmail.com
            </a>

            {/* Button */}
            <a
              href="mailto:tejanraj003@gmail.com"
              className="mt-8 rounded-xl bg-[#f59e0b] px-8 py-4 text-2xl font-semibold text-white transition hover:scale-105 hover:bg-[#e78d00]"
            >
              send me an email!
            </a>

          </div>

        </Window>
      )}

      {/* Physics Project Window */}
      {showPhysics && (
        <Window
          title="2D physics simulator"
          x="42%"
          y="18%"
          onClose={() => setShowPhysics(false)}
          darkMode={darkMode}
          zIndex={60}
        >

          <h2 className="text-3xl font-bold">
            2D Physics Simulator ⚡
          </h2>

          <p className="mt-5 text-lg leading-relaxed">
            a custom-built physics sandbox featuring
            gravity, collision handling, momentum,
            and interactive motion systems.
          </p>

          <p className="mt-5 text-lg leading-relaxed">
            built using c++ and custom rendering logic
            while experimenting with real-time physics.
          </p>

        </Window>
      )}

      {/* Portfolio Project Window */}
      {showPortfolioProject && (
        <Window
          title="retro portfolio"
          x="44%"
          y="20%"
          onClose={() => setShowPortfolioProject(false)}
          darkMode={darkMode}
          zIndex={60}
        >

          <h2 className="text-3xl font-bold">
            Retro Portfolio Website 🌊
          </h2>

          <p className="mt-5 text-lg leading-relaxed">
            an interactive retro-inspired portfolio
            featuring draggable windows, dark mode,
            floating decorations, animations, and
            a dreamy desktop UI aesthetic.
          </p>

          <p className="mt-5 text-lg leading-relaxed">
            built using Next.js, TailwindCSS,
            Framer Motion, and React.
          </p>

        </Window>
      )}

      {/* Todo Project Window */}
      {showTodoProject && (
        <Window
          title="todo app"
          x="46%"
          y="22%"
          onClose={() => setShowTodoProject(false)}
          darkMode={darkMode}
          zIndex={60}
        >

          <h2 className="text-3xl font-bold">
            To-Do App with Jetpack Compose 📱
          </h2>

          <p className="mt-5 text-lg leading-relaxed">
            a modern Android productivity app
            created using Jetpack Compose with
            clean UI components and task handling.
          </p>

          <p className="mt-5 text-lg leading-relaxed">
            this was one of my earlier Android
            development projects focused on
            learning declarative UI design.
          </p>

        </Window>
        
      )}

      {/* Resume Window */}
      {showResume && (
        <Window
          title="resume"
          x="36%"
          y="20%"
          onClose={() => setShowResume(false)}
          darkMode={darkMode}
          zIndex={activeWindow === 5 ? 50 : 20}
          onFocus={() => setActiveWindow(5)}
        >

          <div className="flex flex-col items-center text-center">

            <h2 className="text-4xl font-bold">
              my resume 📄
            </h2>

            <p
              className={`mt-5 max-w-[420px] text-lg leading-relaxed ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              feel free to view or download my resume
              to learn more about my skills,
              projects, and experience.
            </p>

            <div className="mt-10 flex gap-5">

              {/* View Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                className={`rounded border px-6 py-3 text-lg transition ${
                  darkMode
                    ? "border-white bg-[#1b3550] text-white hover:bg-[#244267]"
                    : "border-[#d6c8a5] bg-[#f4ecd2] text-[#3d3d3d] hover:bg-[#efe4bc]"
                }`}
              >
                view resume
              </a>

              {/* Download Button */}
              <a
                href="/resume.pdf"
                download
                className={`rounded border px-6 py-3 text-lg transition ${
                  darkMode
                    ? "border-white bg-[#1b3550] text-white hover:bg-[#244267]"
                    : "border-[#d6c8a5] bg-[#f4ecd2] text-[#3d3d3d] hover:bg-[#efe4bc]"
                }`}
              >
                download pdf
              </a>

            </div>

          </div>

        </Window>
      )}

    </main>
  );
}