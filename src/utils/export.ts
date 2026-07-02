/**
 * دالة لتحميل ملف نصي
 */
export const downloadTxt = (content: string, filename: string = 'prompt.txt') => {
  const element = document.createElement('a');
  const file = new Blob([content], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

/**
 * دالة لتحميل ملف PDF
 */
export const downloadPdf = async (
  content: string,
  title: string = 'Prompt',
  filename: string = 'prompt.pdf'
) => {
  try {
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 15;
    const maxWidth = pageWidth - 2 * margin;

    // Add title
    pdf.setFontSize(16);
    pdf.text(title, margin, margin);

    // Add content
    pdf.setFontSize(11);
    const splitText = pdf.splitTextToSize(content, maxWidth);
    pdf.text(splitText, margin, margin + 15);

    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

/**
 * دالة لتنسيق النص
 */
export const formatText = (text: string): string => {
  return text.trim().replace(/\n\n+/g, '\n\n');
};

/**
 * دالة للتحقق من طول النص
 */
export const isValidPromptLength = (text: string, minLength: number = 10, maxLength: number = 5000): boolean => {
  return text.trim().length >= minLength && text.trim().length <= maxLength;
};

/**
 * دالة لاستخراج الكلمات الرئيسية
 */
export const extractKeywords = (text: string, limit: number = 10): string[] => {
  const words = text
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3);
  return [...new Set(words)].slice(0, limit);
};

/**
 * دالة لحساب جودة البرومبت
 */
export const calculatePromptQuality = (text: string): number => {
  let quality = 0;
  const length = text.length;

  // طول النص
  if (length > 100) quality += 20;
  if (length > 300) quality += 20;
  if (length > 500) quality += 15;

  // التفاصيل
  if (text.includes('?')) quality += 15;
  if (text.includes('.')) quality += 10;
  if (text.includes(',')) quality += 10;

  // الكلمات الدلالية
  const keywords = ['من فضلك', 'يرجى', 'تأكد', 'بالضبط', 'مثال', 'نمط', 'صيغة'];
  keywords.forEach((keyword) => {
    if (text.includes(keyword)) quality += 5;
  });

  return Math.min(quality, 100);
};
