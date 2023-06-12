import { useEffect, useState } from "react";
import Card from "../../components/Card";
import SearchBar from "../../components/Searchbar";
import useFetch, { fetchDataIn } from "../../services/useFetch";

function Issues() {
    const { data, loading, error, reFetchDate } = useFetch("https://api.github.com/search/issues?q=label:%22good%20first%20issue%22+language:python&sort=updated&order=desc&per_page=33")
    const [searchInput, setSearchInput] = useState("");
    const [issues, setIssues] = useState(["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"]);
    const handleSearchInput = (e) => {
        // console.log(e.target.value);
        setSearchInput(e.target.value);
    }
    if (data) {
        // console.log(data);
        // console.log(data[0]);
        // console.log(data[0]?.repository_url.split("repos/")[1]);
    }
    return (
        <>
            <SearchBar />
            {/* <button onClick={fetch} className="btn btn-light">Fetch</button> */}
            {/* <div className="form-outline w-auto border border-danger col-4 mx-3 mt-3">
                <input type="text" onChange={handleSearchInput} value={searchInput} className="form-control" placeholder="Search"></input>
            </div> */}
            <div className="row mx-auto container card-box">
                {data?.filter((data) => data.state == "open").map((data, index) =>
                    <div className="col-lg-4 col-md-6 col-12 px-2 my-2 fixwidth"><Card key={index} cardData={data} /></div>
                )}
                {loading?<div className="spinner-border text-first mt-2 mb-5" id="hello"></div>:<div className="nodata" id="hello"></div>}
            </div>
        </>
    )
}
export default Issues;