export default function Home() {
  return (
    <main className="h-[100vh] overflow-auto scrollbar-hide">
      <header className="flex max-w-[35rem] py-5 px-[13px] mx-auto w-full justify-between items-center">
        <div className="bg-[#ffffffe6] drop-shadow-sm dark:bg-[#252529] px-4 py-2 border rounded-[14px] dark:border-[#2a2a2b] border-[#f4f4f5] ">
          <a className="mx-2 text-[14px] hover:text-[#7e7e7e] hover:dark:text-[#7e7e7e] dark:text-[#E7E7E4] text-[#2a2a2b]">Home</a>
          <a className="mx-2 text-[14px] hover:text-[#7e7e7e] hover:dark:text-[#7e7e7e] dark:text-[#E7E7E4] text-[#2a2a2b]">Contact</a>
        </div>
        <div className="flex w-full justify-between">
          <div className="bg-[#ffffffe6] ml-auto drop-shadow-sm dark:bg-[#252529] border dark:border-[#2a2a2b] border-[#f4f4f5] p-1.5 rounded-[14px] text-[#7e7e7e] dark:text-[#7e7e7e] text-2xl md:text-4xl">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            </svg>
          </div>
        </div>
      </header>
    </main>
  )
}
