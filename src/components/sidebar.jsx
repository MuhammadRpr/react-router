import { useState } from "react";
import { X, Menu, User, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside
            className={`${isOpen ? "w-64" : "w-20"} bg-orange-600 text-white h-screen p-5 pt-8 relative duration-300`}
        >
            <nav>
                {/* Dashboard + Toggle Button */}
                <div
                    className="flex items-center justify-between p-2 hover:bg-orange-700 rounded-md mt-2 transition-all duration-300 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center gap-x-4">
                        <Menu className={`${isOpen ? "hidden" : "block"}`} />
                        {isOpen && <h2 className="text-lg font-medium">Dashboard</h2>}
                    </div>
                    {isOpen && <X />}
                </div>

                {/* Menu Items */}
                <Link
                    to="/dashboard/user"
                    className="flex items-center gap-x-4 p-2 hover:bg-orange-700 rounded-md mt-2 transition-all duration-300"
                >
                    <User />
                    {isOpen && <span>Users</span>}
                </Link>

                <Link
                    to="/dashboard/product"
                    className="flex items-center gap-x-4 p-2 hover:bg-orange-700 rounded-md mt-2 transition-all duration-300"
                >
                    <Package />
                    {isOpen && <span>Product</span>}
                </Link>
            </nav>
        </aside>
    );
}
