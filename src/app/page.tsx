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
    <div className="h-[100vh] overflow-auto scrollbar-hide">
      <header className="flex max-w-[36rem] py-5 px-[13px] mx-auto w-full justify-between items-center">
        <div className="bg-[#ffffffe6] drop-shadow-sm dark:bg-[#252529] px-4 py-2 border rounded-[14px] dark:border-[#2a2a2b] border-[#f4f4f5]">
          <a className="mx-2 text-[14px] hover:text-[#7e7e7e] hover:dark:text-[#7e7e7e] dark:text-[#E7E7E4] text-[#2a2a2b]">Home</a>
        </div>
        <div className="flex w-full justify-end">
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100" />
          </Button>
        </div>
      </header>

      <main className="p-4 max-w-[36rem] mx-auto">
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center rounded-full">
              <div className="w-2 h-2 mr-2 rounded-full dark:bg-[#7e7e7e] bg-[#7e7e7e]" />
              <p className="text-[15px] text-[#7e7e7e] dark:text-[#7e7e7e]">Software Developer</p>
            </div>
            <div className="flex items-center justify-center bg-[#cffadf] rounded-full px-2 py-[1px]">
              <div className="w-2 h-2 mr-2 rounded-full bg-[#29c780]" />
              <p className="text-[12px] text-[#019853]">Limited Availability for Q4 2023</p>
            </div>
          </div>
          
          <div className="flex items-center flex-col md:flex-row-reverse justify-between mt-8">
            <div className="w-[30%]">
              <img
                src="https://avatars.githubusercontent.com/u/5985730?v=4"
                width={140}
                className="p-1 mx-auto dark:bg-[#252529] bg-[#ffffffe6] shadow-md rounded-full"
              />
            </div>
            <div className="w-[70%]">
              <h1 className="text-center md:text-start text-[32px] mt-4">Hi! I'm Sam</h1>
              <p className="text-center md:text-start dark:text-[#a1a1aa] text-[#a1a1aa] mt-4">Software Developer at objective.dev</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
