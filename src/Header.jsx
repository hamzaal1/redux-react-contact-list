import { NavLink, Outlet } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="nav m-4">
                <NavLink className="me-2 nav-link btn btn-primary rounded-none py-1 px-5" to={"/"} >Home</NavLink>
                <NavLink className="nav-link btn btn-primary rounded-none py-1 px-5" to={"/add"} >Ajoute</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Header;