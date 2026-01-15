import Sidebar from "@/components/sidebar";
import { getCurrentUser } from "@/lib/auth";

export default async function AddProductPage() {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/add-product" />

      <main className="ml-64 p-8">
        <div>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Add Product
                </h1>
                <p className="text-sm text-gray-500">
                  Add a new product to your inventory
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <form className="space-y-6">
                </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
