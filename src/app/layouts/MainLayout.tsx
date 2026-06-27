import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Kanban Board</h1>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2026 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
