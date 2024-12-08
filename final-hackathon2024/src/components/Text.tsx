import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[url('/shop-hero-1-product-slide-1.jpg')] bg-cover bg-center relative bg-blue-500 text-white h-screen flex items-center">
      <div className="container mx-auto flex flex-col justify-center items-start space-y-6 px-6 md:w-1/2">
        <p className="text-sm uppercase">Summer 2020</p>
        <h1 className="text-4xl font-bold">New Collection</h1>
        <p className="text-lg">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
