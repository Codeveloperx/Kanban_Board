import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import { navItems } from './data';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  return (
    <aside className="flex h-screen w-16 flex-col justify-center items-center bg-gray-800 text-white">
      <SidebarHeader />

      <nav className="flex-1">
        <div className="flex flex-col justify-center items-center gap-2">
          {navItems.map((item) => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </nav>

      <SidebarFooter />
    </aside>
  );
};
