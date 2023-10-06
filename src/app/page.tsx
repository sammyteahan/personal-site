"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Github, Linkedin, MoveUpRight } from "lucide-react"

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
          <a className="mx-2 text-[14px] hover:text-[#7e7e7e] hover:dark:text-[#7e7e7e] dark:text-[#E7E7E4] text-[#2a2a2b] cursor-pointer">Home</a>
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
              <p className="text-center md:text-start dark:text-[#a1a1aa] text-[#a1a1aa] mt-4">
                Software Developer at <a href="https://objective.dev" className="underline underline-offset-2">Objective</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="py-[10px] shadow-none rounded-[15px] max-w-[36rem] dark:border-[#1d1d1d] text-[#71767a]">
            <div className="flex items-center">
              <h2 className="flex text-lg font-semibold text-[#0f1419] dark:text-[#e7e9ea]">Work & Education</h2>
            </div>

            <div className="flex justify-between items-center py-6">
              <div className="flex">
                <div>
                  <img src="/logo_sm_objective.jpeg" width="45" className="rounded-full outline outline-1 outline-[#18181B] md:ml-2" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2 ml-4">
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Objective</span>
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Software Developer</span>
                </div>
              </div>
              <dd className="ml-auto mr-3 text-sm" aria-label="2016 until Present">
                <time dateTime="2016">2016</time>
                <span aria-hidden="true"> — </span>
                <time dateTime="2023">Present</time>
              </dd>
            </div>

            <div className="flex justify-between items-center py-6">
              <div className="flex">
                <div>
                  <img src="/logo_sm_lk.jpeg" width="45" className="rounded-full outline outline-1 outline-[#18181B] md:ml-2" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2 ml-4">
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Lightning Kite</span>
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Software Developer</span>
                </div>
              </div>
              <dd className="ml-auto mr-3 text-sm" aria-label="2016 until Present">
                <time dateTime="2013">2013</time>
                <span aria-hidden="true"> — </span>
                <time dateTime="2016">2016</time>
              </dd>
            </div>

            <div className="flex justify-between items-center py-6">
              <div className="flex">
                <div>
                  <img src="/logo_sm_usu.jpeg" width="45" className="rounded-full outline outline-1 outline-[#18181B] md:ml-2" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2 ml-4">
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Utah State University</span>
                  <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">Computer Science Degree</span>
                </div>
              </div>
              <dd className="ml-auto mr-3 text-sm" aria-label="2016 until Present">
                <time dateTime="2011">2011</time>
                <span aria-hidden="true"> — </span>
                <time dateTime="2015">2015</time>
              </dd>
            </div>

          </div>

          <div className="py-[10px] shadow-none rounded-[15px] max-w-[36rem] dark:border-[#1d1d1d] text-[#71767a]">
            <div className="flex items-center">
              <h2 className="flex text-lg font-semibold text-[#0f1419] dark:text-[#e7e9ea]">Follow me</h2>
            </div>
            <div className="mt-4">
              <a 
                target="_blank"
                href="https://github.com/sammyteahan"
                className="flex items-center justify-between dark:bg-[#121212] bg-[#F7F7F7] my-2 p-1 py-3 rounded-[10px]"
              >
                <div className="flex justify-center items-start">
                  <Github className="mx-3 h-[23px] w-[23px]" />
                  <div className="text-[14px]">
                    <p>Github</p>
                    <p className="text-[#71767a]">@sammyteahan</p>
                  </div>
                </div>
                <MoveUpRight className="h-4 w-4 mr-3" />
              </a>
              <a 
                target="_blank"
                href="https://www.linkedin.com/in/sam-teahan-7b9654a8/"
                className="flex items-center justify-between dark:bg-[#121212] bg-[#F7F7F7] my-2 p-1 py-3 rounded-[10px]"
              >
                <div className="flex justify-center items-start">
                  <Linkedin className="mx-3 h-[23px] w-[23px]" />
                  <div className="text-[14px]">
                    <p>Linkedin</p>
                    <p className="text-[#71767a]">Sam Teahan</p>
                  </div>
                </div>
                <MoveUpRight className="h-4 w-4 mr-3" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
