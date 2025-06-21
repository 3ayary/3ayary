import Button from "../Button";
import { getTranslations } from "next-intl/server";
const NavBar = async() => {
  const t = await getTranslations('navbar');
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-[60px] p-4 md:h-[65px] font-mono bg-white border-b-1 border-gray-300 sticky top-0 z-10">
      <div>
        <span className="font-bold">{t("siteTitle")}</span>
      </div>

      <div className="flex items-center md:gap-3">
        <Button text={t("aboutLink")} link='/#about' />
        <Button text={t("projectsLink")} link='/#projects' />
        <Button text={t("contactLink")} link='/#contact'/>
        <Button text={t("resumeLink")} second={true} link='/muhanad.pdf' download />
      </div>
    </div>
  );
};

export default NavBar;
