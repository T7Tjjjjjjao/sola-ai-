import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        {label && <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{label}</label>}
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{icon}</div>}
          <input
            ref={ref}
            className={`w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all ${
              icon ? 'pl-10' : ''
            } ${error ? 'border-red-500' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && <span className="text-sm text-red-500 mt-1 block">{error}</span>}
      </motion.div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
