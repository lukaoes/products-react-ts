import { FC } from "react";
import { CardLayout } from "./card.styled";
import { NavLink, useParams } from "react-router-dom";

interface CardProps {
    item: {
        thumbnail: string;
        brand: string;
        description: string;
        price: number;
        id: number
    };
}

const Card: FC<CardProps> = ({ item }) => {
    const { id } = useParams()
    console.log(id)
    return (
        <CardLayout>
            <img src={item.thumbnail} alt='a' />
            <div>
                <h2>
                    {item.brand}
                </h2>
                <p>
                    {item.description}
                </p>
                <h3>Price: ${item.price}</h3>

                <NavLink to='products/:id' >More Details</NavLink>
            </div>
        </CardLayout >
    )
}

export default Card;