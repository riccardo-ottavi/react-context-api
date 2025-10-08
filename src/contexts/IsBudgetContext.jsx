import { createContext, useContext, useEffect, useState } from "react";

const IsBudgetContext = createContext();


//creazione provider
const IsBudgetProvider = ({ children }) => {

    //budget mode
    const [budgetMode, setBudgetMode] = useState(false);
    const [budgetProducts, setBudgetProducts] = useState([]);

    const isBudget = (product) => {
        return product.price <= 30
    }


    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    return (<IsBudgetContext.Provider
        value={{
            products,
            isBudget,
            budgetProducts
        }}
    >
        {children}
    </IsBudgetContext.Provider>)
}

const useIsBudget = () => {
    const context = useContext(IsBudgetContext);
    return context
}


export { IsBudgetProvider, useIsBudget}
