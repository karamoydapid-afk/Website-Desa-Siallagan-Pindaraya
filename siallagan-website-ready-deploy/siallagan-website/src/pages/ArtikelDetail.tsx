import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { articles, getArticleBySlug } from "@/data/articles.js";

export default function ArtikelDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <Navigate to="/artikel" replace />;

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,118,110,0.35) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="relative max-w-[900px] mx-auto px-6 h-full flex flex-col justify-end pb-10">
          <Link
            to="/artikel"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-6 w-fit"
          >
            <ArrowLeft size={16} /> Kembali ke Artikel
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold mb-4 w-fit">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-5 text-white/80 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[760px] mx-auto px-6">
          {article.content.map((p, i) => (
            <p
              key={i}
              className="text-gray-700 text-[16.5px] leading-relaxed mb-6 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-10 text-center">
              Artikel Lainnya
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/artikel/${a.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-teal-700 transition-colors">
                      {a.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-teal-700 font-medium text-sm">
                      Baca <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
