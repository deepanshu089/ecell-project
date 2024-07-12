import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import MODERN_BROWSERSLIST_TARGET from "next/dist/shared/lib/modern-browserslist-target";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white  ">
    <div className=" container mx-auto flex justify-between items-center">
        <Link href="/">
        
        <h1 className="text-4xl font-extrabold">
            DS<span className="text-accent">.</span>
        </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        <Link href="/contact">
        <Button><a href="/contact">Hire Me</a></Button>
        </Link>
        </div>


        <div className="xl:hidden">
            <MobileNav />
        </div>
        
    </div>
    </header>
  );
};

export default Header;
