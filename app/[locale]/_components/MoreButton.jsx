import React from "react";
import AnimatedContent from './AnimatedContent.jsx';
import Link from "next/link";
import { useLocale } from 'next-intl';
const MoreButton = () => {
const locale = useLocale();
  return (

<AnimatedContent
  distance={50}
  direction="vertical"
  reverse={true}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
<Link href={`/${locale}/projects`} className="flex flex-col items-center justify-center mt-4 transition duration-300 hover:translate-y-1 ">
      <h1 className="font-bold text-xl">See More</h1>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </Link>
</AnimatedContent>



    
  );
};

export default MoreButton;
