import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type ProductsApiResponse, FiltersState } from '../../types';
import styles from '../../styles/public/FiltersTable.module.css';
import { FilterProductsContext } from './FilterProductsContext';

interface Props {
    products: ProductsApiResponse
}

const FiltersTable: React.FC<Props> = ({ products }) => {
    const [currentFiltersApplied, setCurrentFiltersApplied] = useState<FiltersState>({
        brand: [],
        category: '',
        priceRange: ''
    });
    const navigate = useNavigate();
    const { setCurrentFilters } = useContext(FilterProductsContext);
    const categoriesDictionary = {
        'technology': 'Tecnología',
        'sports': 'Deportes',
        'clothes': ' Ropa',
        'home appliances': 'Electrodomésticos'
    }
    const currentCategory = categoriesDictionary[products[0].category as keyof typeof categoriesDictionary];

    const uniqueBrandProducts = products.filter((product, i, self) => {
        return i === self.findIndex((p) => p.brand === product.brand);
    });
    const uniqueSubCategoryProducts = products.filter((product, i, self) => {
        return i === self.findIndex((p) => p.sub_category === product.sub_category);
    });
    const [categoryInputChecked, setCategoryInputChecked] = useState(Array(uniqueSubCategoryProducts.length).fill(false));
    const [priceRangeInputChecked, setPriceRangeInputChecked] = useState(Array(8).fill(false));

    const handleBrandsInputsChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (currentFiltersApplied.brand.includes(evt.target.value)) {
            setCurrentFiltersApplied({
                ...currentFiltersApplied,
                brand: currentFiltersApplied.brand.filter(brand => brand !== evt.target.value.toString())
            })
        } else {
            setCurrentFiltersApplied({
                ...currentFiltersApplied,
                brand: currentFiltersApplied.brand.includes(evt.target.value) ? [...currentFiltersApplied.brand] :[...currentFiltersApplied.brand, evt.target.value]
            })
        }
    } 

    const handleCategoryInputsChange = (evt: React.ChangeEvent<HTMLInputElement>, position: number) => {
        let nextState: Array<boolean> = [];
        categoryInputChecked.forEach((category, i) => {
            if (i === position && category === true){
                nextState.push(false)
            } else if (i === position && category === false) {
                nextState.push(true);
            }
            else {
                nextState.push(false);
            } 
        })
        setCategoryInputChecked(nextState);
        setCurrentFiltersApplied({
            ...currentFiltersApplied,
            category: currentFiltersApplied.category === evt.target.value ? '' : evt.target.value
        });
    }

    const handlePriceRangeInputsChange = (evt: React.ChangeEvent<HTMLInputElement>, position: number) => {
        let nextState: Array<boolean> = [];
        priceRangeInputChecked.forEach((price, i) => {
            if (i === position && price === true){
                nextState.push(false)
            } else if (i === position && price === false) {
                nextState.push(true);
            }
            else {
                nextState.push(false);
            } 
        })
        setPriceRangeInputChecked(nextState);
        setCurrentFiltersApplied({
            ...currentFiltersApplied,
            priceRange: currentFiltersApplied.priceRange === evt.target.value ? '' : evt.target.value
        });
    }

    console.log(currentFiltersApplied)

    return (
        <aside className={styles.aside}>
            <div className={styles.productsDetailsContainer}>
                <span className={styles.category}>{currentCategory}</span>
                <p>{`${products.length} productos encontrados`}</p>
            </div>
            <div className={styles.filterContainer}>
                <div className={styles.filterBox}>
                    <div className={styles.filter}>Marca</div>
                    <div>
                        <ul>
                            {uniqueBrandProducts.map(product => 
                                <li key={product.id}>
                                    <input value={product.brand} onChange={handleBrandsInputsChange} 
                                        type="checkbox" name='brand' />
                                        {product.brand}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles.filterBox}>
                    <div className={styles.filter}>Categoría</div>
                    <div>
                        <ul>
                            {uniqueSubCategoryProducts.map((subCategory, i) => 
                                <li key={subCategory.id}>
                                    <input value={subCategory.sub_category} onChange={(evt) => {
                                        handleCategoryInputsChange(evt, i)
                                    }} 
                                        type="checkbox" name={i.toString()} checked={categoryInputChecked[i]} />
                                        {subCategory.sub_category}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles.filterBox}>
                    <div className={styles.filter}>Precio</div>
                    <div>
                        <ul>
                            <li>
                                <input value='30.00-100.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 0)
                                }}
                                     type="checkbox" name='0' checked={priceRangeInputChecked[0]} />
                                $30.00-$100.00 
                            </li>
                            <li>
                                <input value='100.00-200.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 1)
                                }}
                                     type="checkbox" name='1' checked={priceRangeInputChecked[1]} />
                                $100.00-$200.00 
                            </li>
                            <li>
                                <input value='200.00-300.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 2)
                                }}
                                     type="checkbox" name='2' checked={priceRangeInputChecked[2]} />
                                $200.00-$300.00 
                            </li>
                            <li>
                                <input value='300.00-400.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 3)
                                }}
                                     type="checkbox" name='3' checked={priceRangeInputChecked[3]} />
                                $300.00-$400.00 
                            </li>
                            <li>
                                <input value='400.00-600.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 4)
                                }}
                                     type="checkbox" name='4' checked={priceRangeInputChecked[4]} />
                                $400.00-$600.00 
                            </li>
                            <li>
                                <input value='600.00-800.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 5)
                                }}
                                     type="checkbox" name='5' checked={priceRangeInputChecked[5]} />
                                $600.00-$800.00 
                            </li>
                            <li>
                                <input value='800.00-1000.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 6)
                                }}
                                     type="checkbox" name='6' checked={priceRangeInputChecked[6]} />
                                $800.00-$1000.00 
                            </li>
                            <li>
                                <input value='1000.00-3000.00' onChange={(evt) => {
                                    handlePriceRangeInputsChange(evt, 7)
                                }}
                                     type="checkbox" name='7' checked={priceRangeInputChecked[7]} />
                                $1000.00-$3000.00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.applyFiltersContainer}>
                    <button onClick={() => {
                        setCurrentFilters(currentFiltersApplied);
                        navigate('/products/filters');
                    }}>
                        Aplicar filtros
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default FiltersTable;