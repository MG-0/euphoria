import Link from "next/link";
import NavBarDiskTop from "./NavBarDiskTop";
import NavBarMobile from "./NavBarMobile";
import LanguageSwitcher from "./LanguageSwitcher";
import { Dancing_Script } from "next/font/google";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { BsPersonFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import useLocaleClass from "@/features/navbar/hooks/useLocaleClass";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"], // choose weight you want
});
export default function NavBar() {
  const t = useTranslations("NavBar");
  const localeClass = useLocaleClass;
  return (
    <nav className="nav">
      <div>
        <Link href="/">
          <h1 className={`${dancingScript.className} nav-logo`}>Euphoria</h1>
        </Link>
      </div>
      <div>
        <NavBarDiskTop />
      </div>
      <div>
        <NavBarMobile />
      </div>
      <div className="nav-search">
        <CiSearch
          className={localeClass("nav-search-arabic", "nav-search-icon")}
        />
        <Input
          type="search"
          placeholder={t("search")}
          className="nav-search-input"
        />
      </div>
      <div className="nav-icons">
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
      <div className='nav-lang'>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
