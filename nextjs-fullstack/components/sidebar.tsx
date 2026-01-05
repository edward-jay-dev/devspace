import { BarChart3 } from "lucide-react";

export default function Sidebar({
    currentPath = "/dashboard"
}: {
    currentPath: string}
) {
    return (
        <div className="fixed left-0 top-0 bg-gray-900 text-white w-84 min-h-screen p-6 z-10">
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-7 h-7"/>
                    <span className="text-lg font-semibold">Inventory App</span>
                </div>
                <nav className="space-y-1">
                    <div>Inventory</div>
                </nav>
            </div>
        </div>
    );
}