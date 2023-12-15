import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";
import Iphone from '../../../assets/images/Iphone.png'
import Laptop from '../../../assets/images/Laptop.jpg'
import perfume from '../../../assets/images/perfume.jpg'
import { DivForMain, Featured } from "./main.styled";
import Card from "../../card";
import { useEffect, useState } from "react";

interface Product {
    thumbnail: string;
    brand: string;
    description: string;
    price: number;
    id: number
}

const Main = () => {

    const [featuredProds, setFeaturedProds] = useState<Product[]>([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/smartphones').then((res) => {
            setFeaturedProds(res.data.products)
        })
    }, [])
    return (
        <DivForMain>
            <h1>BEST OFFERS!</h1>
            <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs >
                <div>
                    <img src={Iphone} alt="iphone" />
                    <h2>Buy iPhone for low price!</h2>
                    <a href="/">More Info</a>
                </div>
                <div>
                    <img src={Laptop} alt="laptop" />
                    <h2>Lowest prices on laptops!</h2>
                    <a href="/">More Info</a>
                </div>
                <div>
                    <img src={perfume} alt="perfume" />
                    <h2>Get authentic perfume from us!</h2>
                    <a href="/">More Info</a>
                </div>
            </Carousel>

            <div>
                <h1>
                    FEATURED PRODUCTS!
                </h1>
                <Featured>
                    {featuredProds.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </Featured>
            </div>
        </DivForMain>
    )
}

export default Main