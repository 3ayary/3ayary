import Image from "next/image";
const AboutSection = () => {
  return (
    <div className="flex flex-col justify-center my-8">
      <div className="items-center flex flex-col">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <Image
            src="/muhanad.jpg"
            alt="muhanad"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold mt-3">Muhanad Al-ayari</h1>
        <p className="text-gray-600 text-[16px] mt-2">Full Stack Developer</p>
      </div>

      <div className="flex flex-col mt-10">
        <h1 className="font-bold font-mono">About Me</h1>
        <p className="text-gray-600 text-[16px] mt-2">
          I'm a web developer specializing in Next.js, with a strong focus on
          building fast, scalable, and user-friendly web applications.
        </p>

      </div>
    </div>
  );
};

export default AboutSection;
