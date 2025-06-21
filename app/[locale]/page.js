import AboutSection from "./_components/ui/AboutSection";
import ContactSection from "./_components/ui/ContactSection";
import ProjectsSection from "./_components/ui/ProjectsSection";
import SkillsSection from "./_components/ui/SkillsSection";
import Technologies from "./_components/ui/Technologies";

export default function Home() {
 return(
 <div className="px-[70px] md:px-[170px] ">
    <AboutSection />
    <SkillsSection/>
    <Technologies/>
    <ProjectsSection/>
    <ContactSection/>
    
 </div>
 )
}
