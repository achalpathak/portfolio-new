import PdfIcon from "../../assets/pdf-file-svgrepo-com.svg";
import TechStack from "../../pages/Home/techStack.json";
import python from '../../assets/python.svg';
import django from '../../assets/django.svg';
import go from '../../assets/go.svg';
import mysql from '../../assets/mysql.svg';
import redis from '../../assets/redis.svg';
import rabbitmq from '../../assets/rabbitmq.svg';
import mongodb from '../../assets/mongodb.svg';
import reactjs from '../../assets/reactjs.svg';
import nextjs from '../../assets/nextjs.svg';
import tailwindcss from '../../assets/tailwindcss.svg';
import nginx from '../../assets/nginx.svg';
import docker from '../../assets/docker.svg';
import jenkins from '../../assets/jenkins.svg';
import k8s from '../../assets/k8s.svg';
import aws from '../../assets/aws.svg';
import neovim from '../../assets/neovim.svg';



const icons = {
    "python.svg": python,
    "django.svg": django,
    "go.svg": go,
    "mysql.svg": mysql,
    "redis.svg": redis,
    "rabbitmq.svg": rabbitmq,
    "mongodb.svg": mongodb,
    "reactjs.svg": reactjs,
    "nextjs.svg": nextjs,
    "tailwindcss.svg": tailwindcss,
    "nginx.svg": nginx,
    "docker.svg": docker,
    "jenkins.svg": jenkins,
    "k8s.svg": k8s,
    "aws.svg": aws,
    "neovim.svg": neovim,
};


function TechLister({ sectionName, sectionData }) {

  return (
    <div>
      <h2 className="mt-8 mb-2 text-xl font-semibold">{sectionName}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2">
        {Object.keys(sectionData).map((eachData, idx) => (
          <li className="p-3 flex items-center bg-zinc-800 rounded" key={idx}>
            <img className="p-2 bg-zinc-700 rounded" src={icons[TechStack[sectionName][eachData]["icon_path"]]} alt={TechStack[sectionName][eachData]["name"]} width="40px" />
            <span className="text-blue-300 text-lg sm:text-xl mx-3">
              {TechStack[sectionName][eachData]["name"]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechLister;
