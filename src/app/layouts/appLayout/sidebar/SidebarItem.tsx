import type { LucideIcon } from 'lucide-react';

interface PropsType {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export const SidebarItem = ({ icon: Icon, label }: PropsType) => {
  return (
    <div className="relative group hover:bg-gray-700 p-2 rounded-md cursor-pointer">
      <div className="relative inline-block group">
        <Icon className="w-5 h-5" />

        <span
          className="
       absolute left-full top-1/2 -translate-y-1/2 ml-6
          bg-gray-900 text-white text-xs
          px-2 py-1 rounded
          whitespace-nowrap
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-opacity duration-200
          pointer-events-none
          z-10"
        >
          {label}
        </span>
      </div>
    </div>
  );
};
