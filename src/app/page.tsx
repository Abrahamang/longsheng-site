'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const featuredProducts = [
    {
      slug: 'viscose-yarn',
      title: 'Viscose Yarn 21s–60s',
      desc: 'Standard yarn for weaving and knitting. Used in linings, shirts, bedsheets.',
    },
    {
      slug: 'siro-spun-yarn',
      title: 'Siro Spun Yarn 30s–60s',
      desc: 'High strength and smoothness. Ideal for high-end fabric applications.',
    },
    {
      slug: 'slub-yarn',
      title: 'Slub Yarn 21s–60s',
      desc: 'Irregular texture yarn for fashion fabrics with character.',
    },
    {
      slug: 'high-twist-yarn',
      title: 'High Twist Yarn 21s–60s',
      desc: 'Strong twist structure for silk-like or sheer applications.',
    },
    {
      slug: 'blended-yarn',
      title: 'Blended Yarn 32s/2',
      desc: 'Viscose + Polyester blend. Better strength, cheaper cost.',
    },
  ];

  const displayed = showAll ? featuredProducts : featuredProducts.slice(0, 3);

  return (
    <main className="bg-[#fdf6e3] text-[#333]">

      {/* HERO SECTION */}
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat text-[#fdf6e3] flex flex-col items-center justify-start pt-[8vh] px-4"
        style={{ backgroundImage: "url('/longsheng-factory.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          YOUR RELIABLE <br /> YARN MANUFACTURER <br /> IN CHINA
        </h1>

        <p className="mt-6 text-lg md:text-xl text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
          Specializing in <strong>100% Viscose</strong>, <strong>Compact</strong>, Slub, High Twist Yarn
        </p>

        <div className="absolute bottom-16 flex gap-4 z-10">
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow">
            Request Quote
          </a>
          <a href="#" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded shadow">
            Download Catalog
          </a>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="bg-white py-12 px-6 text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8">WHY WORK WITH US</h2>
        <div className="flex flex-wrap justify-center gap-10 text-center">
          <div>
            <div className="text-4xl mb-2">🧵</div>
            <p className="font-semibold">Wide Yarn Range</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🚚</div>
            <p className="font-semibold">Fast Global Shipping</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🏭</div>
            <p className="font-semibold">3 Factories, 8000m²</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🤝</div>
            <p className="font-semibold">Trusted by 30+ companies</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-[#fdf6e3] py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">FEATURED PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayed.map((item, i) => (
            <div key={i} className="bg-white shadow rounded p-4 text-center">
              <div className="w-full h-32 bg-gray-200 mb-4 rounded" />
              <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
              <Link
                href={`/en/products/${item.slug}`}
                className="text-sm text-blue-700 underline hover:text-blue-900"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-900 hover:underline text-sm font-medium"
          >
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </section>

      {/* FACTORY SECTION */}
      <section className="bg-white py-12 px-6 text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6">FACTORY AT A GLANCE</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex-1">
            <img src="/longsheng-factory.jpg" alt="Factory View" className="w-full h-48 object-cover rounded shadow" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-lg mb-2">
              Located in Jiangsu, our facilities include 3 plants and 300+ workers, producing over 150 tons daily.
            </p>
            <p className="text-sm text-gray-600 italic">
              “Longsheng Textile has been a trustworthy partner with consistent quality.” — Testibuyer / Likey
            </p>
          </div>
        </div>
      </section>

      {/* CTA with Contact Form */}
<section className="bg-[#fdf6e3] py-12 px-4">
  <div className="max-w-3xl mx-auto text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Place an Order?</h3>
    <p className="text-gray-700 mb-6">We reply within 12 hours. Samples available on request.</p>

    <form
      className="bg-white rounded shadow p-6 space-y-4 text-left"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        console.log('Form submitted:', data);
        alert('Your message has been sent!');
        e.target.reset();
      }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Product Need</label>
        <input
          type="text"
          name="product"
          placeholder="e.g. 30s viscose yarn, 2 tons"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          rows={4}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
      >
        Submit Inquiry
      </button>
    </form>

    <div className="mt-6">
      <a
        href="https://wa.me/31627135102"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-700 underline"
      >
        Or Contact via Whatsapp →
      </a>
    </div>
  </div>
</section>
    </main>
  );
}

