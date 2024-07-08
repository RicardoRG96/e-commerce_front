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

export type ProductsApiResponse = Array<{
    id: number
    name: string
    description: string
    price: number
    stock: number
    created_at: string
    category: string
    sub_category: string
}>

export type CartItemApiResponse = Array<{
    id: number
    user_id: number
    product_id: number
    quantity: number
    created_at: string
}>

export type ListOfProducts = Products[];