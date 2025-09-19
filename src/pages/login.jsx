import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    username: z.string()
        .min(1, "Email / Username wajib diisi.").refine(
            (val) => /\S+@\S+\.\S+/.test(val) || val.length >= 5,
            "Jika berupa email → harus sesuai format email valid. Jika berupa username → minimal 5 karakter."
        ),
    password: z.string()
        .min(1, "Password wajib diisi.").min(6, "Password minimal 6 karakter."),
});

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const Navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col justify-center items-center pt-30 bg-blue-800 h-screen">
                <h1 className="text-5xl text-white pb-1"> LOGIN</h1>
                <form onSubmit={handleSubmit()} className="bg-white p-10 rounded-lg text-white">
                    <div className="p-2" >
                        <p className="text-gray-600">Email / Username</p>
                        <input type="text" className="border rounded border-blue-800 text-black w-full" {...register("username")} />
                        {errors.username && <p className="text-red-400">{errors.username.message}</p>}
                    </div>
                    <div className="p-2">
                        <p className="text-gray-600">Password</p>
                        <input type="password" className="border rounded border-blue-800 text-black w-full" {...register("password")} />
                        {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                    </div>
                    <div className="p-2">
                        <button type="submit" className="rounded p-1 bg-blue-600 w-full">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;
