export default function Shops() {
  const shops = [
    { name: "Fashion Store", description: "Trendy clothing and accessories for all styles.", img: "/images/fashion.jpg" },
    { name: "Electronics Hub", description: "Latest gadgets, smartphones, and accessories.", img: "/images/electronics.jpg" },
    { name: "Home Essentials", description: "Everything you need to make your home cozy.", img: "/images/home.jpg" },
    { name: "Sports & Fitness", description: "Gear up with top-quality sports equipment.", img: "/images/sports.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Shops
      </h1>
      <p className="text-gray-600 text-lg mb-10 text-center">
        Explore our diverse range of shops and discover products you'll love.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {shops.map((shop, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
            <img src={shop.img} alt={shop.name} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{shop.name}</h2>
              <p className="text-gray-600">{shop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
