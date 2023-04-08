

export default function Card(){
    const repoName = "thakurajay369/BlindLadder";
    const repoDesc = "This is just a simple game developed using js only";
    const labelList = ["JavaScript", "CSS", "HTML", "React","NodeJS","ExpressJS", "MongoDB", "Flutter", "Dart"]
    return (
        <div className="card-div text-bg-dark mt-5">
            <div className="repo-name">
                {repoName}
            </div>
            <hr/>
            <div className="repo-desc">
                {repoDesc}
            </div>
            <div className="repo-label-div">
                {labelList.map((label)=> {return (<span className="repo-labels">{label}</span>)})}
            </div>
        </div>
    );
}