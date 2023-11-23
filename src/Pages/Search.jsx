import ProtectedPage from './ProtectedPage';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { wordsWithAvatars } from '../../lib/data';
import { Link } from 'react-router-dom';

function Search() {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Convert search term to lowercase

    if (searchTerm === '') {
      setActiveSearch([]);
      return false;
    }

    setActiveSearch(
      wordsWithAvatars
        .filter((w) => w.word.toLowerCase().includes(searchTerm)) // Convert words to lowercase for case-insensitive comparison
        .slice(0, 8)
    );
  };

  return (
    <ProtectedPage>
      <form className="w-[500px] mx-auto relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Type Here"
            className="w-full p-4 rounded-full bg-slate-800"
            onChange={(e) => handleSearch(e)}
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full">
            <AiOutlineSearch />
          </button>
        </div>

        {activeSearch.length > 0 && (
          <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
            {activeSearch.map((result) => (
              <Link
                key={result.word}
                to={`/profile/${result.word.toLowerCase()}`} // Using lowercase to ensure consistency in the URL
                className="flex items-center gap-2"
              >
                <div key={result.word} className="flex items-center gap-2">
                  <img
                    src={result.avatar}
                    alt={`${result.word} avatar`}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{result.word}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </form>
    </ProtectedPage>
  );
}

export default Search;
