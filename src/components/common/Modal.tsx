import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const widthMap = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className={`relative bg-white border-4 border-black shadow-[10px_10px_0_0_#000] w-full ${widthMap[maxWidth]} p-6 text-black z-10 animate-in fade-in zoom-in-95 duration-150 overflow-hidden max-h-[90vh] flex flex-col`}>
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b-4 border-black shrink-0 bg-[#FFDA00] -mx-6 -mt-6 p-6 mb-4">
          <div>
            <div className="text-[10px] font-mono font-black uppercase tracking-wider text-black mb-1">
              OSUM Interactive Portal
            </div>
            <h3 className="font-display text-2xl font-black text-black uppercase tracking-tight">{title}</h3>
            {subtitle && <p className="text-xs font-bold text-black/80 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="text-black bg-white hover:bg-black hover:text-white p-1.5 border-2 border-black shadow-[2px_2px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="overflow-y-auto pt-2 flex-1 pr-1">
          {children}
        </div>

      </div>
    </div>
  );
};
