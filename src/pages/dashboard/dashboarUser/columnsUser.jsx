import { Trash2, Info, Pencil } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteUser } from "../../../../utils/api/users";
import { motion, AnimatePresence } from "framer-motion";

export const columns = [
    {
        header: "No",
        accessorFn: (originalRow, index) => index + 1,
    },
    {
        accessorKey: "fullname",
        header: "Nama Lengkap",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone_number",
        header: "Nomor Telepon",
    },
    {
        accessorKey: "age",
        header: "Umur",
    },
    {
        accessorKey: "address",
        header: "Alamat",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        header: "Aksi",
        cell: ({ row }) => {
            const id = row.original.id;

            // handler delete user

            const handleDeleteUser = async (id) => {
                try {
                    await deleteUser(id);
                    alert("Data User Berhasil Dihapus");
                    window.location.reload();
                } catch (error) {
                    alert("Gagal Menghapus Data User" + error);
                }
            };

            return (
                <div className="flex gap-3">
                    {/* Button Info */}
                    <button
                        onClick={() => console.log("Ini Button Info")}
                        className="p-2 rounded-xl transition-all duration-200 hover:scale-110"
                    >
                        <Info size={20} className="text-blue-500" />
                    </button>

                    {/* Button Edit */}
                    <button
                        onClick={() => console.log("Ini Button Edit")}
                        className="p-2 rounded-xl transition-all duration-200 hover:scale-110"
                    >
                        <Pencil size={20} className="text-yellow-500" />
                    </button>

                    {/* Button Delete */}
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="p-2 rounded-xl transition-all duration-200 hover:scale-110">
                                <Trash2 size={20} className="text-red-500" />
                            </button>
                        </AlertDialogTrigger>
                        <AnimatePresence>
                            <AlertDialogContent
                                as={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="rounded-2xl shadow-xl"
                            >
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Apakah Anda yakin ingin menghapus data ini?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Data yang sudah dihapus tidak dapat dikembalikan lagi.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="transition-all duration-200 hover:bg-gray-100">
                                        Tidak
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => handleDeleteUser(id)}
                                        className="bg-red-500 hover:bg-red-600 transition-all duration-200"
                                    >
                                        Ya
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AnimatePresence>
                    </AlertDialog>
                </div>
            );
        },
    },
];