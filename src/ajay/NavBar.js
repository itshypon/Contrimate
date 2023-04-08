import logo from "../ajay/images/logo.png"
export default function Navbar() {
    return (
    <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand ms-lg-4 ms-2" href="/">
                    <img src={logo} className="nav-logo" />
                </a>

                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white mx-lg-2 fs-5" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white mx-lg-2 fs-5" href="/about" role="button">About us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}