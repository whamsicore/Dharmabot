"use client";

import {
  CopilotKit,
} from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useState } from "react";
import { Presentation } from "../components/Presentation";
import ArrowIcon from "../components/svgs/arrow_icon";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gradient-to-b from-cyan-500 to-cyan-600 via-transparent text-sm sm:py-0">
        
        <nav
          className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 "
          aria-label="Global">
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl text-gray-200 font-semibold dark:text-white py-8"
              href="#"
              aria-label="Brand">
              Dharmaverse AI
            </a>
          </div>
        </nav>
      </header>
      {/* <!-- Hero --> */}
      <div className="bg-slate-100 h-screen">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* <!-- Title --> */}
            <div className="max-w-3xl text-center mx-auto pt-10">
              <h1 className="block font-medium text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Say hello to the Dharmabot.
              </h1>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Buttons --> */}
            <div className="text-center mt-10">
              <Link
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-cyan-300 to-cyan-800 shadow-lg shadow-transparent hover:shadow-cyan-800/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="/presentation">
                Get started
                <ArrowIcon />
              </Link>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
}
