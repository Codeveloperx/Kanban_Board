import type { LucideIcon } from 'lucide-react';

interface PropsTypes {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
  iconClassName?: string;
}

const baseClasses =
  'cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-gray-500 focus-visible:ring-offset-2 hover:bg-gray-700';

export const Button = (props: PropsTypes) => {
  const { icon: Icon, label, onClick, className = '', iconClassName = 'h-5 w-5' } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`${baseClasses} ${className}`}
    >
      <Icon aria-hidden="true" className={iconClassName} />
    </button>
  );
};
