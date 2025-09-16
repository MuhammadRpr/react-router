// import { useState } from "react";
// import Navbar from "../components/navbar";

// function Register() {
//     const [name, setName] = useState("");
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleRegister = () => {
//         if (!name) {
//             setError("Name wajib diisi.");
//             return;
//         }
//         if (username.length < 5) {
//             setError("Username minimal 5 karakter, wajib diisi.");
//             return;
//         }
//         if (!/\S+@\S+\.\S+/.test(email)) {
//             setError("Email harus format email, wajib diisi.");
//             return;
//         }
//         if (password.length < 6) {
//             setError("Password minimal 6 karakter, wajib diisi.");
//             return;
//         }
//         setError("");
//         alert("Register berhasil!");
//     };

//     return (
//         <>
//             <div className="flex flex-col justify-center items-center pt-30 bg-yellow-500 h-screen">
//                 <div className="bg-blue-900 p-10 rounded-lg text-white">
//                     <h1 className="text-3xl text-center">Register Page</h1>
//                     <p className="text-center">masukkan lagi untuk masuk ke halaman lain</p>
//                     <div className="p-2">
//                         <div className="p-2">
//                             <input
//                                 type="text"
//                                 placeholder="masukkan name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="rounded-md border w-80 p-1 text-white"
//                             />
//                         </div>
//                         <div className="p-2">
//                             <input
//                                 type="text"
//                                 placeholder="masukkan username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 className="rounded-md border w-80 p-1 text-white"
//                             />
//                         </div>
//                         <div className="p-2">
//                             <input
//                                 type="text"
//                                 placeholder="masukkan email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="rounded-md border w-80 p-1 text-white"
//                             />
//                         </div>
//                         <div className="p-2">
//                             <input
//                                 type="password"
//                                 placeholder="masukkan password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="rounded-md border w-80 p-1 text-white"
//                             />
//                         </div>
//                         {error && <p className="text-red-400 text-sm p-2">{error}</p>}
//                         <div className="p-2">
//                             <button
//                                 onClick={handleRegister}
//                                 className="bg-green-500 rounded-md p-2 text-center hover:bg-green-700"
//                             >
//                                 Login
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Register;

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    name: z.string().min(1, "wajib diisi name."),
    username: z.string().min(1, "wajib diisi username.").min(5, "Username minimal 5 karakter"),
    email: z.string().min(1, "wajib diisi email.").min(1, "isi email dengan benar"),
    password: z.string().min(1, "wajib diisi password.").min(1, "Password minimal 6 karakter"),
});

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });
    return (
        <>
            <div className="flex flex-col justify-center items-center pt-30 bg-yellow-500 h-screen">
                <h1 className="text-5xl text-white pb-1"> REGISTER</h1>
                <form onSubmit={handleSubmit()} children className="bg-blue-900 p-10 rounded-lg text-black">
                    <div className="p-1" >
                        <p className="text-white">name</p>
                        <input type="text" className="border rounded border-white"{...register("name")} />
                        {errors.username && <p className="text-red-400">{errors.name.message}</p>}
                    </div>
                    <div className="p-1">
                        <p className="text-white">username</p>
                        <input type="password" className="border rounded border-white"{...register("username")} />
                        {errors.password && <p className="text-red-400">{errors.username.message}</p>}
                    </div>
                    <div className="p-1">
                        <p className="text-white">email</p>
                        <input type="password" className="border rounded border-white"{...register("email")} />
                        {errors.password && <p className="text-red-400">{errors.email.message}</p>}
                    </div>
                    <div className="p-1">
                        <p className="text-white"> password</p>
                        <input type="password" className="border rounded border-white"{...register("password")} />
                        {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                    </div>
                    <div className="p-1">
                        <button type="submit" className="rounded bg-blue-600 p-1 text-white">Login</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Register;