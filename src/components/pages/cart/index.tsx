import { CartLayout } from "./cart.styled"
import { useState } from "react";


const Cart = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(
        Boolean(localStorage.getItem('loggedIn'))
    );

    const cartLogged = () => {
        if (loggedIn) {
            return <div>here your products</div>
        } else {
            return <div>you need to log in</div>
        }
    }


    return (
        <CartLayout>
            {cartLogged()}
        </CartLayout>
    )
}

export default Cart