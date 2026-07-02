import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 dark:bg-black text-gray-300 py-12 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">✨ Sola AI</h3>
            <p className="text-sm">منصة احترافية متخصصة في توليد برومبتات عالية الجودة</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition">الرئيسية</a></li>
              <li><a href="/library" className="hover:text-blue-400 transition">المكتبة</a></li>
              <li><a href="/dashboard" className="hover:text-blue-400 transition">لوحة التحكم</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">قانوني</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">الخصوصية</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">الشروط والأحكام</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">التواصل</h4>
            <ul className="space-y-2 text-sm">
              <li>البريد الإلكتروني: info@solaai.com</li>
              <li>الدعم: support@solaai.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Sola AI. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
