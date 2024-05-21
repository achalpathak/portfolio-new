import ProfilePic from "../../assets/pic.png";
import GoPic from "../../assets/go.svg";
import RustPic from "../../assets/rust.svg";
import PdfIcon from "../../assets/pdf-file-svgrepo-com.svg";
import { TechLister } from "../../components";
import TechStack from "./techStack.json";
function Home() {
  return (
    <section className="mx-4 p-4">
      {/* HERO PORTION */}
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
        <div className="w-full sm:mt-8 sm:w-5/6">
          <span className="my-4 text-3xl sm:text-3xl font-bold">
            👋 Hi! I'm&nbsp;
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Achal Pathak
            </span>
          </span>
          <p className="my-4">29-year-old software developer from India.</p>
          <p className="my-4">
            Currently, I work as a senior software engineer, focusing on
            building scalable microservices and infrastructure, with background
            interest in cloud technologies, system security, and web
            applications. I enjoy seeking out creative solutions to complex
            problems and building things that empower others to do the same.
          </p>

          <blockquote class=" italic font-semibold text-gray-900 dark:text-white">
            <p>
              "What I cannot create, I do not understand" - Richard Feynman
            </p>
          </blockquote>

          <p className="my-4 flex content-center items-center">
            Currently I am learning GoLang
            <img src={GoPic} alt="" width="40px" className="mx-2" />
            {/* and Rust <img src={RustPic} alt="" width="40px" className="mx-2" /> */}
          </p>
        </div>
        <div className="self-center my-4">
          <img
            className="w-32 sm:w-44 border-2 border-purple-800"
            src={ProfilePic}
            alt=""
          />
        </div>
      </div>
      <button class="duration-300 hover:scale-105 bg-gray-300 hover:bg-purple-400 text-purple-900 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <img src={PdfIcon} alt="" width="25px" />
        <span className="px-4">View Resume</span>
      </button>

      {/* MID PORTION */}

      <div className="mt-8 border-t border-neutral-600">
        <h2 className="my-4 text-2xl font-semibold">🚀 Noteworthy Projects </h2>

        <div className="my-6 bg-zinc-800 rounded p-5">
          <a href="https://github.com/achalpathak/rapid_ssh" target="_blank">
            <span className="text-blue-300 text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="inline-flex fill-purple-400"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>{" "}
              Rapid SSH 🔗
            </span>
          </a>
          <br />
          <span>
            Rapid SSH is a lightweight tool developed in Go, that allows users
            to easily manage and connect to SSH servers with minimal effort.
          </span>
        </div>
      </div>
      <div className="mt-8 border-t border-neutral-600">
        <h2 className="my-4 text-2xl font-semibold">💻 Technologies I use</h2>

        <div>
          {Object.keys(TechStack).map((sectionName, idx) => (
            <TechLister
              sectionName={sectionName}
              sectionData={TechStack[sectionName]}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
