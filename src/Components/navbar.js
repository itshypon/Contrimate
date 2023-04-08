import logo from "../Components/Images/logo.png"
export default function Navbar() {
    return (
    <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} className="nav-logo" />
                </a>

                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Link</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                                data-mdb-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another action</a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="navbar-nav d-flex flex-row me-1">
                        <li class="nav-item me-3 me-lg-0">
                            <div class="dropdown">
                                <a class="link-white me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-mdb-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-bell text-white"></i>
                                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href="#">Some news</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Another news</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}