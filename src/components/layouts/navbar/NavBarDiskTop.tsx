import { NAVBAR_LINKS } from "@/constants/NavBar";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function NavBarDiskTop() {
  const t = useTranslations("NavBar");
  return (
    <>
    <div className="nav-links-desktop">
      {NAVBAR_LINKS.map((link) => (
        <Link key={link.path} href={link.path}>
          {t(link.label)}
        </Link>
      ))}
    </div>

      </>
  );
}

// 🧩 1️⃣ useLocaleClass.ts
// import { useLocale } from "next-intl";

// /**
//  * Hook بسيط بيرجع الكلاس المناسب حسب اللغة
//  * مثال الاستخدام:
//  * className={localeClass('text-right', 'text-left')}
//  */
// export default function useLocaleClass(arClass: string, enClass: string) {
//   const locale = useLocale();
//   return locale === "ar" ? arClass : enClass;
// }

// import Section from "@/components/ui/custom/Section";
// import Image from "next/image";
// import { IMAGES } from "@/constants/images";
// import "@/app/Styles/Home/home.css";
// import Link from "next/link";
// import Button from "@/components/ui/custom/Button";
// import { useTranslations } from "next-intl";
// import useLocaleClass from "@/features/home/hooks/useLocaleClass";

// export default function Hero() {
//   const t = useTranslations("HomePage");
//   const localeClass = useLocaleClass; //

//   return (
//     <Section className="section">
//       {IMAGES.map((image) => (
//         <Image
//           key={image.title}
//           src={image.path}
//           alt={image.title}
//           width={image.width}
//           height={image.height}
//           className={image.className}
//         />
//       ))}

//       <div className={localeClass("section-div-arabic", "section-div")}>
//         <h1 className={localeClass("section-div-arabic-h1", "section-div-h1")}>
//           {t("h1")}
//         </h1>
//         <h2 className={localeClass("section-div-arabic-h2", "section-div-h2")}>
//           {t("h2")}
//         </h2>
//         <h3 className={localeClass("section-div-arabic-h3", "section-div-h3")}>
//           {t("h3")}
//         </h3>

//         <Link href="/">
//           <Button
//             className={localeClass("section-div-arabic-btn", "section-div-btn")}
//           >
//             {t("button")}
//           </Button>
//         </Link>
//       </div>
//     </Section>
//   );
// }
