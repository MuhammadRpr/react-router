"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { FormControl } from "@/components/ui/form";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import Swal from "sweetalert2";
import { addUser } from "../../../../utils/api/users";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const addUserSchema = z.object({
    fullname: z
        .string()
        .min(8, { message: "Nama Lengkap harus minimal 8 karakter" }),
    username: z.string().min(5, { message: "Username harus minimal 5 karakter" }),
    password: z.string().min(5, { message: "Password harus minimal 5 karakter" }),
    email: z.string().email({ message: "Format email tidak valid" }),
    phone_number: z
        .string()
        .regex(/^[0-9]+$/, "Nomor telepon harus berupa angka"),
    age: z
        .string()
        .regex(/^[0-9]+$/, "Umur harus berupa angka")
        .transform((val) => Number(val))
        .refine((val) => val >= 18 && val <= 60, {
            message: "Umur harus antara 18 - 60 tahun",
        }),
    address: z.string().min(10, { message: "Alamat harus minimal 10 karakter" }),
    role: z.enum(["user", "admin"], { message: "Role tidak valid" }),
});

function AddUser() {
    const form = useForm({
        resolver: zodResolver(addUserSchema),
        defaultValues: {
            fullname: "",
            username: "",
            password: "",
            email: "",
            phone_number: "",
            age: "",
            address: "",
            role: "user",
        },
    });

    const onSubmitUser = async (data) => {
        try {
            await addUser(data);
            Swal.fire({
                title: "Sukses",
                text: "User berhasil ditambahkan",
                icon: "success",
            });
            form.reset();
        } catch (error) {
            console.error("Error adding user:", error);
            Swal.fire({
                title: "Error",
                text: "Gagal menambahkan user",
                icon: "error",
            });
        }
    };

    const navigate = useNavigate();

    return (
        <LayoutDashboard>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmitUser)}
                    className="space-y-8 bg-white p-8 rounded-2xl shadow-md"
                >
                    <div className="flex items-center cursor-pointer">
                        <ArrowLeft onClick={() => navigate("/dashboard/user")} />
                        <h1 className="text-2xl font-semibold ml-4">Tambah User</h1>
                    </div>
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama Lengkap</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukkan Nama Lengkap" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukkan Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Masukkan Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukkan Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nomor Telepon</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukkan Nomor Telepon" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Umur</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukkan Umur" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alamat</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukkan Alamat" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" {...field} value="user" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">
                        Tambahkan User
                    </Button>
                </form>
            </Form>
        </LayoutDashboard>
    );
}

export default AddUser;
