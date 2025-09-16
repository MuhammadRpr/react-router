// import Navbar from "../components/navbar";
// import { useState } from "react";


// function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = () => {
//         if (username.length < 5) {
//             setError("Username minimal 5 karakter, wajib diisi.");
//             return;
//         }
//         if (password.length < 6) {
//             setError("Password minimal 6 karakter, wajib diisi.");
//             return;
//         }
//         setError("");
//         alert("Login berhasil!");
//     };

//     return (
//         <div className="flex flex-col justify-center items-center pt-30 bg-yellow-500 h-screen">
//             <div className="bg-blue-900 p-10 rounded-lg text-white">
//                 <h1 className="text-3xl text-center">Login Page</h1>
//                 <p className="text-center">login untuk masuk ke halaman lain</p>
//                 <div className="p-2">
//                     <div className="p-2">
//                         <input
//                             type="text"
//                             placeholder="masukkan username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="rounded-md border w-80 p-1 text-black"
//                         />
//                     </div>
//                     <div className="p-2">
//                         <input
//                             type="password"
//                             placeholder="masukkan password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="rounded-md border w-80 p-1 text-black"
//                         />
//                     </div>
//                     {error && <p className="text-red-400 text-sm p-2">{error}</p>}
//                     <div className="p-2">
//                         <button
//                             onClick={handleLogin}
//                             className="bg-green-500 rounded-md p-2 text-center hover:bg-green-700"
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default Login;
import Navbar from "../components/navbar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    username: z.string().min(1, "wajib diisi username.").min(5, "Username minimal 5 karakter"),
    password: z.string().min(1, "wajib diisi password.").min(1, "Password minimal 6 karakter")
});

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });
    return (
        <>
            <div className="flex flex-col justify-center items-center pt-30 bg-blue-800 h-screen">
                <h1 className="text-5xl text-white pb-1"> LOGIN</h1>
                <form onSubmit={handleSubmit()} className="bg-amber-400 p-10 rounded-lg text-white">
                    <div className="p-2" >
                        <p>username</p>
                        <input type="text" className="border rounded border-blue-800 text-black"{...register("username")} />
                        {errors.username && <p className="text-red-400">{errors.username.message}</p>}
                    </div>
                    <div className="p-2">
                        <p>password</p>
                        <input type="password" className="border rounded border-blue-800 text-black"{...register("password")} />
                        {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                    </div>
                    <div className="p-2">
                        <button type="submit" className="rounded p-1 bg-blue-600">Login</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Login;
