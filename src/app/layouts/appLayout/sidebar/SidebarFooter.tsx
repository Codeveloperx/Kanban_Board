import { Settings } from 'lucide-react';

interface Propstypes {
  isOpen: boolean;
}

export const SidebarFooter = ({ isOpen }: Propstypes) => {
  return (
    <footer className="border-t border-gray-700 p-4">
      <button className="flex w-full items-center gap-3 rounded-md p-2 hover:bg-gray-700">
        <Settings className="h-5 w-5 shrink-0" />

        {isOpen && <span>Settings</span>}
      </button>
    </footer>
  );
};
