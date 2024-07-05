export interface Products {
    name: string
    src: string
}

export interface ProductDetails {
    brand: string
    productName: string
    price: number
    src: string
}

export type ListOfProducts = Products[];