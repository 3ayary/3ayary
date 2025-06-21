import Image from "next/image";
import LinkCard from "../LinkCard";

const ContactSection = () => {
  return (
    <div className=" mb-10" id="contact">
      <h1 className="font-bold font-mono text-2xl mb-3">Contact</h1>
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/placeholder.svg"}
          alt="Project Image"
          width={928}
          height={270}
          className="rounded-lg shadow-md object-cover "
        />
      </div>
      <div className=" flex flex-row justify-center items-center gap-4 mt-10">
        <LinkCard social={'github'} link={'https://github.com/3ayary'}/>
         <LinkCard social={'linkedin'} link={'https://www.linkedin.com/in/muhanad-al-ayari-5a1812221/'}/>
          <LinkCard social={'mail'} link={'mailto:3ayary@gmail.com'}/>
      </div>

      <div>
        <p></p>
        <p className="text-center text-gray-600 mt-4">
          Feel free to reach out for collaborations or just to say hi!
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
