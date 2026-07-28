import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import { useState } from 'react';
import { SidebarItem } from './SidebarItem';
import { navItems } from './data';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside
      className={`flex flex-col items-stretch justify-between bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-14'}`}
    >
      <SidebarHeader isOpen={isOpen} onToggle={toggleSidebar} />

      <nav className="flex-1">
        <div className={`mt-2 flex flex-col ${!isOpen && 'items-center justify-center'}`}>
          {navItems.map((item) => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} isOpen={isOpen} />
          ))}
        </div>
      </nav>

      <SidebarFooter isOpen={isOpen} />
    </aside>
  );
};
