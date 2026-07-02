'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import { useAppStore } from '@/store/appStore';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { downloadTxt, downloadPdf } from '@/utils/export';
import Button from '@/components/Button';
import Input from '@/components/Input';
import toast from 'react-hot-toast';

const PROMPT_TEMPLATES = {
  ar: [
    "أنت خبير في هندسة البرومبتات. المستخدم طلب: {input}. اكتب برومبت بسيط واضح وفعال.",
    "أنت مهندس برومبتات محترف. بناءً على: {input}. اكتب برومبت متقدم مع تفاصيل أكثر.",
    "أنت متخصص في البرومبتات. المطلب: {input}. اكتب برومبت احترافي شامل.",
    "أنت خبير عالمي في البرومبتات. المهمة: {input}. اكتب برومبت خبير مع: الدور، الهدف، السياق، التعليمات، القيود، تنسيق الإخراج، معايير الجودة.",
    "أنت أفضل مهندس برومبتات في العالم. المطلب: {input}. اكتب برومبت نخبة مثالي مع جميع العناصر: الدور، المهمة، الوصف الكامل، التعليمات، القيود، تنسيق الإخراج، شروط الجودة، خطوات العمل، أمثلة، صياغة احترافية جداً.",
  ],
  en: [
    "You are a prompt engineering expert. The user asked: {input}. Write a simple, clear, and effective prompt.",
    "You are a professional prompt engineer. Based on: {input}. Write an advanced prompt with more details.",
    "You are a prompt specialist. The requirement: {input}. Write a comprehensive professional prompt.",
    "You are a world-class prompt expert. The task: {input}. Write an expert prompt with: role, objective, context, instructions, constraints, output format, quality criteria.",
    "You are the best prompt engineer in the world. The requirement: {input}. Write a perfect elite prompt with all elements: role, task, full description, instructions, constraints, output format, quality conditions, workflow steps, examples, and highly professional wording.",
  ],
};

export default function Home() {
  const [input, setInput] = useState('');
  const [prompts, setPrompts] = useState<Array<{ level: number; content: string }>>([
    { level: 1, content: '' },
    { level: 2, content: '' },
    { level: 3, content: '' },
    { level: 4, content: '' },
    { level: 5, content: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const { language, theme, setLanguage, toggleTheme } = useAppStore();
  const { copyToClipboard } = useCopyToClipboard();

  const levelNames = {
    ar: ['بسيط', 'متقدم', 'احترافي', 'خبير', 'نخبة'],
    en: ['Simple', 'Advanced', 'Professional', 'Expert', 'Elite'],
  };

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast.error(language === 'ar' ? 'الرجاء إدخال فكرتك أولاً' : 'Please enter your idea first');
      return;
    }

    setLoading(true);
    try {
      const templates = PROMPT_TEMPLATES[language];
      const newPrompts = templates.map((template, index) => ({
        level: index + 1,
        content: template.replace('{input}', input),
      }));

      // محاكاة تأخير الطلب
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPrompts(newPrompts);
      setGenerated(true);
      toast.success(language === 'ar' ? 'تم التوليد بنجاح!' : 'Generated successfully!');
    } catch (error) {
      toast.error(language === 'ar' ? 'حدث خطأ في التوليد' : 'Error generating prompts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            ✨ Sola AI
          </motion.h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'ar' ? 'حول أفكارك إلى برومبتات احترافية' : 'Transform Your Ideas Into Professional Prompts'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'اكتب فكرتك البسيطة واحصل على 5 برومبتات احترافية جاهزة للاستخدام مع ChatGPT وClaude وGemini'
              : 'Write your simple idea and get 5 professional prompts ready to use with ChatGPT, Claude, and Gemini'}
          </p>
        </motion.section>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === 'ar' ? 'اكتب فكرتك هنا…' : 'Write your idea here…'}
              className="w-full h-32 md:h-40 p-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all resize-none text-base md:text-lg"
            />
            <div className="mt-6 flex gap-3">
              <Button
                onClick={handleGenerate}
                isLoading={loading}
                size="lg"
                className="flex-1 text-base md:text-lg"
              >
                {language === 'ar' ? '✨ توليد البرومبتات' : '✨ Generate Prompts'}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        {generated && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {language === 'ar' ? 'البرومبتات المولدة' : 'Generated Prompts'}
            </h3>
            <div className="grid gap-4">
              {prompts.map((prompt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  {/* Level Badge */}
                  <div className="mb-3 inline-block">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${
                        prompt.level === 1
                          ? 'bg-blue-500'
                          : prompt.level === 2
                          ? 'bg-purple-500'
                          : prompt.level === 3
                          ? 'bg-pink-500'
                          : prompt.level === 4
                          ? 'bg-orange-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {language === 'ar'
                        ? `المستوى ${prompt.level} - ${levelNames.ar[index]}`
                        : `Level ${prompt.level} - ${levelNames.en[index]}`}
                    </span>
                  </div>

                  {/* Prompt Content */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    {prompt.content}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => copyToClipboard(prompt.content)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all text-sm md:text-base"
                    >
                      <FiCopy size={16} />
                      {language === 'ar' ? 'نسخ' : 'Copy'}
                    </button>
                    <button
                      onClick={() => downloadTxt(prompt.content, `prompt-level-${prompt.level}.txt`)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-all text-sm md:text-base"
                    >
                      <FiDownload size={16} />
                      TXT
                    </button>
                    <button
                      onClick={() =>
                        downloadPdf(
                          prompt.content,
                          `${language === 'ar' ? `البرومبت - المستوى ${prompt.level}` : `Prompt - Level ${prompt.level}`}`,
                          `prompt-level-${prompt.level}.pdf`
                        )
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-all text-sm md:text-base"
                    >
                      <FiDownload size={16} />
                      PDF
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Empty State */}
        {!generated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {language === 'ar'
                ? '😊 ابدأ بكتابة فكرتك لتحصل على برومبتات احترافية'
                : '😊 Start by writing your idea to get professional prompts'}
            </p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 mt-20 text-center">
        <p>&copy; 2024 Sola AI. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  );
}
