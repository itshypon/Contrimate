import { useState } from "react";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = (e) => {
        setSearchInput(() => e.target.value);
    }

    const popularSearch = ["JavaScript", "CSS", "HTML", "React", "NodeJS", "ExpressJS", "MongoDB", "Flutter", "Dart"];

    return (
        <div className="search-bar d-flex my-3 ms-3">
            <div className="search-div">
                <input name="search" className="border-dark text-dark input" onChange={handleSearchInput} value={searchInput} />
                <span className="my-auto ms-2"><i class="bi bi-search text-dark"></i></span>
            </div>
            <div className="popular-search-div ms-3">
                {popularSearch.map((search) => { return (<span className="popular-search-label text-dark mx-1" role="button" onClick={() => setSearchInput(() => search)}>{search}</span>) })}
            </div>
        </div>
    );
}