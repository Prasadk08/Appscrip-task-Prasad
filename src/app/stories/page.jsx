export default function Stories() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Stories
      </h1>
      <p className="text-gray-600 text-lg mb-6 text-center">
        Every product has a story — from its creation to the moment it reaches your hands.
        Here’s how our journey began and how we connect our customers with the best products.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">The Beginning</h2>
          <p className="text-gray-600">
            Our eCommerce journey started with a simple idea — to make quality products
            accessible to everyone. With passion and dedication, we built a platform that
            connects sellers and buyers seamlessly.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Customer Love</h2>
          <p className="text-gray-600">
            Over the years, thousands of happy customers have trusted us for their shopping needs.
            Their feedback inspires us to improve and bring you even better products every day.
          </p>
        </div>
      </div>
    </div>
  );
}
