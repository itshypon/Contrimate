import React, { useState } from "react";
import logo from "../components/Images/logo.png"
function Navbar() {
    const authorize = (e) => {
        e.preventDefault();
        alert("Authorization - Comming Soon")
    }
    const [user, setUser] = useState(null);
    return (
        <div className="Navbar fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <a className="navbar-brand my-auto" href="#">
                            <img
                                src={logo}
                                height="15"
                                alt="MDB Logo"
                                loading="lazy"
                                className="my-auto"
                            />
                        </a>

                        <ul className="navbar-nav me-auto my-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>

                    </div>



                    <div className="d-flex align-items-center">

                        <div className="dropdown">
                        {user ?
                                
                            <a
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle nav-cirrcle"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </a> :
                                <button className="btn btn-secondary btn-lg bg-first text-light" onClick={authorize}>
                                    <i class="bi bi-github me-3"></i>Authorize
                                </button>
                            }
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </nav>

        </div>

    )
}
export default Navbar