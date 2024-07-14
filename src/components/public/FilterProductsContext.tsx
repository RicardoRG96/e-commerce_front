import  { useState, createContext } from "react";
import { type FiltersState } from "../../types";

export const FilterProductsContext = createContext<any>(null);

interface Props {
    children: React.ReactNode
}

export const FilterProductsProvider: React.FC<Props> = ({ children }) => {
    const [currentFilters, setCurrentFilters] = useState<FiltersState>({
        brand: [],
        category: '',
        priceRange: ''
    });

    return (
        <FilterProductsContext.Provider value={{ currentFilters, setCurrentFilters }}>
            {children}
        </FilterProductsContext.Provider>
    )
}