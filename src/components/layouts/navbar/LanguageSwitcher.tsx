"use client";

import { Popover } from "@headlessui/react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const flags = {
  en: "/flags/us.png",
  ar: "/flags/eg.png",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // استخرج اللغة مباشرة من pathname
  const currentLang = (pathname.split("/")[1] === "ar" ? "ar" : "en") as
    | "en"
    | "ar";

  const switchLanguage = (lang: "en" | "ar") => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <Popover className="relative">
      <Popover.Button className="w-[28px] h-[28px] flex items-center justify-center rounded-md">
        <Image
          src={flags[currentLang]}
          width={22}
          height={22}
          alt={currentLang}
          className="rounded-sm"
        />
      </Popover.Button>

      <Popover.Panel className="absolute z-[9999] mt-2 w-[80px] bg-white shadow-lg rounded-md p-1">
        <div
          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
          onClick={() => switchLanguage("en")}
        >
          <Image src={flags.en} width={16} height={16} alt="EN" />
          <span className="text-sm">English</span>
        </div>

        <div
          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
          onClick={() => switchLanguage("ar")}
        >
          <Image src={flags.ar} width={16} height={16} alt="AR" />
          <span className="text-sm">العربية</span>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
