import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiDownload, FiHeart, FiChevronDown } from 'react-icons/fi';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { downloadTxt, downloadPdf } from '@/utils/export';
import { useTranslation } from '@/hooks/useTranslation';
import Button from './Button';

interface PromptCardProps {
  id: string;
  level: 1 | 2 | 3 | 4 | 5;
  title: string;
  content: string;
  category: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({
  id,
  level,
  title,
  content,
  category,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { copyToClipboard } = useCopyToClipboard();
  const { t } = useTranslation();

  const levelColors = {
    1: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    2: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    3: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    4: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    5: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  const preview = content.substring(0, 150) + (content.length > 150 ? '...' : '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <div className="flex gap-2 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
              المستوى {level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {category}
            </span>
          </div>
        </div>
        <button
          onClick={() => onFavoriteToggle?.(id)}
          className="text-2xl transition-all"
        >
          <FiHeart fill={isFavorite ? 'currentColor' : 'none'} color={isFavorite ? '#ef4444' : '#999'} />
        </button>
      </div>

      {/* Content Preview */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{preview}</p>

      {/* Full Content (Expandable) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        <Button
          size="sm"
          variant="primary"
          onClick={() => copyToClipboard(content)}
          className="flex items-center gap-2"
        >
          <FiCopy size={16} />
          نسخ
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => downloadTxt(content, `${title}.txt`)}
          className="flex items-center gap-2"
        >
          <FiDownload size={16} />
          TXT
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => downloadPdf(content, title, `${title}.pdf`)}
          className="flex items-center gap-2"
        >
          <FiDownload size={16} />
          PDF
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 mr-auto"
        >
          <FiChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          {isExpanded ? 'إخفاء' : 'عرض'}
        </Button>
      </div>
    </motion.div>
  );
};

export default PromptCard;
