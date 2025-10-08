import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(error => console.error(error))
    }, [id])

    return (
        <div>
            
            {product ? (
                <div>
                    <Link to={`/products/`}>
                        <button>Torna alla lista</button>
                    </Link>

                    <div className="product-card">
                        <div className="card-img">
                            <img src={product.image}></img>
                        </div>
                        <div className="card-text">
                            <h3 className="big-text">{product.title}</h3>
                            <span className="price-label">{product.price?.toFixed(2)}€</span>
                            <span>{product.category?.toUpperCase()}</span>
                            <div className="rating">{product.rating?.rate} <img src="../public/img/star-solid-full.svg"></img> ({product.rating?.count})</div>
                            <span><strong>DESCRIPTION : </strong>{product.description}</span>
                        </div>
                    </div>
                </div>
            )
                :
                (<p>Loading</p>)
            }
        </div>)

}
