import React from 'react';


interface SliderProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
  color?: 'green' | 'orange' | 'blue' | 'red' | string;
}


const colorClassMap: Record<string, string> = {
  green: 'bg-[#D01B17]',
  orange: 'bg-orange-600',
  blue: 'bg-blue-600',
  red: 'bg-red-600',
  purple: 'bg-purple',
};

const Slider: React.FC<SliderProps> = ({ checked, onChange, className = '', color = 'green' }) => {
  const checkedBg = colorClassMap[color] || colorClassMap['green'];
  return (
    <button
      type="button"
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
        checked ? checkedBg : 'bg-muted'
      } ${className}`}
    >
      <div
        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default Slider;
