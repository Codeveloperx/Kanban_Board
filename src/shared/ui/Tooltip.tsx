import type { ReactNode } from 'react';

interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export const Tooltip = ({ label, children, className = '' }: TooltipProps) => {
  return (
    <div className={`group/tooltip relative inline-block ${className}`}>
      {children}

      <span className="pointer-events-none invisible absolute top-1/2 left-full z-10 ml-6 -translate-y-1/2 rounded bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-focus-within/tooltip:visible group-focus-within/tooltip:opacity-100 group-hover/tooltip:visible group-hover/tooltip:opacity-100">
        {label}
      </span>
    </div>
  );
};
