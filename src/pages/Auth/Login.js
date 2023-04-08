function Login() {
    return (
        <>
            <div className="">
                {/* <div className="my-auto mx-auto"> */}
                <section class="vh-100 gradient-custom">
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div class="card bg-light text-dark">
                                    <div class="card-body p-5 text-center">
                                        <div class="mb-md-5 mt-md-4 pb-5">
                                            <h2 class="fw-bold mb-2 text-uppercase">Authorize by GitHub</h2>
                                            <button className="btn btn-secondary btn-lg mt-5">
                                                <i class="bi bi-github me-3"></i>Authorize
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* </div> */}
            </div>
        </>
    )
}
export default Login;