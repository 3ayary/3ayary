import Image from "next/image";
import {getTranslations} from 'next-intl/server';

const  AboutSection = async() => {
  const t = await getTranslations('about');
  return (
    <div className="flex flex-col justify-center my-8" id="about">
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
        <h1 className="text-2xl font-bold mt-3 ">{t("name")}</h1>
        <p className="text-gray-600 text-[16px] mt-2">{t("jobTitle")}</p>
      </div>

      <div className="flex flex-col mt-10">
        <h1 className="font-bold font-mono text-2xl">{t("sectionTitle")}</h1>
        <p className="text-gray-600 text-[16px] mt-2">
          {t("description")}
        </p>

      </div>
    </div>
  );
};

export default AboutSection;
