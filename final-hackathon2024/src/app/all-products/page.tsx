import ProductsPage from "@/components/ProductsPage";

export default function AllProducts() {
  return (
    <div>
      <div className="flex justify-center md:justify-start items-center md:items-end bg-[url('/Page-Headers.png')] bg-cover bg-center h-44 py-8 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
        <h2 className="text-3xl text-white">All products</h2>
      </div>
      <ProductsPage />
    </div>
  );
}
