import TechCards from "../TechCards";
import {getTranslations} from 'next-intl/server';


const Technologies = async() => {
  
  const t = await getTranslations('technologies');
const front = ["react", "tailwindcss"];

const back = ["nodejs", "express", "mongodb"];

const tools = ["git", "github", "postman", "vscode"];
  return (
    <div className="my-10" id="technologies">
      <h1 className="font-bold font-mono mb-3 text-2xl ">{t("sectionTitle")}</h1>
      <div className="flex flex-wrap gap-5">
        <TechCards cat={t("FrontEnd")} items={front} />
        <TechCards cat={t("BackEnd")} items={back} />
      <TechCards cat={t("Tools")} items={tools} />
      </div>
    </div>
  );
};

export default Technologies;
