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
              <p className="text-center md:text-start dark:text-[#a1a1aa] text-[#a1a1aa] mt-4">Software Developer at <a href="https://objective.dev" className="underline underline-offset-2">Objective</a></p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="py-[10px] shadow-none rounded-[15px] max-w-[36rem] dark:border-[#1d1d1d] text-[#71767a]">
            <div className="flex items-center">
              <h2 className="flex text-lg font-semibold text-[#0f1419] dark:text-[#e7e9ea]">Work</h2>
            </div>
            <div className="flex justify-between items-center py-8">
              <div className="flex">
                <div className="flex flex-auto flex-wrap gap-x-2">
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Objective</span>
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Software Developer</span>
                </div>
              </div>
              <dd className="ml-auto mr-3 text-sm" aria-label="2016 until Present">
                <time dateTime="2016">2016</time>
                <span aria-hidden="true">—</span>
                <time dateTime="2023">Present</time>
              </dd>
            </div>
          </div>

          <div className="py-[10px] shadow-none rounded-[15px] max-w-[36rem] dark:border-[#1d1d1d] text-[#71767a]">
            <div className="flex items-center">
              <h2 className="flex text-lg font-semibold text-[#0f1419] dark:text-[#e7e9ea]">Follow me</h2>
            </div>

            <div className="mt-4">
              <a 
                className="flex items-center justify-between py-3 cursor-pointer"
                target="_blank"
                href="https://github.com/sammyteahan"
              >
                <div className="flex justify-center items-center">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-sm font-medium dark:text-[#7e7e7e] mr-2 text-[#7e7e7e] transition " height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                  Github
                </div>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path></svg>
              </a>
              <a 
                className="flex items-center justify-between py-3 cursor-pointer"
                target="_blank"
                href="https://www.linkedin.com/in/sam-teahan-7b9654a8/"
              >
                <div className="flex justify-center items-center">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-sm font-mediumdark:text-[#7e7e7e] mr-2 text-[#7e7e7e] transition" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
                  Linkedin
                </div>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
