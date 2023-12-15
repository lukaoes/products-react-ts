import { Outlet } from "react-router-dom"
import Header from "../header"

const Layout = () => {

    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;