import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { CateLayout, CateSection } from "./categories.styled"
import Card from "../../card"

const Categories = () => {

    const [Cates, setCates] = useState([])
    const [cateItems, setCateItems] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories').then((res) => {
            setCates(res.data)
        })
    }, [])

    const fetchProds = (x: string) => {
        axios.get(`https://dummyjson.com/products/category/${x}`).then((res) => {
            setCateItems(res.data.products)
        })
    }

    return (
        <CateLayout>
            {Cates.map((item, index) => (
                <CateSection key={index}>
                    <NavLink to='.' onClick={() => fetchProds(`${item}`)}>{item}</NavLink>
                </CateSection>
            ))}
            <div>
                {cateItems.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </CateLayout>
    )
}

export default Categories