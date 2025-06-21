    "use client";
    import { useEffect, useState } from "react";
    import ProjectCard from "../_components/ProjectCard";
    import { useTranslations } from 'next-intl';
    import Loader from "../_components/Loader";

    const page = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const t = useTranslations('projects');

    useEffect(() => {
        fetch("https://68532e400594059b23d0540d.mockapi.io/projects")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setLoading(false); 
        })
        .catch((error) => {
            console.error("Error fetching projects:", error);
            setLoading(false);
        });
    }, []); 

    return (
    <div id="projects" className="p-7 ">
        <h1 className="font-bold font-mono text-2xl mb-5">{t("sectionTitle")}</h1>

        {loading ? (
            <Loader /> 
        ) : (
            <div className="flex flex-wrap gap-4 justify-center">
            { 
                data.map((project) => (
                <ProjectCard key={project.id} props={project} />
                ))
            }
            </div>
        )}
        </div>
    )
    
    }

    export default page