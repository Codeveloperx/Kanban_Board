import { Outlet } from 'react-router';

export const ContentLayout = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      <Outlet />
    </main>
  );
};
