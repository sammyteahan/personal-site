import * as React from 'react'

type ExperienceRowProps = {
  title: string
  subtitle: string
  start: string
  end: string
  icon: React.ReactNode
}

const ExperienceRow = (props: ExperienceRowProps) => (
  <div className="flex justify-between items-center py-6">
    <div className="flex">
      <div>
        {props.icon}
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2 ml-4">
        <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">{props.title}</span>
        <span className="w-full flex-none text-[14px] text-zinc-900 dark:text-[#e7e9ea]">{props.subtitle}</span>
      </div>
    </div>
    <dd className="ml-auto mr-3 text-sm">
      <time dateTime="2011">{props.start}</time>
      <span aria-hidden="true"> — </span>
      <time dateTime="2015">{props.end}</time>
    </dd>
  </div>
)

export { ExperienceRow as default }
