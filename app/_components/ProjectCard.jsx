import Image from "next/image";
const ProjectCard = ({ props }) => {
  return (

    //change api props
    <div className="mb-7">
      <Image
        src={""}
        alt="Project Image"
        width={558}
        height={358}
        className="rounded-lg shadow-md object-cover border-2"
      />
      <h1  className="font-bold font-mono text-sm my-2 ">{`project ${props.id}`}</h1>
      <p>{props.name}</p>
    </div>
  );
};

export default ProjectCard;
