import React, { useState } from "react";

const SearchBar = ({ foodItems, onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        const filteredItems = foodItems.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        onSearch(filteredItems);
    };

    return (
        <div className="mt-4 mx-auto flex items-center bg-gray-200 border border-gray-300 rounded-full px-4 py-3 w-auto transition-all duration-300 gap-2">
            <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"></path>
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" fill="none"></circle>
            </svg>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Поиск"
                className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400"
            />
        </div>
    );
};

export default SearchBar;
