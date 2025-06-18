import TechCards from "../TechCards";


const Technologies = () => {
  
const front = ["react", "tailwindcss"];

const back = ["nodejs", "express", "mongodb"];

const tools = ["git", "github", "postman", "vscode"];
  return (
    <div className="my-10">
      <h1 className="font-bold font-mono mb-3 text-2xl ">Technologies</h1>
      <div className="flex flex-wrap gap-5">
        <TechCards cat="Front-end" items={front} />
        <TechCards cat="Back-end" items={back} />
      <TechCards cat="Tools" items={tools} />
      </div>
    </div>
  );
};

export default Technologies;
