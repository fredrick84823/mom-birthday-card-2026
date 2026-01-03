import React from 'react';

interface SealProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

export const Seal: React.FC<SealProps> = ({ onClick, className = '', size = 'md', active = false }) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-lg border-2',
    md: 'w-24 h-24 text-3xl border-4',
    lg: 'w-32 h-32 text-4xl border-4',
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative bg-seal text-paper font-calligraphy flex items-center justify-center
        shadow-lg select-none cursor-pointer hover:opacity-90 transition-all duration-500
        ${sizeClasses[size]}
        ${className}
        ${active ? 'scale-90 shadow-inner' : 'scale-100'}
      `}
      style={{
        // Organic border radius to look like a stamped seal
        borderRadius: '4px 2px 5px 3px',
        boxShadow: active ? '0 0 15px rgba(178, 34, 34, 0.8)' : '2px 2px 4px rgba(0,0,0,0.2)'
      }}
    >
      <div className="border border-paper/30 w-[90%] h-[90%] flex items-center justify-center">
        <span>家</span>
      </div>
    </button>
  );
};