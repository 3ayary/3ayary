import SkillsItem from "../SkillsItem";
import {getTranslations} from 'next-intl/server';

const SkillsSection = async() => {
    const t = await getTranslations('skills');
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NextJs",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "NodeJs",
    "ExpressJs"
  ]

  return (
    <div id="skills">
      <h1 className="font-bold font-mono text-2xl mb-3 ">{t("sectionTitle")}</h1>
      <div className="flex flex-wrap gap-4">
        {skills &&
          skills.map((skill, index) => <SkillsItem text={skill} key={index} />)}
      </div>
    </div>
  )
}

export default SkillsSection
