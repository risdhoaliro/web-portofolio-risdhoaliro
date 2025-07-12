import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedCard } from '../lightswind';

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

interface ArticleCardProps {
  article: Article;
  index?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index = 0 }) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleClick = () => {
    navigate(`/article/${article.slug}`);
  };

  return (
    <AnimatedCard
      direction="up"
      delay={index * 0.1}
      hover={true}
      scale={true}
      glow={true}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={handleClick}
      >
        {/* Article Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 to-indigo-900 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Article Icon/Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Tag className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          
          {/* Tags Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {article.tags.slice(0, 2).map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + tagIndex * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.date)}</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {article.title}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3"
            whileHover={{ x: 3 }}
          >
            {article.subtitle}
          </motion.p>

          {/* Excerpt */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
            whileHover={{ x: 2 }}
          >
            {article.excerpt}
          </motion.p>

          {/* Author and Read More */}
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {article.author}
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:gap-2 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* All Tags */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {article.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + tagIndex * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#3b82f6",
                  color: "#ffffff"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatedCard>
  );
};

export default ArticleCard; 