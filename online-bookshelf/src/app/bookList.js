import booksData from "./newBooks.json";
import { FaExternalLinkAlt } from "react-icons/fa";

const BookList = ({ filter }) => {
  // Filter books based on the selected filter
  const filteredBooks = booksData.books.filter((book) => {
    if (filter === "all") {
      return (book.yetToBeRead === false) & (book.currRead === false);
    } else if (filter === "recommended") {
      return book.recommended === true;
    } else if (filter === "iterative") {
      return book.iterative === true;
    } else if (filter === "currRead") {
      return book.currRead === true;
    } else if (filter === "ytbr") {
      return book.yetToBeRead === true;
    } else {
      return true;
    }
  });
  console.log(filteredBooks.length);

  return (
    <ol className='list-inside list-decimal text-sm sm:text-left pb-8 font-[family-name:var(--font-geist-mono)]'>
      {filteredBooks.length === 0
        ? "Aktuálně nic nečtu"
        : filteredBooks
            .filter((book) => (filter === "currRead" ? book.currRead === true : book.currRead == false))
            .map((book, index) => (
              <li key={index} className='mb-2 flex items-center'>
                <a
                  href={book.link || undefined}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`inline-flex flex-col items-start md:flex-row gap-2 md:items-center ${
                    book.link ? "hover:underline cursor-pointer" : ""
                  }`}
                >
                  <span className='font-bold'>
                    {index + 1}. {book.author}:
                  </span>{" "}
                  <span className='flex flex-row gap-2'>
                    {book.name}
                    {book.link && <FaExternalLinkAlt />}
                  </span>
                </a>
              </li>
            ))}
    </ol>
  );
};

export default BookList;
