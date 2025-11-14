import Link from "next/link";
import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <header className="flex max-w-[36rem] py-5 px-[13px] mx-auto w-full justify-between items-center">
      <div className="bg-[#ffffffe6] drop-shadow-sm dark:bg-[#252529] px-4 py-2 border rounded-[14px] dark:border-[#2a2a2b] border-[#f4f4f5]">
        <a className="mx-2 text-[14px] hover:text-[#7e7e7e] hover:dark:text-[#7e7e7e] dark:text-[#E7E7E4] text-[#2a2a2b] cursor-pointer">
          Home
        </a>

        <Link
          className="mx-2 text-[14px] hover:text-[#7e7e7e] hover:dark:text-[#7e7e7e] dark:text-[#E7E7E4] text-[#2a2a2b] cursor-pointer"
          href="https://cal.com/sammyteahan"
        >
          Connect
        </Link>
      </div>
      <div className="flex w-full justify-end">
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100" />
        </Button>
      </div>
    </header>
  );
};

export { Header as default };
