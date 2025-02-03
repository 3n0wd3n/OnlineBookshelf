import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-content-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 items-start'>
        <h1 className='font-[family-name:var(--font-geist-mono)] text-xl'>Online Bookshelf</h1>
        <div className='flex gap-4 items-center flex-col sm:flex-row sm:w-[100%]'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'
            href='#'
            target='_blank'
            rel='noopener noreferrer'
          >
            Všechny
          </a>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'
            href='#'
            target='_blank'
            rel='noopener noreferrer'
          >
            Doporučuju
          </a>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-8 px-4 sm:px-4 w-full sm:w-auto'
            href='#'
            target='_blank'
            rel='noopener noreferrer'
          >
            Iterační
          </a>
        </div>

        <ol className='list-inside list-decimal text-sm sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>Michael Hajný - Dítě státu</li>
        </ol>
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
