import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Navbar() {
    const Navigate = useNavigate();

    return (
        <>
            <nav className="flex justify-around  items-center bg-gray-200">
                <div className="flex items-start justify-start">
                    <h1 className="text-2xl font-bold">Navbar</h1>
                </div>
                <ul className=" flex justify-center items-center list-none">
                    <li className="mx-10">
                        {/* <Link to="/">Login</Link> */}
                        <button onClick={() => Navigate("/")}>Login</button>

                    </li>
                    <li className="mx-10">
                        {/* <Link to="/register">register</Link> */}
                        <button onClick={() => Navigate("/register")}>register</button>
                    </li>
                    <li className="mx-10">
                        {/* <Link to="/dashboard">dashboard</Link> */}
                        <button onClick={() => Navigate("/dashboard")}>dashboard</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;