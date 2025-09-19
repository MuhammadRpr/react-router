import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
    name: z.string()
        .min(1, "Wajib diisi.").min(3, "Minimal 3 karakter.").max(50, "Maksimal 50 karakter."),
    email: z.string()
        .min(1, "Wajib diisi.").email("Harus sesuai format email valid."),
    password: z.string()
        .min(1, "Wajib diisi.").min(8, "Password minimal 8 karakter.").regex(/^(?=.*[A-Z])(?=.*\d).+$/, "Harus ada huruf besar dan angka."),
    confirmPassword: z.string()
        .min(1, "password tadi wajib diisi."),
    umur: z.coerce.number()
        .min(18, "Minimal 18 tahun.").max(60, "Maksimal 60 tahun."),
}).refine((data) => data.password === data.confirmPassword, {
    message: "password harus sama dengan password.",
    path: ["confirmPassword"],
});

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Register berhasil!");
    };

    return (
        <div className="flex flex-col justify-center items-center pt-30 bg-yellow-500 h-screen">
            <h1 className="text-5xl text-white pb-1">REGISTER</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded-lg text-black">

                <div className="p-1">
                    <p className="text-gray-700">Nama Lengkap</p>
                    <input type="text" className="border rounded w-full border-gray-700 p-1" {...register("name")} />
                    {errors.name && <p className="text-red-400">{errors.name.message}</p>}
                </div>

                <div className="p-1">
                    <p className="text-gray-700">Email</p>
                    <input type="text" className="border rounded w-full border-gray-700 p-1" {...register("email")} />
                    {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                </div>

                <div className="p-1">
                    <p className="text-gray-700">Password</p>
                    <input type="password" className="border rounded w-full border-gray-700 p-1" {...register("password")} />
                    {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                </div>

                <div className="p-1">
                    <p className="text-gray-700">Konfirmasi Password</p>
                    <input type="password" className="border rounded w-full border-gray-700 p-1" {...register("confirmPassword")} />
                    {errors.confirmPassword && <p className="text-red-400">{errors.confirmPassword.message}</p>}
                </div>

                <div className="p-1">
                    <p className="text-gray-700">Umur</p>
                    <input type="number" className="border rounded w-full border-gray-700 p-1" {...register("umur")} />
                    {errors.umur && <p className="text-red-400">{errors.umur.message}</p>}
                </div>

                <div className="p-1">
                    <button type="submit" className="rounded bg-blue-600 text-white w-full p-1">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
