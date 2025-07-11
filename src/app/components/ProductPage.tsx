'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const products = [
  {
    slug: 'viscose-yarn',
    title: 'Viscose Yarn 21s–60s',
    desc: 'Standard yarn for weaving and knitting. Used in linings, shirts, bedsheets.',
    features: ['21s–60s', 'Soft, breathable', '100% viscose', 'Common textile use'],
    image: '/viscose-yarn.jpg'
  },
  {
    slug: 'siro-spun-yarn',
    title: 'Siro Spun Yarn 30s–60s',
    desc: 'High strength and smoothness. Ideal for high-end fabric applications.',
    features: ['Compact structure', 'Better pilling resistance', 'Used in suits, dresses'],
    image: '/siro-spun-yarn.jpg',
  },
  {
    slug: 'slub-yarn',
    title: 'Slub Yarn 21s–60s',
    desc: 'Irregular texture yarn for fashion fabrics with character.',
    features: ['Uneven texture', 'Popular for trend fabrics', 'Used in fashionwear'],
    image: '/slub-yarn.jpg',
  },
  {
    slug: 'high-twist-yarn',
    title: 'High Twist Yarn 21s–60s',
    desc: 'Strong twist structure for silk-like or sheer applications.',
    features: ['High twist', 'Smooth, glossy finish', 'Ideal for scarves, blouses'],
    image: '/high-twist-yarn.jpg',
  },
  {
    slug: 'blended-yarn',
    title: 'Blended Yarn 32s/2',
    desc: 'Viscose + Polyester blend. Better strength, cheaper cost.',
    features: ['32s/2 double yarn', 'Better dyeing stability', 'Used in home textiles'],
    image: '/blended-yarn.jpg',
  },
];

export default function ProductPage() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-red-500">Product not found.</div>;
  }

  return (
    <main className="bg-[#fdf6e3] text-gray-800 px-6 py-12 min-h-screen">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        
        {/* ✅ 图片展示区域 */}
        <div className="w-full md:w-1/2">
          <div className="w-full max-w-sm mx-auto">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={600}
              className="object-contain w-full h-auto rounded shadow mb-6"
            />
          </div>
        </div>

        {/* ✅ 产品文字说明区域 */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.desc}</p>

          <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc list-inside space-y-1 mb-6">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <div className="flex gap-4 mb-6">
            <a
              href="https://wa.me/31627135102"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
            >
              Whatsapp Us
            </a>
          </div>

          <div className="text-sm">
            <Link href="/" className="underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
