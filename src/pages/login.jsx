import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const loginSchema = z.object({
    identifier: z
        .string()
        .min(1, "Username atau Email wajib diisi")
        .refine(
            (val) => /\S+@\S+\.\S+/.test(val) || val.length >= 5,
            "Masukkan username (min 5 karakter) atau email valid"
        ),
    password: z
        .string()
        .min(1, "Password wajib diisi")
        .min(6, "Password minimal 6 karakter"),
});

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        reValidateMode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-50">
            <div className="w-full max-w-md bg-white rounded-sm shadow-xl p-8 border border-orange-100">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center mb-2">
                    Selamat Datang
                </h2>
                <p className="text-center mb-6 text-sm">
                    Silakan masuk untuk melanjutkan ke dashboard Anda
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Username / Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Username / Email
                        </label>
                        <input
                            type="text"
                            {...register("identifier")}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                            placeholder="Masukkan username atau email"
                        />
                        {errors.identifier && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.identifier.message}
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

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md"
                    >
                        Login
                    </button>
                </form>

                {/* Link Register */}
                <p className="mt-6 text-center text-sm">
                    Belum punya akun?{" "}
                    <Link
                        to="/register"
                        className="text-orange-600 hover:text-orange-700 font-medium transition"
                    >
                        Daftar di sini
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
