import { Tooltip } from '@/shared/ui/Tooltip';
import type { LucideIcon } from 'lucide-react';

interface PropsTypes {
  icon: LucideIcon;
  label: string;
  isOpen: boolean;
}

export const SidebarItem = ({ icon: Icon, label, isOpen }: PropsTypes) => {
  const row = (
    <div className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-700">
      <Icon className="h-4 w-4" />
      <span
        className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'} `}
      >
        {label}
      </span>
    </div>
  );

  return isOpen ? row : <Tooltip label={label}>{row}</Tooltip>;
};
