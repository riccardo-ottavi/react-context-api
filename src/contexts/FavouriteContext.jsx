import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext();


//creazione provider
const FavouriteProvider = ({children}) => {

    //budget mode
    const [budgetMode, setBudgetMode] = useState(false);

    const isBudget = (product) => {
        return product.price <= 30
    }

    




}




export default FavouriteContext