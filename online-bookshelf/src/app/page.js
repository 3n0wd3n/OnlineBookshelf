import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import BookList from "./bookLIst";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen sm:pt-40 sm:pb-10 sm:pl-10 sm:pr-10 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 items-start'>
        <h1 className='font-[family-name:var(--font-geist-mono)] text-xl'>Online Bookshelf</h1>
        <div className='flex gap-4 items-center flex-col sm:flex-row sm:w-[100%]'>
          <span className='cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'>
            Všechny
          </span>
          <span className='cursor-pointer rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'>
            Doporučuju
          </span>
          <span className='cursor-pointer rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'>
            Iterační
          </span>
        </div>
        <BookList />
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
          <FaGlobe size={16} color='gray' /> {/* Globe Icon */}
          Moje stránky
        </a>
      </footer>
    </div>
  );
}
