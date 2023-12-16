import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { LeftDiv, RightDiv, SingleProdLayout } from "./singleProduct.styled";

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

const SingleProduct = () => {
    const { id } = useParams()
    const [singleProd, setSingleProd] = useState<Details>({
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
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            setSingleProd(res.data)
            setTimeout(() => {
                console.log(singleProd)
            }, 1000)
        })
    }, [])

    const [addCart, setAddCart] = useState<Boolean>(false)
    const addToCart = () => {
        return setAddCart(!addCart)
    }


    return (
        <SingleProdLayout>
            <LeftDiv>
                <NavLink relative="path" to='..'>&#x2190; Back to all products</NavLink>
                <Carousel>
                    {singleProd.images?.map((item, index) => (

                        <div key={index}>

                            <img src={item} alt={String(index)} />
                        </div>
                    ))}
                </Carousel>
            </LeftDiv>
            <RightDiv>
                <div>
                    <h1>
                        {singleProd.title}
                    </h1>
                    <h3>
                        BY <span>{singleProd.brand.toUpperCase()}</span> <br /><br />
                        CATEGORY:  <span>{singleProd.category.toUpperCase()}</span>
                    </h3>
                    <div>
                        <div>
                            <h3>
                                ${singleProd.price}
                            </h3>
                        </div>
                        <h4>
                            Save {singleProd.discountPercentage}% <br />
                            <span>Inclusive deal of the day</span>
                        </h4>
                    </div>
                    <p>
                        {singleProd.description}
                    </p>
                    <h2>
                        STOCK: {singleProd.stock ? singleProd.stock : 'Out Of Stock'}
                    </h2>
                    <h5>
                        RATING: {singleProd.rating} / 5 &#11088;
                    </h5>
                    <button onClick={() => addToCart()}>
                        Add To Cart
                    </button>
                    <div>
                        {addCart ? <p>Coming Soon...</p> : ''}
                    </div>
                </div>
            </RightDiv>


        </SingleProdLayout>
    )
}

export default SingleProduct

{/* 

<h1>
category: {singleProd.category}
</h1>





<h1>
rating: {singleProd.rating}
</h1>
<h1>
stock: {singleProd.stock}
</h1>
*/}