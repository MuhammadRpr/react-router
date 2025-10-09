import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const registerSchema = z
    .object({
        fullname: z
            .string()
            .min(3, "Nama Lengkap minimal 3 karakter")
            .max(50, "Nama Lengkap maksimal 50 karakter"),
        email: z
            .string()
            .min(1, "Email wajib diisi")
            .email("Format email tidak valid"),
        password: z
            .string()
            .min(8, "Password minimal 8 karakter")
            .regex(
                /^(?=.*[A-Z])(?=.*\d).+$/,
                "Password harus mengandung huruf besar dan angka"
            ),
        confirmPassword: z.string().min(1, "Konfirmasi Password wajib diisi"),
        age: z
            .string()
            .refine((val) => !isNaN(val), "Umur harus berupa angka")
            .transform((val) => Number(val))
            .refine((val) => val >= 18 && val <= 60, {
                message: "Umur harus antara 18 - 60 tahun",
            }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password dan Konfirmasi Password tidak sama",
        path: ["confirmPassword"],
    });

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
        reValidateMode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log("Register data:", data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-50">
            <div className="w-full max-w-md bg-white rounded-sm shadow-xl p-8 border border-orange-100">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-2">
                    Daftar Akun Baru
                </h2>
                <p className="text-center mb-6 text-sm">
                    Isi data berikut untuk membuat akun Anda
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Nama Lengkap */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            {...register("fullname")}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                            placeholder="Masukkan nama lengkap"
                        />
                        {errors.fullname && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.fullname.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                            placeholder="Masukkan email"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                            placeholder="Masukkan password"
                        />
                        {errors.password && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Konfirmasi Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Konfirmasi Password
                        </label>
                        <input
                            type="password"
                            {...register("confirmPassword")}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                            placeholder="Ulangi password"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Umur */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Umur
                        </label>
                        <input
                            type="number"
                            {...register("age")}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                            placeholder="Masukkan umur"
                        />
                        {errors.age && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.age.message}
                            </p>
                        )}
                    </div>

                    {/* Tombol Register */}
                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md"
                    >
                        Register
                    </button>
                </form>

                {/* Link ke Login */}
                <p className="mt-6 text-center text-sm">
                    Sudah punya akun?{" "}
                    <Link
                        to="/"
                        className="text-orange-600 hover:text-orange-700 font-medium transition"
                    >
                        Login di sini
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
