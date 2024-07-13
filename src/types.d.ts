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

export type UserDataApiResponse = Array<{
    id: number
    name: string
    email: string
    password: string
    created_at:string
}>

export type OrdersHistoryApiResponse = Array<{
    order_id: number
    user_id: number
    total: number
    order_status: string
    order_date: string
    order_delivery_date: string
    delivery_date: string | null
    product_id: number
    product_image_src: string
}>

export type OrderDetailsApiResponse = Array<{
    user_id: number
    order_id: number
    product_id: number
    product_name: string
    product_price: number
    product_description: string
    quantity: number
    order_status: string
    order_delivery_date: string
    order_date: string
    product_image_src: string
}>

export type CategoriesApiResponse = Array<{
    id: number
    category: string
    category_image_src: string
}>

type UserInfoContext = {
    token: string
    setToken: React.Dispatch<React.SetStateAction<string>>
    userId: string
    setUserId: React.Dispatch<React.SetStateAction<string>>
    userName: string
    setUserName: React.Dispatch<React.SetStateAction<string>>
}