"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// ✅ Schema Validasi
const addUserSchema = z.object({
    fullname: z.string().min(8, { message: "Nama Lengkap minimal 8 karakter" }),
    username: z.string().min(5, { message: "Username minimal 5 karakter" }),
    password: z.string().min(5, { message: "Password minimal 5 karakter" }),
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
    address: z.string().min(10, { message: "Alamat minimal 10 karakter" }),
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

    const addUser = async (data) => {
        const response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error("Gagal menambahkan user");
        return await response.json();
    };

    const onSubmit = async (data) => {
        try {
            await addUser(data);
            alert("✅ User berhasil ditambahkan!");
            form.reset();
        } catch (error) {
            console.error(error);
            alert("❌ Gagal menambahkan user.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-white p-6">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg border border-orange-200 p-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-orange-600 mb-2">Tambah User</h1>
                    <p className="text-gray-500 text-sm">
                        Isi data di bawah ini untuk menambahkan pengguna baru.
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Lengkap</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Masukkan nama lengkap"
                                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
                                        />
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
                                        <Input
                                            {...field}
                                            placeholder="Masukkan username"
                                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
                                        />
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
                                            {...field}
                                            type="password"
                                            placeholder="Masukkan password"
                                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
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
                                        <Input
                                            {...field}
                                            placeholder="Masukkan email"
                                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
                                        />
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
                                        <Input
                                            {...field}
                                            placeholder="Masukkan nomor telepon"
                                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
                                        />
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
                                        <Input
                                            {...field}
                                            placeholder="Masukkan umur"
                                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
                                        />
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
                                        <Input
                                            {...field}
                                            placeholder="Masukkan alamat lengkap"
                                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
                        >
                            Tambahkan User
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default AddUser;
