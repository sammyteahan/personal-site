"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => theme === 'light'
    ? setTheme('dark')
    : setTheme('light')

  return (
    <main className="h-[100vh] overflow-auto scrollbar-hide">
      <header className="flex max-w-[35rem] py-5 px-[13px] mx-auto w-full justify-between items-center">
        <div className="bg-[#ffffffe6] drop-shadow-sm dark:bg-[#252529] px-4 py-2 border rounded-[14px] dark:border-[#2a2a2b] border-[#f4f4f5] ">
          <a className="mx-2 text-[14px] hover:text-[#7e7e7e] hover:dark:text-[#7e7e7e] dark:text-[#E7E7E4] text-[#2a2a2b]">Home</a>
        </div>
        <div className="flex w-full justify-end">
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </header>
    </main>
  )
}
