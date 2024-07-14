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
    const { currentFilters, setCurrentFilters } = useContext(FilterProductsContext);

    const uniqueBrandProducts = products.filter((product, i, self) => {
        return i === self.findIndex((p) => p.brand === product.brand);
    });
    const uniqueSubCategoryProducts = products.filter((product, i, self) => {
        return i === self.findIndex((p) => p.sub_category === product.sub_category);
    });

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.name === 'brand') {
            setCurrentFiltersApplied({
                ...currentFiltersApplied,
                brand: [...currentFiltersApplied.brand, evt.target.value]
            })   
        } else {
            setCurrentFiltersApplied({
                ...currentFiltersApplied,
                [evt.target.name]: evt.target.value
            });
        }
    } 

    console.log(currentFiltersApplied)

    return (
        <aside className={styles.aside}>
            <div className={styles.productsDetailsContainer}>
                <span className={styles.category}>{currentFiltersApplied.category ? currentFiltersApplied.category : 'Tecnología'}</span>
                <span className={styles.brand}>Apple</span>
                <p>{`${products.length} productos encontrados`}</p>
            </div>
            <div className={styles.filtersAppliedContainer}>
                <div>
                    <span>Has seleccionado</span>
                    <button>Borrar filtros</button>
                </div>
                <div className={styles.removeFilterBtn}>
                    <span>Apple</span>
                    <button>X</button>
                </div>
            </div>
            <div className={styles.filterContainer}>
                <div className={styles.filterBox}>
                    <div className={styles.filter}>Marca</div>
                    <div>
                        <ul>
                            {uniqueBrandProducts.map(product => 
                                <li key={product.id}>
                                    <input value={product.brand} onChange={handleChange} 
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
                            {uniqueSubCategoryProducts.map(subCategory => 
                                <li key={subCategory.id}>
                                    <input value={subCategory.sub_category} onChange={handleChange} 
                                        type="checkbox" name='category' />
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
                                <input value='30.00-100.00' onChange={handleChange}
                                     type="checkbox" name='priceRange'/>
                                $30.00-$100.00 
                            </li>
                            <li>
                                <input value='100.00-200.00' onChange={handleChange}
                                     type="checkbox" name='priceRange' />
                                $100.00-$200.00 
                            </li>
                            <li>
                                <input value='200.00-300.00' onChange={handleChange}
                                     type="checkbox" name='priceRange' />
                                $200.00-$300.00 
                            </li>
                            <li>
                                <input value='300.00-400.00' onChange={handleChange}
                                     type="checkbox" name='priceRange' />
                                $300.00-$400.00 
                            </li>
                            <li>
                                <input value='400.00-600.00' onChange={handleChange}
                                     type="checkbox" name='priceRange' />
                                $400.00-$600.00 
                            </li>
                            <li>
                                <input value='600.00-800.00' onChange={handleChange}
                                     type="checkbox" name='priceRange' />
                                $600.00-$800.00 
                            </li>
                            <li>
                                <input value='800.00-1000.00' onChange={handleChange}
                                     type="checkbox" name='priceRange' />
                                $800.00-$1000.00 
                            </li>
                            <li>
                                <input value='1000.00-3000.00' onChange={handleChange}
                                     type="checkbox" name='priceRange' />
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