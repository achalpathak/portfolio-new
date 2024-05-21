import PdfIcon from "../../assets/pdf-file-svgrepo-com.svg";
import TechStack from "../../pages/Home/techStack.json";
function TechLister({ sectionName, sectionData }) {
  return (
    <div>
      <h2 className="mt-8 mb-2 text-xl font-semibold">{sectionName}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2">
        {Object.keys(sectionData).map((eachData, idx) => (
          <li className="p-3 flex items-center bg-zinc-800 rounded" key={idx}>
            <img className="p-2 bg-zinc-700 rounded" src={`/src/assets/${TechStack[sectionName][eachData]["icon_path"]}`} alt="" width="40px" />
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
