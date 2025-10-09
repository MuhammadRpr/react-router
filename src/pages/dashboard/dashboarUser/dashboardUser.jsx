import DataTable from "@/components/dataTable";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { useState, useEffect } from "react";
import { getUsers } from "../../../../utils/api/users";
import { columns } from "./columnsUser";

export default function DashboardUser() {

    const [users, setUsers] = useState([]);

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
            <DataTable columns={columns} data={users} />
        </LayoutDashboard>
    );
}