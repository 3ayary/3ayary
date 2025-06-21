"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchTo = currentLocale === "en" ? "ar" : "en";

  const handleChangeLanguage = () => {
    const segments = pathname.split("/");
    segments[1] = switchTo;
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={handleChangeLanguage}
      disabled={isPending}
      className="fixed bottom-8 right-7 bg-[#8dc2ec] text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#7eadd4] transition"
    >
      {switchTo}
    </button>
  );
}
