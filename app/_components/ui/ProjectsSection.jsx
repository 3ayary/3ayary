"use client";
import { useEffect ,useState} from "react";
import ProjectCard from "../ProjectCard";


const ProjectsSection = () => {
     const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://68532e400594059b23d0540d.mockapi.io/projects") // change api endpoint
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  });

  return (
    <div id="projects">
      <h1 className="font-bold font-mono text-2xl mb-3 ">Projects</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {data && 
        data.map((project)=>(
            <ProjectCard key={project.id} props={project} />
        ))
        }
      </div>
    </div>
  );
};

export default ProjectsSection;
