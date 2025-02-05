"use client";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import BookList from "./bookList";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className='flex flex-col items-center justify-between w-full min-h-screen xxs:pt-5 xxs:pl-5 xxs:pr-5 xs:pt-10 xs:pl-10 xs:pr-10 lg:pt-40 lg:pl-60 lg:pr-60 md:pt-40 md:pl-40 md:pr-40 sm:pt-20 sm:pb-10 sm:pl-20 sm:pr-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 items-start w-full'>
        <h1 className='font-[family-name:var(--font-geist-mono)] text-xl'>Online Bookshelf</h1>
        <div className='flex gap-4 items-center sm:flex-row xxs:flex-col xxs:w-full'>
          <span
            onClick={() => handleFilterChange("all")}
            className='cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'
          >
            Všechny
          </span>
          <span
            onClick={() => handleFilterChange("recommended")}
            className='cursor-pointer rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'
          >
            Doporučuju
          </span>
          <span
            onClick={() => handleFilterChange("iterative")}
            className='cursor-pointer rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'
          >
            Iterační
          </span>
        </div>
        <BookList filter={filter} />
      </main>
      <footer className='flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://x.com/HajnyMichael'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter size={16} color='gray' /> {/* Twitter Icon */}
          Twitter
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://michaelhajny.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGlobe size={16} color='gray' />
          Moje stránky
        </a>
      </footer>
    </div>
  );
}
