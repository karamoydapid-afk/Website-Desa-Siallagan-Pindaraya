import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import AboutHero from "@/components/AboutHero";
import { articles } from "@/data/articles.js";

const HERO = "https://images.pexels.com/photos/6713121/pexels-photo-6713121.jpeg?auto=compress&cs=tinysrgb&w=1260";

export default function ArtikelPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <AboutHero
        image={HERO}
        title={<>Artikel<br />Desa Siallagan Pindaraya</>}
        subtitle="Cerita, kabar, dan wawasan seputar kehidupan, budaya, dan inovasi di desa kami."
      />

      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Featured article */}
          <Link
            to={`/artikel/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 items-center bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 mb-16"
          >
            <div className="overflow-hidden h-64 md:h-full">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:pr-12">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-4">
                {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-gray-500 text-xs mb-5">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={13} /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={13} /> {featured.readTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-teal-700 font-semibold text-sm group-hover:gap-2 transition-all">
                Baca Selengkapnya <ArrowRight size={15} />
              </span>
            </div>
          </Link>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to={`/artikel/${a.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-3">
                    {a.category}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800 mb-2 leading-snug group-hover:text-teal-700 transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed mb-4 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {a.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {a.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
