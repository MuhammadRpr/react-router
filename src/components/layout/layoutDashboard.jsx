import Sidebar from "@/components/sidebar";

export default function LayoutDashboard({ children }) {
    return (
        <div className="flex min-h-screen w-full bg-orange-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar/Header */}
                <header className="h-16 bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg flex items-center justify-between px-6 text-white">
                    <h1 className="text-xl font-semibold tracking-wide">Dashboard</h1>
                    <div className="flex items-center gap-4">
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto bg-orange-100/30">
                    <div className="bg-white rounded-2xl shadow-md p-6 min-h-[calc(100vh-8rem)] border border-orange-100">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
