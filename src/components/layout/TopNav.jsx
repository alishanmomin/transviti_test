import { navItems } from "../../utils/constants.js";
import { LOCAL_IMAGES } from "../../utils/localImages.js";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={LOCAL_IMAGES.logo} />
        </div>
        <nav className="hidden lg:flex whitespace-nowrap items-center gap-6 text-sm text-slate-500">
          {navItems.map((x) => (
            <a
              key={x.label}
              href="#"
              className={x.active? "text-primary font-semibold": "hover:text-slate-800"}
            >
              {x.label}
            </a>
          ))}
        </nav>
        <div className="flex-1" />
        <div className="hidden md:block w-[320px]">
          <Input placeholder="Search" leftIcon={true} />
        </div>
        <Button className="hidden sm:inline-flex whitespace-nowrap">Resume Builder</Button>
        <img className="h-10" src={LOCAL_IMAGES.dp} />
      </div>
    </header>
  );
}
