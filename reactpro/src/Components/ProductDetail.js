import { Link } from "react-router-dom";



function ProductDetail() {
    return (
        <>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8 Cardone">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart </h5>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        {/* <!-- Image --> */}
                                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_CsUZ7xQeohBx0rvOp8WG3hGLh1zwF_oBw&s"
                                                className="w-100" alt="Black Jeans Jacket" />
                                            <a href="#!">
                                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                            </a>
                                        </div>
                                        {/* <!-- Image --> */}
                                    </div>

                                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        {/* <!-- Data --> */}
                                        <p><strong>Black Hoodie</strong></p>
                                        
                                        <p><strong>Color</strong>: Black</p>
                                        <p><strong>Size</strong>: M</p>
                                        <p><strong>Category</strong>: Half, three quarter and full-length sleeve types</p>



                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        {/* <!-- Quantity --> */}
                                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>


                                            <div data-mdb-input-init className="form-outline">

                                            </div>


                                        </div>

                                        <p className="text-start text-md-center">
                                            <strong>$5.00</strong>
                                            <hr />
                                            <Link to="/more" className="btn btn-primary">Collect Now</Link>
                                        </p>
                                        {/* <!-- Price --> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    {/* <!-- Single item --> */}
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* <!-- Image --> */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMperUZ3KBliNupuvlTWk_XRVIFSm_c10nag&s"
                                                    className="w-100" alt="Black Jeans Jacket" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                </a>
                                            </div>
                                            {/* <!-- Image --> */}
                                        </div>

                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* <!-- Data --> */}
                                            <p><strong>Blue Hoodie</strong></p>
                                            <p><strong>Color</strong>: blue</p>
                                            <p><strong>Size</strong>: M</p>
                                            <p><strong>Category</strong>: Half, three quarter and full-length sleeve types</p>



                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* <!-- Quantity --> */}
                                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>


                                                <div data-mdb-input-init className="form-outline">

                                                </div>


                                            </div>

                                            <p className="text-start text-md-center">
                                                <strong>$5.00</strong>
                                                <hr />
                                                <Link to="/more" className="btn btn-primary">Collect Now</Link>
                                            </p>
                                            {/* <!-- Price --> */}
                                        </div>
                                    </div>
                                    {/* <!-- Single item --> */}

                                    <hr className="my-4" />

                                    {/* <!-- Single item --> */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* <!-- Image --> */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LzzLvY5MA8medBObobw5eikaOM7EswJPTg&s"
                                                    className="w-100" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                </a>
                                            </div>
                                            {/* <!-- Image --> */}
                                        </div>

                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* <!-- Data --> */}
                                            <p><strong>Red Hoodie</strong></p>
                                            <p><strong>Color</strong>: red</p>
                                            <p><strong>Size</strong>: M</p>
                                            <p><strong>Category</strong>: Half, three quarter and full-length sleeve types</p>




                                            {/* <!-- Data --> */}
                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* <!-- Quantity --> */}
                                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>





                                            </div>

                                            <p className="text-start text-md-center">
                                                <strong>$5.00</strong>
                                                <hr />
                                                <Link to="/more" className="btn btn-primary">Collect Now</Link>
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>



                    </div>
                </div>
            </section>
        </>
    );
}
export default ProductDetail;