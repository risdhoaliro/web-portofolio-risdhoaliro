import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Calendar, Tag } from 'lucide-react';
import { AuroraText, GlowButton } from '../lightswind';
import ArticleCard from './ArticleCard';
import articlesData from '../data/articles.json';
import { useInView } from 'react-intersection-observer';

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
}

const Articles = () => {
  const [articles] = useState<Article[]>(articlesData);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Get all unique tags
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  // Filter and search articles
  useEffect(() => {
    let filtered = [...articles];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Tag filter
    if (selectedTag) {
      filtered = filtered.filter(article => article.tags.includes(selectedTag));
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    setFilteredArticles(filtered);
  }, [articles, searchTerm, selectedTag, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookOpen className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold">
              <AuroraText 
                size="4xl" 
                speed={6}
                colors={[
                  '#3b82f6', // blue-500
                  '#8b5cf6', // violet-500
                  '#06b6d4', // cyan-500
                  '#10b981', // emerald-500
                  '#f59e0b', // amber-500
                  '#ec4899'  // pink-500
                ]}
              >
                Technical Articles
              </AuroraText>
            </h1>
          </motion.div>
          
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Insights, tutorials, dan best practices dalam dunia software testing, 
            automation, dan quality assurance dari pengalaman hands-on development.
          </motion.p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          ref={ref}
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <motion.div variants={itemVariants} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </motion.div>

              {/* Tag Filter */}
              <motion.div variants={itemVariants} className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </motion.div>

              {/* Sort */}
              <motion.div variants={itemVariants} className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                </select>
              </motion.div>
            </div>

            {/* Active Filters */}
            {(searchTerm || selectedTag) && (
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
                {searchTerm && (
                  <motion.span
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full flex items-center gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-blue-600 transition-colors"
                    >
                      ×
                    </button>
                  </motion.span>
                )}
                {selectedTag && (
                  <motion.span
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full flex items-center gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    Tag: {selectedTag}
                    <button
                      onClick={() => setSelectedTag('')}
                      className="w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-green-600 transition-colors"
                    >
                      ×
                    </button>
                  </motion.span>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
              >
                <ArticleCard article={article} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-16"
              variants={itemVariants}
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search criteria or clear the filters.
              </p>
              <GlowButton
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
              >
                Clear Filters
              </GlowButton>
            </motion.div>
          )}
        </motion.div>

        {/* Article Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {articles.length}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Total Articles</p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <Tag className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {allTags.length}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Topics Covered</p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {filteredArticles.length}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Showing</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles; 