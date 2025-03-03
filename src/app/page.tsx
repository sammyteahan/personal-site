"use client"

import Image from 'next/image'
import { Github, Linkedin, MoveUpRight } from "lucide-react"

import Header from '@/components/header'
import ExperienceRow from '@/components/experience-row'

export default function Home() {
  return (
    <div className="h-[100vh] overflow-auto scrollbar-hide">
      <Header />
      <main className="p-4 max-w-[36rem] mx-auto">
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center rounded-full">
              <div className="w-2 h-2 mr-2 rounded-full dark:bg-[#7e7e7e] bg-[#7e7e7e]" />
              <p className="text-[15px] text-[#7e7e7e] dark:text-[#7e7e7e]">Software Developer</p>
            </div>
            <div className="flex items-center justify-center bg-[#cffadf] rounded-full px-2 py-[1px]">
              <div className="w-2 h-2 mr-2 rounded-full bg-[#29c780]" />
              <p className="text-[12px] text-[#019853]">Availability for Q3 2025</p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row-reverse justify-between mt-8">
            <div className="w-[30%]">
              <Image
                priority
                alt="avatar image"
                src="/avatar_md.png"
                width={140}
                height={140}
                className="p-1 mx-auto dark:bg-[#252529] bg-[#ffffffe6] shadow-md rounded-full"
              />
            </div>
            <div className="w-[70%]">
              <h1 className="text-center md:text-start text-[32px] mt-4">Hi! I&apos;m Sam</h1>
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
            <ExperienceRow
              title="Objective"
              subtitle="Software Developer"
              start="2016"
              end="Present"
              icon={
                <Image
                  alt="logo of objective"
                  src="/logo_sm_objective.jpeg"
                  width="45"
                  height="45"
                  className="rounded-full outline outline-1 outline-[#18181B] md:ml-2"
                />
              }
            />
            <ExperienceRow
              title="Lightning Kite"
              subtitle="Software Developer"
              start="2013"
              end="2016"
              icon={
                <Image
                  alt="logo of lightning kite"
                  src="/logo_sm_lk.jpeg"
                  width="45"
                  height="45"
                  className="rounded-full outline outline-1 outline-[#18181B] md:ml-2"
                />
              }
            />
            <ExperienceRow
              title="Utah State University"
              subtitle="Computer Science Degree"
              start="2011"
              end="2015"
              icon={
                <Image
                  alt="logo of utah state university"
                  src="/logo_sm_usu.jpeg"
                  width="45"
                  height="45"
                  className="rounded-full outline outline-1 outline-[#18181B] md:ml-2"
                />
              }
            />
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
