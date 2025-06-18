import SkillsItem from "../SkillsItem";

const SkillsSection = () => {
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
    <div>
      <h1 className="font-bold font-mono text-2xl mb-3 ">Skills</h1>
      <div className="flex flex-wrap gap-4">
        {skills &&
          skills.map((skill, index) => <SkillsItem text={skill} key={index} />)}
      </div>
    </div>
  )
}

export default SkillsSection
