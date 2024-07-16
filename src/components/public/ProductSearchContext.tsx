import  { useState, createContext } from "react";

export const SearchProductContext = createContext<any>(null);

interface Props {
    children: React.ReactNode
}

export const SearchedProductProvider: React.FC<Props> = ({ children }) => {
    const [currentSearchedProduct, setCurrentSearchedProduct] = useState('');

    return (
        <SearchProductContext.Provider value={{ currentSearchedProduct, setCurrentSearchedProduct }}>
            {children}
        </SearchProductContext.Provider>
    )
}