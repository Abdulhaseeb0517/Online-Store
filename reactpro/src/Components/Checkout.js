import "./Checkout.css";

function Checkout() {
    return (
        <>
            <div className="   align-items-center justify-content-center" >

                <div className="card  bg-primary text-white rounded-3 ">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1 className="mb-0">Card details</h1>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                className="img-fluid rounded-3" style={{ width: "45px;" }} />
                        </div>

                        <p className="small mb-2"></p>
                        <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-visa fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-amex fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                        <form className="mt-4">
                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                    placeholder="Cardholder's Name" />
                                <label className="form-label" for="typeName">Cardholder's Name</label>
                            </div>

                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                    placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                <label className="form-label" for="typeText">Card Number</label>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div data-mdb-input-init className="form-outline form-white">
                                        <input type="text" id="typeExp" className="form-control form-control-lg"
                                            placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                        <label className="form-label" for="typeExp">Expiration</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div data-mdb-input-init className="form-outline form-white">
                                        <input type="password" id="typeText" className="form-control form-control-lg"
                                            placeholder="&#9679;&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                        <label className="form-label" for="typeText">Cvv</label>
                                    </div>
                                </div>
                            </div>

                        </form>
                        <p><strong>We accept</strong></p>
                        <img className="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                            alt="Visa" />
                        <img className="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                            alt="American Express" />
                        <img className="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                            alt="Mastercard" />
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$5.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$5.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$5.00</p>
                        </div>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between">
                                <span>$5.00</span>
                                <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                        </button>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Checkout;