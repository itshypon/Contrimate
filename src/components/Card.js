export default function Card() {

    const repoName = "thakurajay369/BlindLadder";
    const repoDesc = "This is just a simple game developed using js only";
    const labelList = ["JavaScript", "CSS", "HTML", "React", "NodeJS", "ExpressJS", "MongoDB", "Flutter", "Dart"];


    return (<>
        <div className="card-div bg-first white">
            <div className="repo-name text-light">
            <i class="bi bi-github me-2 mb-2"></i>{repoName}
            </div>
            <div className="repo-desc gray-lighter">
                {repoDesc}
            </div>
            <div className="repo-label-div d-flex justify-content-start">
                {labelList.map((label)=> {return (<span role="button" className="repo-labels px-2 text-gradient red-orange">{label}</span>)})}
            </div>
        </div>
        {/* <div class="card text-center card-div-hover text-bg-primary">
            <div class="card-header"><i class="bi bi-github me-2 mb-2"></i>{repoName}</div>
            <div class="card-body">
                <p class="card-text">{repoDesc}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            {/* </div>
            <div className="row justify-content-start px-2 mx-2 my-3">
                {labelList.map((label)=> {return (<span className="repo-labels px-2 btn btn-light w-auto">{label}</span>)})}
                </div> */}
        {/* // </div>  */}
    </>);
}