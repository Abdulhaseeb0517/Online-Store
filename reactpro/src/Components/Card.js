import "./Card.css";
import { Link } from 'react-router-dom';

function Card() {
    return (
        <>
            <div className="container text-center" style={{ marginTop: "100px" }}>

                <div className="row row-cols-1 row-cols-md-3 g-4" style={{ marginTop: "-50px" }}>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xfIOIghnlupi4ybfjO-HawH2hRgMOH74pQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cap</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMperUZ3KBliNupuvlTWk_XRVIFSm_c10nag&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">TShirts</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5v-xeYE3bhOFjJh45UN3qeJzG9WwHi7pvww&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Trouser</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-DXnxWztDC9pQITP8ziuTq0QeJDh35oZFg&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mobile</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJx9YHEmX-N8Bj2AiuMBF0y8ddIOVEAKD8Q&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Watch</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEe3gMZQ2h43_RiUpynAf5lykYvKGtHynqrQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Airpods</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8E7h5dIDHtV6lId0JE1uK90Ycb8QovE_eNg&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bag</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUmWtHVM21azHQSsbpnur5W3K0Gi3Y5yxbg&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Charger</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-ge_H6USigfAikZFucBijoHjIihyshZXpQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Boots</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Card;