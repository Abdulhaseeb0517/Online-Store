import "./Card.css";
import { Link } from 'react-router-dom';

const product = [{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xfIOIghnlupi4ybfjO-HawH2hRgMOH74pQ&s",
    name: "cap",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",

},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMperUZ3KBliNupuvlTWk_XRVIFSm_c10nag&s",
    name: "T shart",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
    size: "M",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5v-xeYE3bhOFjJh45UN3qeJzG9WwHi7pvww&s",
    name: "Trouser",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
    size: "M",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-DXnxWztDC9pQITP8ziuTq0QeJDh35oZFg&s",
    name: "Mobile",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
    Storage: "256 GB",
    Color: "Green",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJx9YHEmX-N8Bj2AiuMBF0y8ddIOVEAKD8Q&s",
    name: "Watch",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
    Weight: "60g",
    Look: "Casual"
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEe3gMZQ2h43_RiUpynAf5lykYvKGtHynqrQ&s",
    name: "Airpods",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8E7h5dIDHtV6lId0JE1uK90Ycb8QovE_eNg&s",
    name: "Bag",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUmWtHVM21azHQSsbpnur5W3K0Gi3Y5yxbg&s",
    name: "Charger",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-ge_H6USigfAikZFucBijoHjIihyshZXpQ&s",
    name: "Boot",
    cathegory: "Some quick example text to build on the card title and make up the bulk of the card",
    size: "L",
}
]




function Card() {
    return (
        <>
            <div className="container text-center" style={{ marginTop: "100px" }}>




                <div className="row row-cols-1 row-cols-md-3 g-4" style={{ marginTop: "-50px" }}>
                    {product.map((porduct) => (
                        <div className="col">

                            <div className="card h-100">
                                <img src={porduct.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{porduct.name}</h5>
                                    <p className="card-text">{porduct.cathegory}</p>
                                    <Link to="/productDetail" className="btn btn-primary">Read more</Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>


        </>
    );
}

export default Card;