export default function Card(props) {

    const data = props.cardData;

    const repoName = data?.repository_url.split("repos/")[1];
    const repoDesc = data.body;
    const labelList = data.labels;
    const dataState = data.state;
    // const labelList = ["JavaScript", "CSS", "HTML", "React", "NodeJS", "ExpressJS", "MongoDB", "Flutter", "Dart"];


    return (<>
        <div className="card-div bg-first white">
            <div className="repo-name text-light">
            <i class="bi bi-github me-2 mb-2"></i>{repoName}
            </div>
            <hr className="text-light" />
            <div className="repo-desc gray-lighter">
                {repoDesc}
            </div>
            {/* <div className="repo-desc-2 gray-lighter mt-2">
                State: {dataState}
            </div> */}
            <div className="repo-label-div d-flex justify-content-start">
                {labelList.map((label)=> {return (<span role="button" className="repo-labels px-2 text-gradient red-orange">{label.name}</span>)})}
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