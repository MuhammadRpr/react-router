import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserById } from "../../../../utils/api/users";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailUser() {

    const [user, setUser] = useState({});
    const { id } = useParams();

    const fetchUserById = async (id) => {
        try {
            const response = await getUserById(id);
            setUser(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserById(id);
    }, [id]);

    return (
        <LayoutDashboard>
            <div className="mb-6">
                <div className="font-bold text-[20px] ">Detail User</div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 space-y-8">
                <div>
                    <Label className="mb-2 block">Nama Lengkap</Label>
                    <Input
                        disabled
                        className="border-orange-200 focus-visible:ring-orange-400"
                        value={user.fullname}
                    />
                </div>

                <div>
                    <Label className="mb-2 block">Username</Label>
                    <Input
                        disabled
                        className="border-orange-200 focus-visible:ring-orange-400"
                        value={user.username}
                    />
                </div>

                <div>
                    <Label className="mb-2 block">Email</Label>
                    <Input
                        disabled
                        className="border-orange-200 focus-visible:ring-orange-400"
                        value={user.email}
                    />
                </div>

                <div>
                    <Label className="mb-2 block">Nomor Telepon</Label>
                    <Input
                        disabled
                        className="border-orange-200 focus-visible:ring-orange-400"
                        value={user.phone_number}
                    />
                </div>

                <div>
                    <Label className="mb-2 block">Umur</Label>
                    <Input
                        disabled
                        className="border-orange-200 focus-visible:ring-orange-400"
                        value={user.age}
                    />
                </div>

                <div>
                    <Label className="mb-2 block">Alamat</Label>
                    <Input
                        disabled
                        className="border-orange-200 focus-visible:ring-orange-400"
                        value={user.address}
                    />
                </div>

                <div>
                    <Label className="mb-2 block">Role</Label>
                    <Input
                        disabled
                        className="border-orange-200 focus-visible:ring-orange-400"
                        value={user.role}
                    />
                </div>
            </div>
        </LayoutDashboard>
    );


}

export default DetailUser;