import axios from "axios"
import { CartLayout } from "./cart.styled"
import { prodsArray } from "../../singleProduct"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../../redux/slice"
console.log(prodsArray)

interface Details {
    title: string;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images?: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
}

const Cart = () => {
    const [cartProds, setCartProds] = useState<Details>({
        brand: "",
        category: "",
        description: "",
        discountPercentage: 0,
        id: 0,
        images: [],
        price: 0,
        rating: 0,
        stock: 0,
        thumbnail: "",
        title: "",
    })

    const isLoggedIn = useSelector(selectUser)

    prodsArray.map((item) => {
        useEffect(() => {
            axios.get(`https://dummyjson.com/products/${item}`).then((res) => {
                setCartProds(res.data)
                console.log(cartProds)
            })
        }, [])
    })




    return (
        <CartLayout>
            {isLoggedIn ? (<button>Check Out</button>) : 'Please log in if you want to Check Out.'}
        </CartLayout>
    )
}

export default Cart