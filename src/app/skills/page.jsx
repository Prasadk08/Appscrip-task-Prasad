export default function Skills() {
  const skills = [
    { name: "Product Sourcing", description: "We partner with trusted suppliers to ensure product quality and authenticity." },
    { name: "Fast Delivery", description: "Our logistics network ensures your orders reach you quickly and safely." },
    { name: "Customer Support", description: "A friendly support team ready to assist you anytime." },
    { name: "Secure Payments", description: "Multiple payment methods with top-grade security." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Skills
      </h1>
      <p className="text-gray-600 text-lg mb-10 text-center">
        The expertise that powers our eCommerce platform.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
