import React from "react";
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="">
            <footer className="bg-first text-center text-white">

                <div className="container p-4">
                    <section className="mb-4">

                        <a className="btn btn-primary btn-floating m-1" style={{ "backgroundColor": "#3b5998" }} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>


                        <a className="btn btn-primary btn-floating m-1" style={{ "backgroundColor": "#55acee" }} href="#!" role="button"><i className="fab fa-twitter"></i></a>


                        <a className="btn btn-primary btn-floating m-1" style={{ "backgroundColor": "#dd4b39" }} href="#!" role="button"><i className="fab fa-google"></i></a>


                        <a className="btn btn-primary btn-floating m-1" style={{ "backgroundColor": "#ac2bac" }} href="#!" role="button"><i className="fab fa-instagram"></i></a>


                        <a className="btn btn-primary btn-floating m-1" style={{ "backgroundColor": "#0082ca" }} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

                        <a className="btn btn-primary btn-floating m-1" style={{ "backgroundColor": "#333333" }} href="#!" role="button"><i className="fab fa-github"></i></a>
                    </section>

                    {/* <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 mb-3">
                                    <div className="">
                                        <input type="email" id="form5Example2" className="form-control" placeholder="Email address" />
                                    </div>
                                </div>

                                <div className="col-auto">

                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section> */}
                </div>

                <div className="text-center p-3" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                    © {currentYear} Copyright:
                    <a className="text-white" href="/">ContriMate</a>
                </div>


            </footer>


        </div>
    )
}
export default Footer