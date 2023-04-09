import cat from "./Images/cat-sneaking.gif"

export default function Header(){
    return (
        <header className="bg-first w-100 header-class">
            <div className="slogan-div text-gradient red-orange">
                Let's commit it!
            </div>
            <div className="cat-div">
                <img src={cat}/>
            </div>
        </header>
    );
}