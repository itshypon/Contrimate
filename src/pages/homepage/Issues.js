import { useEffect, useState } from "react";
import Card from "../../components/Card";
import SearchBar from "../../components/Searchbar";
import { fetchDataIn } from "../../services/useFetch";

function Issues() {
    const [searchInput, setSearchInput] = useState("");
    const [issues, setIssues] = useState(["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"]);
    const handleSearchInput = (e) => {
        // console.log(e.target.value);
        setSearchInput(e.target.value);
    }
    // useEffect(()=> {
    //     fetchDataIn("https://api.github.com/search/issues?q=label:%22good%20first%20issue%22+language:python&sort=updated&order=desc&per_page=100").then((res)=> {
    //         console.log(res);
    //     })
    // })
    const fetch = (e) => {
        fetchDataIn("https://api.github.com/search/issues?q=label:%22good%20first%20issue%22+language:python&sort=updated&order=desc&per_page=100").then(()=>{
            console.log("hello");
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <>
        <SearchBar />
        {/* <button onClick={fetch} className="btn btn-light">Fetch</button> */}
            {/* <div className="form-outline w-auto border border-danger col-4 mx-3 mt-3">
                <input type="text" onChange={handleSearchInput} value={searchInput} className="form-control" placeholder="Search"></input>
            </div> */}
            <div className="row mx-auto container card-box">
                {issues.map((data, index) =>
                    <div className="col-lg-4 col-md-6 col-12 px-2 my-2 fixwidth"><Card key={index} /></div>
                )}
            </div>
        </>
    )
}
export default Issues;