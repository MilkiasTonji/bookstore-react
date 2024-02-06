import { useState } from "react";
import bookList from "../data.js";
import BookCard from "./BookCard";

const BookList = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(bookList());
  const [currentFilter, setCurrentFilter] = useState('all')


  const handleSearch = () => {
    var result = bookList().filter((book) => book.writer === search);
    setBooks(result);
  };
  
  const handleFilterChange = (newFilter) => {
    if(newFilter == "all"){
        setBooks(bookList())
    }else{
        const result = bookList().filter(book => book.tag.includes(newFilter));
        setBooks(result)
    }
    setCurrentFilter(newFilter)
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-5 w-50% gap-10">
        <div className="flex gap-5">
          <h1>Filters</h1>
          <select name="cars"
          onChange={(event) => handleFilterChange(event.target.value)}
          value={currentFilter}
          >
            <option value="all">All</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fictiton</option>
            <option value="science">Science</option>
            <option value="essay">Essay</option>
          </select>
        </div>
        <div className="flex gap-5">
          <input
            className="py-1 px-5 border rounded-md "
            placeholder="Enter Writer Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="py-2 px-5 border rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {books &&
          books.length > 0 &&
          books.map((book, index) => <BookCard key={index} book={book} />)}
      </div>
      {books.length === 0 && (
        <div className="flex items-center justify-center">
          <h1>Ops! No Books Found</h1>
        </div>
      )}
    </div>
  );
};

export default BookList;
