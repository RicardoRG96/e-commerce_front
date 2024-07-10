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
    image_src: string
    brand: string
}>

export type CartProductsApiResponse = Array<{
    cart_id: number
    product_description: string
    product_id: number
    product_image_src: string
    product_name: string
    product_price: number
    quantity: number
    user_id: number
    user_name: string
}>

export interface RegisterFormType {
    name: string
    email: string
    password: string
} 

export type ListOfProducts = Products[];