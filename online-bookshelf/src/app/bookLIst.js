import booksData from "./books.json";
import { FaExternalLinkAlt } from "react-icons/fa";

const BookList = ({ filter }) => {
  // Filter books based on the selected filter
  const filteredBooks = booksData.books.filter((book) => {
    if (filter === "recommended") {
      return book.recommended === true;
    } else if (filter === "iterative") {
      return book.iterative === true;
    }
    return true;
  });

  return (
    <ol className='list-inside list-decimal text-sm sm:text-left sm:pb-8 font-[family-name:var(--font-geist-mono)]'>
      {filteredBooks.map((book, index) => (
        <li key={index} className='mb-2 flex items-center'>
          <a
            href={book.link || undefined} // Pokud není link, použije se placeholder "#"
            target='_blank'
            rel='noopener noreferrer'
            className={`flex flex-row gap-2 items-center ${book.link ? "hover:underline cursor-pointer" : ""}`}
          >
            <span className='font-bold'>
              {index + 1}. {book.author}
            </span>{" "}
            - {book.name}
            {book.link && <FaExternalLinkAlt />}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default BookList;
