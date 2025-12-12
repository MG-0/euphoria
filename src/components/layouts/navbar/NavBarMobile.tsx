import { NAVBAR_LINKS } from "@/constants/NavBar";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CiMenuBurger } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useLocaleClass from "@/features/navbar/hooks/useLocaleClass";
import { useLocale } from "next-intl";
export default function NavBarMobile() {
  const t = useTranslations("NavBar");
  const localeClass = useLocaleClass
  const locale = useLocale()
  return (
    <div className="nav-mobile">
      <Sheet>
        <SheetTrigger asChild>
          <CiMenuBurger
            className={localeClass("nav-mobile-icon-arabic", "nav-mobile-icon")}
          />
        </SheetTrigger>
        <SheetContent
        
          className="nav-mobile-links"
          side={locale === "ar" ? "right" : "left"}
        >
          {NAVBAR_LINKS.map((link) => (
            <Link key={link.path} href={link.path}>
              {t(link.label)}
            </Link>
          ))}
          <div className="nav-mobile-icons">
            <Link href="/">
              <MdFavoriteBorder />
            </Link>
            <Link href="/">
              <BsPersonFill />
            </Link>
            <Link href="/">
              <CiShoppingCart />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
