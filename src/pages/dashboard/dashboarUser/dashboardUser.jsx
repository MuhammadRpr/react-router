import DataTable from "@/components/dataTable";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { useState, useEffect } from "react";
import { getUsers } from "../../../../utils/api/users";
import { columns } from "./columnsUser";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function DashboardUser() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const handleAddUser = () => {
        navigate('/dashboard/user/add');
    }

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <LayoutDashboard>
            <Button onClick={handleAddUser} className="mt-4 bg-black">add user</Button>
            <DataTable columns={columns} data={users} />
        </LayoutDashboard>
    );
}