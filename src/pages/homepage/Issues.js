import { useState } from "react";
import Card from "../../components/Card";
import SearchBar from "../../components/Searchbar";

function Issues() {
    const [searchInput, setSearchInput] = useState("");
    const [issues, setIssues] = useState(["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"]);
    const handleSearchInput = (e) => {
        // console.log(e.target.value);
        setSearchInput(e.target.value);
    }
    return (
        <>
        <SearchBar />
            {/* <div className="form-outline w-auto border border-danger col-4 mx-3 mt-3">
                <input type="text" onChange={handleSearchInput} value={searchInput} className="form-control" placeholder="Search"></input>
            </div> */}
            <div className="row mx-2">
                {issues.map((data, index) =>
                    <div className="col-lg-3 col-md-6 col-12 px-2 my-2 fixwidth"><Card key={index} /></div>
                )}
            </div>
        </>
    )
}
export default Issues;