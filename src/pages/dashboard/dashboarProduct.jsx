import DataTable from "@/components/dataTable";
import { data } from "@/utils/dataUser/dataUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { columns } from "./dashboarUser/columnsUser";

export default function DashboardProduct() {

    return (
        <LayoutDashboard>
            <DataTable columns={columns} data={data} />
        </LayoutDashboard>
    );
}