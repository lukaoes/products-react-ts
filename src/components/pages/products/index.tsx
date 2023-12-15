import { useEffect, useState } from "react"
import { ProductsLayout } from "./products.styled"
import axios from "axios"
import Card from "../../card";
const URL = 'https://dummyjson.com/products'

interface Product {
    thumbnail: string;
    brand: string;
    description: string;
    price: number;
    id: number
}


const Products = () => {

    const [featuredProds, setFeaturedProds] = useState<Product[]>([])

    useEffect(() => {
        axios.get(URL).then((res) => {
            setFeaturedProds(res.data.products)
            console.log(res)
        })
    }, [])



    return (
        <ProductsLayout>
            <h1>
                All Products:
            </h1>
            {featuredProds.length === 0 ? <h2>Loading...</h2> :
                (<div>
                    {featuredProds.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>)
            }
        </ProductsLayout>
    )
}

export default Products