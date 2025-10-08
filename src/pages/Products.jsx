import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";


export default function Products() {
    //memorizza i prodotti ricevuti dall'API
    const [products, setProducts] = useState([]);
    //memorizza la categoria scelta nel <select>
    const [selectedCategory, setSelectedCategory] = useState(null)
    //stato per memorizzare i prodotti filtrati
    const [filteredProducts, setFilteredProducts] = useState(products)
   

    //fa richiesta get e salva i dati nello stato products
    function fetchProducts() {
        const endPoint = "https://fakestoreapi.com/products"
        axios.get(endPoint)
            .then((res => setProducts(res.data))

            ).catch(error => console.log(error)
            )
    }

    //aggiorna lo stato che salva la categoria quando l'utente interagisce col <select>
    const handleSelect = (e) => {
        setSelectedCategory(e.target.value)
    }

    //effetto collaterale (montaggio e cambio dipendenda): chiama i dati (eventualmente filtrati in base alla categoria) 
    useEffect(() => {
        fetchProducts();
        if (selectedCategory) {
            setFilteredProducts(
                products.filter(product => product.category === selectedCategory)
            );
        } else {
            setFilteredProducts(products)
        }
    }, [selectedCategory, products]);

    return (
        <>  
        <div className="main-container">
            {/* Filtri (options = dati API )*/}
            <section className="category-filter">
                    <select name="Categoria" id="Categoria" onChange={handleSelect}>
                        <option value="">Tutte le categorie</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="women's clothing">Women's clothing</option>
                    </select>
                </section>
                <section className="products-container">
                    <ul>
                         {/* Scorre i prodotti filtrati e crea le card a cui passa le prop*/}
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}