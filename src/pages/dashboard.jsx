import Navbar from "../components/navbar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

function Dashboard() {
    return (
        <>
            <Navbar />
            <div>
                <Input type="email" placeholder="email" />
                <p>halo mad, ini dashboard</p>
                <Button>Submit</Button>
            </div>
        </>
    )
}

export default Dashboard;