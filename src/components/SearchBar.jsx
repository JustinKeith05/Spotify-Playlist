import React from "react";

const SearchBar = () => {

    return (
        <div className="flex inline-flex justify-center space-x-8 w-screen">
            {/* Search Bar */}
            <input type="text" className="bg-white rounded-full px-4 px-2 focus:outline-none text-black placeholder-white-500" placeholder="Song Title"/>

            {/* Search Button */}
            <button className="text-black bg-white px-4 py-2 rounded-full">
                Search
            </button>
        </div>
    )
}

export default SearchBar;