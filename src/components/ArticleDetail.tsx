import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, ChevronRight, Loader2 } from 'lucide-react';
import { GlowButton, AuroraText } from '../lightswind';
import articlesData from '../data/articles.json';

interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  image: string;
  sections: Array<{
    title: string;
    content: Record<string, unknown>;
  }>;
  conclusion: {
    executive_summary: string;
    key_achievements: string[];
    learning_impact: string[];
  };
}

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      
      // Simulate loading
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundArticle = articlesData.find(a => a.slug === slug) as Article | undefined;
      setArticle(foundArticle || null);
      setLoading(false);
    };

    loadArticle();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.subtitle,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link disalin ke clipboard!');
    }
  };

  // Simplified content renderer
  const renderContent = (value: unknown, level: number = 0): JSX.Element => {
    const marginClass = level > 0 ? 'ml-4' : '';

    if (typeof value === 'string') {
      return (
        <div className={`${marginClass} mb-3`}>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {value}
          </p>
        </div>
      );
    }

    if (Array.isArray(value)) {
      return (
        <div className={`${marginClass} mb-4`}>
          <ul className="space-y-2">
            {value.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  {typeof item === 'string' ? (
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  ) : (
                    renderContent(item, level + 1)
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (typeof value === 'object' && value !== null) {
      return (
        <div className={`${marginClass} space-y-4`}>
          {Object.entries(value).map(([key, val], index) => (
            <div key={index} className="border-l-2 border-blue-200 dark:border-blue-700 pl-4 py-2">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 capitalize">
                {key.replace(/_/g, ' ')}
              </h4>
              <div className="ml-2">
                {renderContent(val, level + 1)}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <span className={`text-gray-700 dark:text-gray-300 ${marginClass}`}>
        {String(value)}
      </span>
    );
  };

  // Loading state
  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">Memuat artikel...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (!article) {
    return (
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Artikel Tidak Ditemukan
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Artikel yang Anda cari tidak ada atau gagal dimuat.
            </p>
            <GlowButton onClick={() => navigate('/articles')}>
              Kembali ke Artikel
            </GlowButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlowButton
            variant="ghost"
            onClick={() => navigate('/articles')}
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Kembali ke Artikel
          </GlowButton>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <AuroraText
                  size="4xl"
                  speed={8}
                  colors={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']}
                >
                  {article.title}
                </AuroraText>
              </h1>

              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6 font-medium">
                {article.subtitle}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <GlowButton
                variant="outline"
                onClick={handleShare}
                icon={<Share2 className="w-4 h-4" />}
              >
                Bagikan Artikel
              </GlowButton>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="space-y-8">
          {/* Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">
                  Ringkasan
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                {article.excerpt}
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          {article.sections?.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {Object.entries(section.content).map(([key, value], idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 capitalize border-b border-gray-200 dark:border-gray-600 pb-2">
                        {key.replace(/_/g, ' ')}
                      </h3>
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        {renderContent(value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Conclusion */}
          {article.conclusion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-8 border border-green-200 dark:border-green-700">
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-6">
                  Kesimpulan
                </h2>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  {article.conclusion.executive_summary}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 text-lg">
                      Pencapaian Utama
                    </h4>
                    <ul className="space-y-2">
                      {article.conclusion.key_achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 text-lg">
                      Dampak Pembelajaran
                    </h4>
                    <ul className="space-y-2">
                      {article.conclusion.learning_impact.map((impact, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        <motion.div
          className="mt-12 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <GlowButton
            variant="outline"
            onClick={() => navigate('/articles')}
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Kembali ke Artikel
          </GlowButton>
          
          <GlowButton
            variant="primary"
            onClick={handleShare}
            icon={<Share2 className="w-4 h-4" />}
          >
            Bagikan Artikel
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleDetail; 