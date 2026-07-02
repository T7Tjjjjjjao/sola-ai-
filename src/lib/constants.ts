/**
 * ثوابت التطبيق
 */

export const APP_NAME = 'Sola AI';
export const APP_DESCRIPTION =
  'منصة احترافية متخصصة في توليد برومبتات عالية الجودة';

export const PROMPT_CATEGORIES = {
  ar: [
    {
      id: 'programming',
      name: 'البرمجة',
      description: 'برومبتات للبرمجة وتطوير البرامج',
      icon: '💻',
    },
    {
      id: 'design',
      name: 'التصميم',
      description: 'برومبتات للتصميم والجرافيكس',
      icon: '🎨',
    },
    {
      id: 'ai',
      name: 'الذكاء الاصطناعي',
      description: 'برومبتات تتعلق بالذكاء الاصطناعي',
      icon: '🤖',
    },
    {
      id: 'marketing',
      name: 'التسويق',
      description: 'برومبتات للتسويق والإعلان',
      icon: '📢',
    },
    {
      id: 'ecommerce',
      name: 'التجارة الإلكترونية',
      description: 'برومبتات للتجارة الإلكترونية',
      icon: '🛍️',
    },
    {
      id: 'content',
      name: 'كتابة المحتوى',
      description: 'برومبتات لكتابة المحتوى',
      icon: '✍️',
    },
    {
      id: 'video',
      name: 'صناعة الفيديو',
      description: 'برومبتات لصناعة الفيديو',
      icon: '🎬',
    },
    {
      id: 'image',
      name: 'صناعة الصور',
      description: 'برومبتات لتوليد الصور',
      icon: '🖼️',
    },
    {
      id: 'education',
      name: 'التعليم والدراسة',
      description: 'برومبتات للدراسة والتعليم',
      icon: '📚',
    },
    {
      id: 'business',
      name: 'الأعمال',
      description: 'برومبتات للأعمال والمشاريع',
      icon: '💼',
    },
    {
      id: 'social',
      name: 'وسائل التواصل الاجتماعي',
      description: 'برومبتات لوسائل التواصل',
      icon: '📱',
    },
    {
      id: 'seo',
      name: 'تحسين محركات البحث',
      description: 'برومبتات لـ SEO',
      icon: '🔍',
    },
    {
      id: 'customer',
      name: 'خدمة العملاء',
      description: 'برومبتات لخدمة العملاء',
      icon: '🎧',
    },
    {
      id: 'sales',
      name: 'المبيعات',
      description: 'برومبتات للمبيعات',
      icon: '💰',
    },
    {
      id: 'productivity',
      name: 'الإنتاجية',
      description: 'برومبتات لزيادة الإنتاجية',
      icon: '⚡',
    },
  ],
  en: [
    {
      id: 'programming',
      name: 'Programming',
      description: 'Prompts for programming and software development',
      icon: '💻',
    },
    {
      id: 'design',
      name: 'Design',
      description: 'Prompts for design and graphics',
      icon: '🎨',
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      description: 'Prompts related to AI',
      icon: '🤖',
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'Prompts for marketing and advertising',
      icon: '📢',
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Prompts for e-commerce',
      icon: '🛍️',
    },
    {
      id: 'content',
      name: 'Content Writing',
      description: 'Prompts for content writing',
      icon: '✍️',
    },
    {
      id: 'video',
      name: 'Video Production',
      description: 'Prompts for video production',
      icon: '🎬',
    },
    {
      id: 'image',
      name: 'Image Generation',
      description: 'Prompts for image generation',
      icon: '🖼️',
    },
    {
      id: 'education',
      name: 'Education & Study',
      description: 'Prompts for education and learning',
      icon: '📚',
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Prompts for business and projects',
      icon: '💼',
    },
    {
      id: 'social',
      name: 'Social Media',
      description: 'Prompts for social media',
      icon: '📱',
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      description: 'Prompts for SEO',
      icon: '🔍',
    },
    {
      id: 'customer',
      name: 'Customer Service',
      description: 'Prompts for customer service',
      icon: '🎧',
    },
    {
      id: 'sales',
      name: 'Sales',
      description: 'Prompts for sales',
      icon: '💰',
    },
    {
      id: 'productivity',
      name: 'Productivity',
      description: 'Prompts for productivity',
      icon: '⚡',
    },
  ],
};

export const PROMPT_LEVELS = {
  1: {
    name: { ar: 'بسيط', en: 'Simple' },
    description: {
      ar: 'برومبت بسيط وواضح',
      en: 'A simple and clear prompt',
    },
  },
  2: {
    name: { ar: 'متقدم', en: 'Advanced' },
    description: {
      ar: 'برومبت أكثر تفصيلاً',
      en: 'A more detailed prompt',
    },
  },
  3: {
    name: { ar: 'احترافي', en: 'Professional' },
    description: {
      ar: 'برومبت احترافي',
      en: 'A professional prompt',
    },
  },
  4: {
    name: { ar: 'خبير', en: 'Expert' },
    description: {
      ar: 'برومبت خبير مع تفاصيل كاملة',
      en: 'An expert prompt with full details',
    },
  },
  5: {
    name: { ar: 'نخبة', en: 'Elite' },
    description: {
      ar: 'أفضل برومبت ممكن',
      en: 'The best possible prompt',
    },
  },
} as const;
