import { Button } from "@/components/ui/button";
import recruiterIcon from "../images/avatar.png";
import homepagePhoto from "../images/homepage.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full px-12 ">
        <div className="flex flex-col h-screen w-full items-center justify-center p-6 px-12 text-slate-400 xl:text-slate-400 bg-[url(../images/homebg.png)] bg-cover bg-center">
          <div className="w-full bg-gray-100 rounded-xl shadow-md">
            <div className="container mx-auto flex justify-between items-center py-1 px-6">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-10"
                  width={10}
                  height={10}
                />
                <span className="ml-3 text-xl font-bold text-gray-800">
                  diversity.exe
                </span>
              </div>

              <div className="flex space-x-8">
                <a
                  href="#home"
                  className="text-base text-gray-700 hover:text-gray-900 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  Home
                </a>
                <a
                  href="#why-us"
                  className="text-base text-gray-700 hover:text-gray-900 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  Why us?
                </a>
                <a
                  href="#contact"
                  className="text-base text-gray-700 hover:text-gray-900 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  Contact
                </a>
                <a
                  href="/auth"
                  className="text-base text-gray-700 hover:text-gray-900 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex w-full items-center">
            <div className="flex-1 flex-col flex w-full ml-52 mb-1 items-center justify-start">
              <h2 className="text-2xl font-bold text-blue-900">
                Explore topics, Learn with guided roadmaps.
              </h2>
              <br />
              <h2 className="text-xl font-bold text-blue-900">
                Climb the leaderboard, Let recruiters discover your potential.
              </h2>
            </div>
            <div className="flex-1 flex w-full mr-40 items-center justify-end">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={homepagePhoto}
                  alt="design"
                  className="h-auto w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen w-full flex-col items-center justify-center px-12 p-6 text-slate-400/0 xl:text-slate-400">
        <div className="grid h-full w-full grid-cols-3 gap-4">
          <div className="col-span-2 row-span-4">
            <div className="flex h-full w-full flex-col  text-rose-950 font-sans justify-end gap-6 rounded-3xl bg-rose-300 px-12 transition-transform duration-300 hover:transform hover:translate-y-[-10px]">
              <h1 className="text-2xl text-left font-bold transition-transform duration-300 hover:translate-y-[-7px]">
                Why us?
              </h1>
              <h3 className="text-base text-left font-semibold mb-6 transition-transform duration-300 hover:translate-y-[-7px]">
                For students,
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    We offer personalized learning roadmaps based on your
                    current knowledge, ensuring that you receive the most
                    relevant and effective resources to master new topics.
                  </li>
                  <li className="mb-2">
                    Monitor your progress through our interactive leaderboard
                    and stay motivated.
                  </li>
                </ul>
                For recruiters,
                <br />
                <ul className="list-disc pl-5">
                  <li className="mb-2">
                    Our platform provides a clear view of candidates&apos;
                    skills and knowledge through the leaderboard, helping you
                    find the best talent quickly and efficiently.
                  </li>
                </ul>
              </h3>
            </div>
          </div>

          <div className="row-span-3 rounded-3xl bg-sky-200 text-sky-950 text-center flex flex-col font-sans justify-between gap-6 p-6  transition-transform duration-300 hover:transform hover:translate-y-[-10px]">
            <h1 className="text-2xl text-left font-bold transition-transform duration-300 hover:translate-y-[-7px]">
              Easy to use
            </h1>
            <h3 className="text-base text-left font-semibold transition-transform duration-300 hover:translate-y-[-7px]"></h3>
          </div>

          <div className="row-span-5 rounded-3xl bg-emerald-300 text-green-950 flex flex-col font-sans hover:font-sans justify-end gap-6 items-start p-6 transition-transform duration-300 hover:transform hover:translate-y-[-10px]">
            <h1 className="text-2xl font-bold transition-transform duration-300 hover:translate-y-[-7px]">
              Progress Tracking
            </h1>
            <h3 className="text-base font-semibold transition-transform duration-300 hover:translate-y-[-7px]">
              Track your daily progress and elevate your ranking by completing
              quizzes.
            </h3>
          </div>

          <div className="row-span-4 rounded-3xl bg-orange-300 text-orange-950 flex flex-col font-sans justify-end gap-6 items-start p-6  transition-transform duration-300 hover:transform hover:translate-y-[-10px]">
            <h1 className="text-2xl font-bold  transition-transform duration-300 hover:translate-y-[-7px]">
              Interactive and Intuitive
            </h1>
            <h3 className="text-base font-semibold  transition-transform duration-300 hover:translate-y-[-7px]">
              Participate in mock interviews to better prepare for real-life
              scenarios.
            </h3>
          </div>
          <div className="row-span-4 rounded-3xl bg-fuchsia-300 text-purple-950 flex flex-col font-sans justify-start gap-6 items-start p-6 transition-transform duration-300 hover:transform hover:translate-y-[-10px]">
            <h1 className="text-2xl font-bold transition-transform duration-300 hover:translate-y-[-7px]">
              High Quality Content
            </h1>
            <h3 className="text-base font-semibold transition-transform duration-300 hover:translate-y-[-7px]">
              Providing you with the best courses on any topic from across the
              internet.
            </h3>
          </div>
        </div>
      </div>

      <div className="my-12"></div>

      <div className="w-full h-screen px-12">
        <div className="flex h-full justify-evenly items-center bg-[url(../images/bg.jpg)] bg-cover bg-center">
          <div className="flex flex-col justify-evenly w-80 h-96 bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={recruiterIcon}
                alt="Recruiter"
                className="h-12 w-12"
              />
              <h2 className="text-2xl font-bold text-blue-800">Recruiter</h2>
            </div>
            <p className="text-base mb-4 text-gray-700">
              Looking for top talent? Sign up to access the recruiter dashboard
              and view the leaderboard to find the best candidates for your
              needs!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Sign Up
            </button>
          </div>

          <div className="flex flex-col justify-evenly w-80 h-96 bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Image src={recruiterIcon} alt="Student" className="h-12 w-12" />
              <h2 className="text-2xl font-bold text-blue-800">Student</h2>
            </div>
            <p className="text-base mb-4 text-gray-700">
              Ready to enhance your skills? Sign up now to access your
              personalized learning dashboard, track your progress, and find top
              courses!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-12 py-6"></div>
    </div>
  );
}
