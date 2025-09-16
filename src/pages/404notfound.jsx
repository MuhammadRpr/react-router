import Navbar from "../components/navbar";

function NotFound() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen text-3xl"  >
                <p>404 NOT FOUND</p>
            </div>
        </>
    )
}

export default NotFound;