import { Header } from '@/shared/ui/Header';
import { ContentLayout } from './ContentLayout';
const AppLyout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <span className="bg-gray-800 text-white p-4">Sidebar</span>
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <ContentLayout />
      </div>
    </div>
  );
};

export default AppLyout;
